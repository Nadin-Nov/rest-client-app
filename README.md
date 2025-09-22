# REST Client App

A web application for sending HTTP requests and testing REST APIs, with code generation, and localization support.
Deployed at: [meowman-rss.netlify.app](https://meowman-rss.netlify.app/ru/main)

## Tech Stack

- Next.js 15 + React 19
- Mantine UI
- CodeMirror for JSON editing
- react-hook-form + zod
- next-intl for localization
- Firebase (authentication & data storage)
- Postman SDK (request code generation)

## Installation & Setup

Clone the repository and enter the folder.

```
git clone https://github.com/Nadin-Nov/rest-client-app.git
cd rest-client-app
```

Install dependencies.
`npm install
`
Start in development mode.

`npm run dev
`
Build for production.

```
npm run build
npm run start

```

The app will be available at http://localhost:3000.

### Environment Variables

Create a `.env.local` file and add your Firebase and other required environment variables:

```

- NEXT_PUBLIC_FIREBASE_API_KEY
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NEXT_PUBLIC_FIREBASE_PROJECT_ID
```

## Testing

- Unit tests: Vitest

Run unit tests, run coverage, and run E2E tests.

`npm run test
npm run coverage

`

## Linting & Formatting

- ESLint
- Prettier
- Stylelint

Run linters and formatters to check and fix code.

## Deployment

The app is deployed on Netlify using @netlify/plugin-nextjs.

## Team

- [@27moon](https://github.com/27moon)
- [@Gnarkill33](https://github.com/Gnarkill33)
- [@Nadin-Nov](https://github.com/Nadin-Nov)

A team of curious cats crafting cozy digital worlds 🐾

## Thanks

A huge purr-thank-you to our wonderful mentor [@gentoosiast](https://github.com/gentoosiast)
