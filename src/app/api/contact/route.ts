import { NextResponse } from "next/server";

// In-memory throttle map: IP → last timestamp
// Note: Serverless memory is ephemeral; this is deterrent-only, not foolproof
const throttleMap = new Map<string, number>();
const THROTTLE_MS = 60 * 1000; // 60 seconds

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot: doluysa bot
    if (typeof body.honeypot === "string" && body.honeypot.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Throttle check: 60-second cooldown per IP
    const ip = getClientIp(req);
    const now = Date.now();
    const lastTime = throttleMap.get(ip);

    if (lastTime && now - lastTime < THROTTLE_MS) {
      return NextResponse.json(
        { ok: false, error: "Çok hızlı gönderim. 1 dakika sonra tekrar deneyin." },
        { status: 429 }
      );
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const details = String(body.details ?? "").trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (name.length < 2 || !emailOk || subject.length < 3 || details.length < 10) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    // Update throttle map
    throttleMap.set(ip, now);

    // Şimdilik log (deploy'da provider bağlanacak)
    console.log("[CONTACT]", { name, email, subject, details });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
