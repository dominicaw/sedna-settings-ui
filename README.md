# Sedna Settings UI Component Library

### Running the repo

```
npm run dev
```

This will also run `npm install`

### Why Vite?

- Familiar build tool
- Has [simple setup](https://vite.dev/guide/build.html#library-mode) for a basic npm library

### Why React + Typescript?

- Part of the assignment brief
- Familiar framework

### Why vanilla CSS?

- Vite has out of the box support for [CSS modules](https://vite.dev/guide/features.html#css-modules) for scoped CSS
- Does the job for the assignment

### Adjustments for a real use case

Some thoughts on what I would do for a production ready component library:

- Managing an entirely custom component library would be a huge resource investment. Using something like MUI or Shadcn as the base and customising on top of this would be quicker to production and less continued maintenance (barring major version updates of the base package).
- A CSS framework like TailwindCSS would make collaboration easier and would be simpler to maintain.

### To do:

1. ✅ Set up basic library folder structure as per [Vite docs](https://vite.dev/guide/build.html#library-mode)
2. ✅ Create toggle component
3. ❌ ~~Make a nice index.html?~~ Decided to extend toggle component to take size prop instead
4. ❌ ~~Tests? Probably overkill~~
