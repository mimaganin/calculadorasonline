# Astro – Calculadoras Evergreen

Projeto pronto para deploy com 10 calculadoras evergreen, SEO básico, sitemap e placeholders para AdSense e Plausible.

## Instalação

```bash
pnpm i   # ou npm i / yarn
pnpm dev # http://localhost:4321
```

Antes do deploy:
- Edite `astro.config.mjs` e defina `site` com seu domínio.
- Substitua IDs do AdSense em `src/components/AdSlot.astro` e ative o script no `<head>` de `BaseLayout.astro`.
- Ajuste `public/robots.txt` e `public/ads.txt`.
- Opcional: habilite Plausible.

## Build

```bash
pnpm build
pnpm preview
```

## Deploy

- **Vercel**: importe o repositório e use o comando padrão.
- **Cloudflare Pages**: comando `astro build`, pasta de saída `dist`.

## Programmatic SEO (exemplos)

- `/calculadora-de-idade/[data].astro` → `/calculadora-de-idade/2000-01-01`
- `/calculadora-de-imc/[altura]-[peso].astro` → `/calculadora-de-imc/175-70`
- `/calculadora-de-porcentagem/[porcentagem]-de-[valor].astro` → `/calculadora-de-porcentagem/15-de-200`
- `/dias-entre-datas/[data1]-e-[data2].astro` → `/dias-entre-datas/2025-01-01-e-2025-12-31`

Para gerar milhares de páginas, crie `getStaticPaths()` puxando uma lista (CSV/JSON) e retorne `params` em massa.

## Privacidade e GDPR

- Inclua um banner de consentimento de cookies se usar anúncios personalizados (ex.: Cookiebot).
- Atualize a Política de Privacidade conforme suas práticas.

Bom proveito! 🚀
