This is the repo for tsdk quick start tutorial.


## Getting Started

First, install dependencies:

> Recommend use `pnpm`

```sh
pnpm install
```

Then, sync fe-sdk packakge files:

```sh
pnpm tsdk --sync
```

Run the backend development server:

```sh
pnpm dev
```

And run the Next.js development server:

```sh
pnpm --filter=next-app dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
