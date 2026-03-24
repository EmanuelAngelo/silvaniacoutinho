# Silvânia Odontologia

Site (Vue 3 + Vite) da **Dra. Silvânia Coutinho** — odontologia, tratamentos e contato.

## Stack

- Vue 3 + Vite + TypeScript
- Vuetify + Tailwind CSS
- Vue Router + Pinia + Vue I18n

## Requisitos

- Node.js (recomendado LTS)
- npm

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build / Preview

```bash
npm run build
npm run preview
```

## Qualidade

```bash
npm run lint
npm run type-check
```

## Conteúdo (textos)

- i18n global: `src/plugins/i18n.ts`
- Idiomas: `pt-BR` e `en-US`
- Toggle de idioma: `src/components/wolf/LanguageToggleButton.vue`

## Imagens e logos

### Assets em `public/`

Tudo em `public/` vira uma URL direta. Para suportar deploy em subpasta, o projeto usa `publicAsset()` em `src/content/media.ts`.

Arquivos principais:

- Logo/ícone (usado no topo/rodapé): `public/odontologia.png` (renderizado por `src/components/wolf/WolfLogo.vue`)
- Foto/retrato (usado em Home/Sobre e como fallback): `public/silvania/silvania.jpeg` (configurado em `src/content/media.ts`)

### Imagens organizadas por área

Estrutura recomendada:

- `public/data/hero/clinic-1.jpeg`
- `public/data/hero/clinic-2.jpeg`
- `public/data/hero/clinic-3.jpeg`

- `public/data/areas/clareamento/{1,2,3}.jpeg`
- `public/data/areas/ortodontia/{1,2,3}.jpeg`
- `public/data/areas/implantes/{1,2,3}.jpeg`
- `public/data/areas/estetica-do-sorriso/{1,2,3}.jpeg`
- `public/data/areas/prevencao/{1,2,3}.jpeg`
- `public/data/areas/clinica-geral/{1,2,3}.jpeg`

Configuração central:

- `src/content/media.ts`
	- Hero: `media.home.hero`
	- Capas (Home): `media.home.categoryCovers.*`
	- Pools por área: `media.areas.*`

## Fotos/galeria por tratamento

Os cards e a galeria são alimentados por `src/data/photos.ts`, que agrega as áreas abaixo:

- `src/data/photos/clareamento.ts`
- `src/data/photos/ortodontia.ts`
- `src/data/photos/implantes.ts`
- `src/data/photos/estetica-do-sorriso.ts`
- `src/data/photos/prevencao.ts`
- `src/data/photos/clinica-geral.ts`

Slugs (rotas):

- `/portfolio/clareamento`
- `/portfolio/ortodontia`
- `/portfolio/implantes`
- `/portfolio/estetica-do-sorriso`
- `/portfolio/prevencao`
- `/portfolio/clinica-geral`
