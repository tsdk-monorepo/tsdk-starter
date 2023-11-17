import { GetHello } from "@/lib/user-api";


console.assert(process.env.API_URL !== undefined, 'process.env.API_URL is `undefined`');

export default async function HelloPage() {
  const res = await GetHello({});

  return (
    <div>{res.result}</div>
  )
}