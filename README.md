[![Stackblitz](https://img.shields.io/badge/Stackblitz-fff?style=for-the-badge&logo=Stackblitz&logoColor=1389FD)](hansanghyeon-boilerplate/linaria-vite)

[callstack/linaria: Zero-runtime CSS in JS library](https://github.com/callstack/linaria)

## WORKING

### 1. vite ์ํ

```bash
yarn create vite
๐ฅ SWC
```

### 2. vite์์ ์ํ๋ App.tsx cleanup

`App.tsx`์์ ๋ถํ์ํ ์ฝ๋๋ค ์ญ์ 


### 3. `@linaria/core` ์ค์น

```bash
yarn add @linaria/core
```

### 4. @linaria ์ํฌํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ 

#### polished ์ค์น (linaria ๊ณต์๋ฌธ์ ์ฑ์ฉ๋์ด์๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ)

[polished | A lightweight toolset for writing styles in JavaScript](https://polished.js.org/)

```bash
yarn add polished
```

#### tailwind, twin.macro

[ben-rogerson/twin.macro: ๐ฆนโโ๏ธ Twin blends the magic of Tailwind with the flexibility of css-in-js (emotion, styled-components, stitches and goober) at build time.](https://github.com/ben-rogerson/twin.macro)

```bash
yarn add twin.macro
```

### 5. `@linaria/react` ์ค์น

react์์ styled-component ์ฒ๋ผ ์ฌ์ฉํ  ๊ฒ์ด๊ธฐ ๋๋ฌธ์ `@linaria/react` ์ค์น

styled-component ์ฌ์ฉํ๋ ์ด์  **๊ฐ๋ฐ์ ๊ฒฝํ ํฅ์**

```bash
yarn add @linaria/react
```

### 6. vite์ค์ , @linaria ๋ฐ๋ฒจ์ค์ ํ๊ธฐ

<img width="982" alt="แแณแแณแแตแซแแฃแบ 2023-03-02 แแฉแแฎ 5 24 12" src="https://user-images.githubusercontent.com/42893446/222373225-5bee480e-4662-43de-a315-441b810dee4a.png">

```bash
yarn add -D @linaria/vite
```

```bash
yarn add -D @babel/preset-typescript @babel/preset-react
```

```bash
# vite.config.ts
export default defineConfig({
  plugins: [
    react(),
    linaria({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
  ],
})
```

WOW!!

<img width="489" alt="แแณแแณแแตแซแแฃแบ 2023-03-02 แแฉแแฎ 5 27 32" src="https://user-images.githubusercontent.com/42893446/222373213-4dae9842-a381-4171-907e-dc01647a1a12.png">

7. css์์ฑ, styled์์ฑ์์ ๊ตฌ์ฑ์์ ์ง์ ํด์ ์ฌ์ฉํ๊ธฐ

[callstack/linaria: Zero-runtime CSS in JS library](https://github.com/callstack/linaria#interoperability-with-other-css-in-js-libraries)

<img width="1002" alt="แแณแแณแแตแซแแฃแบ 2023-03-02 แแฉแแฎ 5 33 16" src="https://user-images.githubusercontent.com/42893446/222374448-c7bff37c-27bf-4507-a967-cae9a8ccd7ac.png">

WHY?!!?!?!

```bash
๐ฅ yarn add -D @linaria/babel-plugin-interop
```

์ค์นํ์ง ์๋๋ค.

