'use client';

import { useGetHello, useUpdateHello } from "@/lib/user-api-hooks";


export default function HelloPage() {
  const { data, mutate, error } = useGetHello({});
  const { trigger } = useUpdateHello()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{data?.result}</h1>
      <button
        className="bg-indigo-500 rounded px-2 py-4 text-white"
        onClick={async () => {
          await trigger({ payload: 'Hello tsdk!' });
          mutate();
        }}>
        Update to `Hello tsdk!`
      </button>
    </div>
  )
}