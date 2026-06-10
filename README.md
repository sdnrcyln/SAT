# Design House Global

Uluslararası standartlarda sanat ve tasarım eğitimi, portfolyo hazırlığı ve yaratıcı gelişim platformu.

## Hızlı Başlangıç

```bash
# 1. Doğru branch'te olduğunuzdan emin olun (site kodu bu branch'te)
git checkout cursor/design-house-global-site-3bac

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcıda açın: **http://localhost:3000**

## Sorun Giderme

### Sayfa açılmıyor / Internal Server Error

Önbelleği temizleyip yeniden başlatın:

```bash
npm run dev:clean
```

veya:

```bash
rm -rf .next
npm run dev
```

### `npm run dev` çalışmıyor / package.json yok

`main` branch'inde henüz site kodu olmayabilir. Şu branch'e geçin:

```bash
git fetch origin
git checkout cursor/design-house-global-site-3bac
npm install
npm run dev
```

### Port 3000 meşgul

Farklı port ile başlatın:

```bash
npx next dev -p 3001
```

Sonra http://localhost:3001 adresini açın.

### Node.js sürümü

Node.js **18.18+** veya **20+** gerekir. Kontrol:

```bash
node -v
```

## Scripts

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu (önerilen) |
| `npm run dev:clean` | `.next` silip sunucuyu başlatır |
| `npm run dev:turbo` | Turbopack ile (deneysel) |
| `npm run build` | Production build |
| `npm run start` | Production sunucu (`build` sonrası) |
| `npm run lint` | ESLint |

## Sayfalar

- `/` — Ana Sayfa
- `/hakkimizda` — Hakkımızda
- `/egitim-programlari` — Eğitim Programları
- `/portfolyo` — Portfolyo Hazırlık Merkezi
- `/teknoloji` — Teknoloji & Üretim
- `/yurtdisi` — Yurtdışı Okullar
- `/sanat-terapisi` — Sanat Terapisi
- `/blog` — Blog
- `/ogrenci-calismalari` — Öğrenci Çalışmaları
- `/iletisim` — İletişim
