# Postfabrica — Landing Page

Türkiye KOBİ’leri için saha-odaklı AI & otomasyon danışmanlığının landing page’i.

> **Postfabrica** (Andrea Branzi’nin 1980’lerdeki *Post-Fabbrica* konseptinden esinlenmiştir: fabrika gibi katı iş akışlarından, akışkan ve akıllı operasyonlara geçiş.)

**[postfabrica.co](https://postfabrica.co)** _(alan adı tescillenecek)_ · `merhaba@postfabrica.co`

---

## İçerik

Tek sayfa (one-pager) — sırasıyla:

1. **Hero** — ana mesaj, canlı akış örneği, trust bandı
2. **Problem** — Türkiye KOBİ’sinin 4 temel ağrı noktası
3. **Yöntem** — 4 adımlı Postfabrica yöntemi + 4 katmanlı çözüm mimarisi (L0–L3)
4. **Paketler** — P0 (denetim) · P1 (hızlı kazanım) · P2 (dönüşüm) · P3 (özel mimari)
5. **Hedef Müşteri (ICP)** — 5 birincil sektör + hariç tutulanlar
6. **Manifesto** — 10 temel ilke
7. **SSS** — 7 sık sorulan soru (açılır/kapanır accordion)
8. **İletişim** — lead form + doğrudan kanallar
9. **Footer**

## Stack

- **[Astro 7](https://astro.build)** — statik site, ~88 KB build, 9 KB gzipped HTML
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first
- **Tipografi** — Fraunces (serif, başlıklar) · Inter (gövde) · JetBrains Mono (kod/labels)
- **Form** — Formspree placeholder (`src/sections/Contact.astro`); üretimde kendi n8n webhook’umuza bağlanabilir
- **Self-hosted-friendly** — statik çıktı her CDN’de çalışır (Cloudflare Pages, Netlify, GitHub Pages, kendi Nginx)

## Geliştirme

```bash
npm install
npm run dev      # dev server: http://127.0.0.1:4321
npm run build    # production build → ./dist
npm run preview  # build’i lokal serve et
```

> Dev server `astro dev --background` ile arka planda çalışır.

## Yapı

```
src/
├── layouts/Layout.astro        # HTML iskeleti, fontlar, meta
├── components/
│   ├── Nav.astro               # sticky üst gezinme
│   └── Footer.astro
├── sections/                   # her bölüm ayrı dosya (kolay bakım)
│   ├── Hero.astro
│   ├── Problem.astro
│   ├── Method.astro
│   ├── Packages.astro
│   ├── ICP.astro
│   ├── Manifesto.astro         # 10 ilke + SSS accordion
│   └── Contact.astro           # lead form
├── styles/global.css           # Tailwind + tema (ink/paper/accent)
└── pages/index.astro           # tek sayfa
```

## Tasarım Sistemi

`src/styles/global.css` içindeki `@theme` bloğunda tanımlı:

| Token | Değer | Kullanım |
|---|---|---|
| `ink` | `#0a0a0a` | Ana metin, koyu yüzeyler |
| `paper` | `#fafaf9` | Arka plan |
| `cream` | `#f5f4f1` | Yumuşak yüzeyler, vurgu zeminleri |
| `line` | `#e7e5e0` | Ayraçlar |
| `muted` | `#6b6b66` | İkincil metin |
| `accent` | `#d97706` | CTA’lar, vurgu (turuncu-amber) |

## İçerik Kaynağı

Strateji, ICP ve mesajlaşma detayları `~/wiki/postfabrica/README.md` adresindeki kapsamlı strateji dokümanında yaşıyor. Landing page buradan türetilmiştir; strateji değiştiğinde burası güncellenmeli.

## Lisans

© 2026 Postfabrica. Tüm hakları saklıdır.

Kod referans amaçlıdır; izinsiz kopyalanamaz.
