"use client";
import { useState, useEffect } from "react";
import { GetHello, UpdateHello, UpdateHelloReq } from "@/lib/user-api";

export function useHello() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    GetHello({}).then((res) => {
      setHello(res.result);
    });
  }, []);

  async function update(payload: UpdateHelloReq["payload"]) {
    const res = await UpdateHello({ payload });
    setHello(res.result);
  }

  return {
    hello,
    update,
  };
}
