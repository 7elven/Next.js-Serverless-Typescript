This is a [Next.js](https://nextjs.org/) project bootstrapped with typescript, eslint, babel, prettierr, styled-component and serverless

## Getting Started

install dependency

```bash
yarn
```

run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy with Serverles

1. install `Serverless`

```bash
npm install -g serverless
```

2. go to root workspace directory
3. create `.env` file following

```
AWS_ACCESS_KEY_ID=1234
AWS_SECRET_ACCESS_KEY=1234
```

4. deploy

```bash
serverless
// or
npx serverless
```

- use `--debug` for display logging
