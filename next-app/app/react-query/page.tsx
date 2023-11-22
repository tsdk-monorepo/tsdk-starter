'use client';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useGetHello, useUpdateHello } from './hooks'


const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { data, refetch } = useGetHello({});
  const {
    mutateAsync,
  } = useUpdateHello();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{data?.result}</h1>
      <button
        className="bg-indigo-500 rounded px-2 py-4 text-white"
        onClick={async () => {
          await mutateAsync({ payload: 'Hello tsdk!' });
          refetch();
        }}>
        Update to `Hello tsdk!`
      </button>
    </div>
  )
}
