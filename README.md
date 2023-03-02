## WORKING

1. vite 셋팅

```bash
yarn create vite
🟥 SWC
```

2. vite에서 셋팅된 App.tsx cleanup



3. `@linaria/core` 설치

```bash
yarn add @linaria/core
```

4. polished 설치

[polished | A lightweight toolset for writing styles in JavaScript](https://polished.js.org/)

```bash
yarn add polished
```

5. `@linaria/react` 설치

react에서 styled-component 처럼 사용할 것이기 때문에 `@linaria/react` 설치

styled-component 사용하는 이유 **개발자 경험 향상**

```bash
yarn add @linaria/react
```

6. vite설정, @linaria 바벨설정하기

<img width="982" alt="스크린샷 2023-03-02 오후 5 24 12" src="https://user-images.githubusercontent.com/42893446/222373225-5bee480e-4662-43de-a315-441b810dee4a.png">

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

<img width="489" alt="스크린샷 2023-03-02 오후 5 27 32" src="https://user-images.githubusercontent.com/42893446/222373213-4dae9842-a381-4171-907e-dc01647a1a12.png">
