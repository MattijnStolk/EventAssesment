# EventSite

Een Laravel + React (Inertia.js) applicatie voor het beheren en weergeven van evenementen.

## Inhoudsopgave

- [Vereisten](#vereisten)
- [Opstarten](#opstarten)
- [Werking](#werking)
- [Gemaakte keuzes](#gemaakte-keuzes)
  - [Back-end](#back-end)
  - [Afbeeldingen](#afbeeldingen)
  - [Inertia.js](#inertiajs)
  - [CSS](#css)
  - [Componenten](#component-structuur)
- [Verbeteringen](#verbeteringen)
- [AI](#ai)
- [Commands](#handige-commands)

## Vereisten

- [DDEV](https://ddev.readthedocs.io/)
- Node.js 22+ & pnpm
- PHP 8.2+

## Opstarten

### 1. DDEV starten

```bash
ddev start
```

### 2. Dependencies installeren

```bash
ddev composer install
pnpm install
```

### 3. Database migreren en seeden

```bash
ddev exec php artisan migrate:fresh --seed
```

### 4. Storage symlink aanmaken

```bash
ddev exec php artisan storage:link
```

### 5. Development server starten

```bash
pnpm run dev
```

De applicatie is nu beschikbaar op: `https://eventsite.ddev.site`

### Testen op mobiel (ngrok)

```bash
pnpm run build
rm public/hot

ddev share
```

## Werking

### Overzicht

De applicatie toont (na inloggen) een overview van evenementen met hero-afbeeldingen. Gebruikers kunnen:

- Evenementen bekijken (index en detail pagina)
- Evenementen favoriet maken
- Favoriete evenementen bekijken op het dashboard
- Profiel bekijken en aanpassen

## Gemaakte keuzes

### Back-end

Voor de development van de back-end heb ik DDEV gebruikt. DDEV is een open-source tool voor het lokaal developen van PHP (en node.js) applicaties. Hierdoor heb je lokaal geen php (en db) nodig, maar draaien deze in een docker container via DDEV.

### Afbeeldingen

Afbeeldingen worden verwerkt via de `ImageService`:

1. **Downloaden** - Afbeelding ophalen van externe URL
2. **Resizen** - Schalen naar max 1920×1080 pixels
3. **Opslaan** - Opslaan in `storage/app/public/events/`
4. **Serveren** - Beschikbaar via `(url)/storage/events/...`

### Inertia.js

Inertia.js was nieuw voor mij, ook tijdens het eerste gesprek is dit niet benoemd. Na mijzelf kort in te lezen in de documentatie ben ik er maar gewoon mee begonnen. Ik vond dat het redelijk voor zichzelf sprak, maar voor de dingen die niet goed duidelijk waren wist de documentatie mij goed verder te helpen.

### CSS

Omdat ik niet zo vaardig ben met design heb ik een kleurenpalet opgezocht wat ik mooi vond en heb ik dit gebruikt door de website heen. De kleuren heb ik in CSS-variabelen verwerkt waardoor het door de app gelijk wordt getrokken en het op 1 plek aangepast kan worden. Omdat het kleurenpalet donkergroen bevat, heb ik dit in de dark mode van de site gebruikt. Bekijk dus ook zeker de site in dark en light mode.

Ook werkt de site goed op mobiel, ik heb bij [opstarten](#opstarten) benoemd hoe je het daar kunt bekijken.

Zoals eerder in het gesprek benoemd heb ik niet enorm veel css ervaring, dus zullen sommige styles niet helemaal op de juiste manier toegepast zijn. Ik vond dit echter wel erg leuk om te doen dus ik zou hier graag beter in willen worden.

### Component Structuur

Ik heb de stukken code die ik veel zou hergebruiken opgedeeld in componenten, hier zijn er enkele uitgelicht:

- `AppLayout` - Hoofdlayout inclusief navigatie.
- `EventCard` - Kaart voor evenement in lijst op dashboard en evenement overview.
- `Button` - Button met 5 verschillende varianten, waardoor hij goed hergebruikt kan worden en de styling op 1 plek staat.

## Verbeteringen

- Verbeteren componenten structuur door Atomic design methodology te gebruiken.
- Admin (cms) interface voor het beheren van evenementen.
- Tests voor het valideren van de werking van componenten/flows voor het pushen.
- Herschrijven van CSS variabelen, om situaties als text-text-primary te voorkomen.
- Emails service voor de 'wachtwoord vergeten' functionaliteit.
- SEO optimalisaties, Open Graph (og) metadata per evenement.
- Paginatie voor als er meerdere events bij komen.
- Categorieën en filtering op categorieën.
- Git rules toepassen (branch namen en protected main branch)

## AI

Bij het developen van deze opdracht heb ik bewust gebruikgemaakt van AI als ondersteunend hulpmiddel. In mijn dagelijkse werk beschouw ik AI als een moderne toevoeging aan het development process, vergelijkbaar met documentatie, code-reviews of linters. Alle ontwerpkeuzes, implementaties en afwegingen zijn door mijzelf gemaakt, en ik kan deze volledig toelichten.

## Handige commands

| Commando                                     | Beschrijving                               |
| -------------------------------------------- | ------------------------------------------ |
| `ddev start`                                 | Start DDEV omgeving                        |
| `ddev stop`                                  | Stop DDEV omgeving                         |
| `pnpm run dev`                               | Start Vite development server              |
| `pnpm run build`                             | Bouw productie assets                      |
| `rm public/hot`                              | Verwijder development (hot reload) bestand |
| `ddev exec php artisan migrate:fresh --seed` | Reset database met test data               |
| `ddev share`                                 | Deel site via ngrok                        |
