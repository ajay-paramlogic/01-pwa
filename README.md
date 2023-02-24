https://web.dev/learn/pwa/
## Features

- [X] App Icons
- [X] SplashScreen
- [X] WebManifest
- [ ] SafeArea
- [ ] StatusBar Color
- [X] Meta Tags
- [X] Service Worker
- [ ] Push Notifications
- [X] Deployment | Vercel
- [ ] Animations with Framer Motion
- [ ] Camera, Geolocation
- [X] Supabase

## PNPM
```
npm install -g pnpm
```

## Static Files
1. Create a folder called `public` in the root of your project.


# Starter Kit for Vite, React, TypeScript, Tailwind and Node.js ESM∏
_Minimal, sensible defaults, fast._
Read [the blog post about this template](https://cpojer.net/posts/fastest-frontend-tooling-in-2022).


### App Icons 
https://thenounproject.com/
https://realfavicongenerator.net/
https://github.com/elegantapp/pwa-asset-generator
```
pnpm i -D pwa-asset-generator
npx pwa-asset-generator js-logo.png --background "#ade8f4" --xhtml public/pwa-assets
npx pwa-asset-generator js-logo.png --background "#ade8f4" --xhtml public/pwa-assets --icon-only
```

### Web Manifest
```
pnpm i -D vite-plugin-pwa
```