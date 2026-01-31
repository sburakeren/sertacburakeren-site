# Developer Setup & Troubleshooting

Bu dokümanda projede karşılaşılabilecek yaygın geliştirme ortamı sorunlarına kalıcı çözümler bulacaksınız.

---

## 🔧 Node.js Versiyonu (ÖNERİLEN)

Proje **Node.js 22 LTS** ile en kararlı şekilde çalışır.

### Neden Node 22 LTS?

- **Kararlılık**: Production-ready LTS release
- **Performans**: Next.js 16+ optimizasyonları ile uyumlu
- **Uyumluluk**: File watcher/network interface edge case'leri minimize
- **Node 25 (current)**: Experimental özellikler içerdiği için dev ortamında sorun çıkarabilir

### Kurulum (nvm ile)

```bash
# Node 22 LTS'yi kur
nvm install 22
nvm use 22

# Versiyonu doğrula
node --version  # v22.x.x görmeli

# Temiz kurulum
rm -rf node_modules .next
npm install
npm run dev
```

---

## ⚠️ EMFILE: too many open files

### Neden Olur?

- Next.js dev server çok sayıda dosya izler (HMR/Fast Refresh)
- macOS varsayılan file descriptor limiti düşük (256-512)
- Büyük projeler veya monorepo'larda sık görülür

### Hızlı Çözüm (geçici, terminal oturumu için)

```bash
# Mevcut limiti kontrol et
ulimit -n

# Limiti yükselt (10240 yeterli)
ulimit -n 10240

# Dev server'ı başlat
npm run dev
```

### Kalıcı Çözüm (önerilen)

**1. Polling modu etkinleştir (`.env.local`)**

Proje root'unda `.env.local` dosyası zaten oluşturuldu:

```bash
WATCHPACK_POLLING=true
CHOKIDAR_USEPOLLING=true
CHOKIDAR_INTERVAL=350
```

**2. Shell konfigürasyonuna ekle (`~/.zshrc` veya `~/.bashrc`)**

```bash
# ~/.zshrc dosyasını aç
nano ~/.zshrc

# En alta ekle:
ulimit -n 10240

# Kaydet ve yeniden yükle
source ~/.zshrc
```

**3. Sistem seviyesi limit (macOS Ventura+)**

```bash
# LaunchDaemon ile kalıcı (isteğe bağlı)
# /Library/LaunchDaemons/limit.maxfiles.plist oluştur (sudo gerekir)
# Bu yöntem için araştırma yapılması önerilir
```

---

## 🔄 npm devdir warning

### Hata Mesajı

```
npm WARN config devdir This config is deprecated. Use `--global-style` or `--prefer-dedupe` instead.
```

### Neden Olur?

- Cursor IDE sandbox ortamından gelen env variable
- Proje dışı bir ayar olabilir
- Zararsız ama gürültü yaratır

### Kontrol Et

```bash
# npm_config_devdir var mı?
env | grep -i npm_config

# Varsa göreceksin:
# npm_config_devdir=...
```

### Geçici Temizleme

```bash
# Mevcut terminal oturumunda kaldır
unset npm_config_devdir

# Dev server'ı tekrar başlat
npm run dev
```

### Kalıcı Temizleme (`~/.zshrc`)

```bash
# ~/.zshrc dosyasını aç
nano ~/.zshrc

# En alta ekle:
unset npm_config_devdir

# Kaydet ve yeniden yükle
source ~/.zshrc
```

**Not**: Cursor sandbox kaynaklıysa her seferinde tetiklenebilir. Harmless warning olarak ignore edilebilir.

---

## 🚀 Hızlı Reset

Proje çöktüyse veya garip hatalar varsa:

```bash
# 1. Temizle
rm -rf node_modules .next

# 2. Yeniden kur
npm install

# 3. Dev server'ı başlat
npm run dev
```

---

## 📦 Komutlar

```bash
npm run dev      # Dev server (http://127.0.0.1:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint kontrolü
npm run format   # Prettier formatı
```

---

## 🔍 Sorun Yaşıyorsan

1. Node versiyonunu kontrol et: `node --version` (22.x olmalı)
2. `.env.local` dosyasını kontrol et (polling ayarları)
3. `ulimit -n` çıktısını kontrol et (10240 olmalı)
4. Terminal'i kapat/aç (`~/.zshrc` değişikliklerinden sonra)
5. Temiz kurulum yap (`rm -rf node_modules .next && npm i`)

---

Daha fazla bilgi için Next.js dokümantasyonu:

- https://nextjs.org/docs/messages/install-sharp
- https://nextjs.org/docs/messages/fast-refresh
