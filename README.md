# Hitomi Redesign — Konzept

Ein **inoffizielles Redesign-Konzept** für die Website von Hitomi, einer Gruppe japanisch-chinesischer
Restaurants mit zehn Standorten in Wien. Lern- und Portfolio-Projekt, **keine offizielle Website von Hitomi**.

## Design

„Washi Poster“: warmes Papier, tintenschwarze Schrift, eine zinnoberrote Sonne (aus Hitomis Logo),
Senf-Akzente, 千喜-Stempel und ein Kirschblütenzweig im Tuschmalerei-Stil.

- **Hero:** Die rote Sonne wächst beim Scrollen zu einem Foto (GSAP ScrollTrigger)
- **Standorte & Kontakte:** alle zehn Restaurants, Filter nach Konzept, offizielle Speisekarte, Anrufen, Map
- **Fotos:** Galerie mit Hitomis eigenen Fotos, in Dreiergruppen
- **Footer:** Kontakt, Lieferdienste, Impressum/Datenschutz (Links zu hitomi.at)

Style Guide: `/styleguide`

## Technik

- [Astro](https://astro.build) — statische Website
- [Tailwind CSS v4](https://tailwindcss.com) — Design-Tokens in `src/styles/global.css`
- [GSAP](https://gsap.com) + ScrollTrigger — Animationen
- Selbst gehostete Schriften (Fontsource): Unbounded, Fraunces, Space Grotesk, Shippori Mincho (auf die verwendeten Kanji reduziert)

## Projektstruktur

```text
src/
├── assets/images/hitomi/   Fotos von hitomi.at (siehe CREDITS.md)
├── components/             Header, Hero, LocationsSection, GallerySection, Footer, …
├── data/concepts.ts        Standorte, Öffnungszeiten, Telefonnummern, Speisekarten-Links
├── layouts/BaseLayout.astro
├── pages/                  index.astro, styleguide.astro
├── scripts/reveal.ts       Scroll-Einblendungen
└── styles/                 global.css (Tokens), fonts-jp.css
```

## Befehle

| Befehl            | Aktion                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Abhängigkeiten installieren                |
| `npm run dev`     | Entwicklungsserver auf `localhost:4321`    |
| `npm run build`   | fertige Website nach `./dist/` bauen       |
| `npm run preview` | gebaute Website lokal ansehen              |

## Rechtliches

Marke, Inhalte und Fotos gehören Hitomi (Hitomi Q Gastro KG). Vor einer öffentlichen Veröffentlichung
sollte Hitomi um Erlaubnis gefragt werden. Die Seite ist für Suchmaschinen auf `noindex` gesetzt,
damit sie nicht mit der offiziellen Website verwechselt wird.
