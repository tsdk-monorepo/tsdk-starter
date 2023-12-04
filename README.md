This is the repo for tsdk quick start tutorial.

## Getting Started

First, install dependencies:

> Recommend use `pnpm`

```sh
pnpm install 
pnpm run ready
```

Then, sync fe-sdk packakge files:

```sh
pnpm --filter=server sync-sdk
```

Run the backend development server:

```sh
pnpm --filter=server dev
```

Run the Next.js development server:

```sh
pnpm --filter=next-app dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run expo (React Native):

```sh
pnpm --filter=expo-app start
```
