'use client';

import { useHello } from './useHello';

export default function Home() {
  const { hello, update } = useHello();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{hello}</h1>
      <button
        className="bg-indigo-500 rounded px-2 py-4 text-white"
        onClick={() => {
          update('Hello tsdk!');
        }}>
        Update to `Hello tsdk!`
      </button>
    </div>
  );
}