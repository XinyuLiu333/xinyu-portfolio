"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

type GateContextType = {
  unlocked: boolean;
  unlock: (passcode: string) => Promise<boolean>;
  lock: () => void;
};

const GateCtx = createContext<GateContextType>({
  unlocked: false,
  unlock: async () => false,
  lock: () => {},
});

const STORAGE_KEY = "portfolio-unlocked";

export function GateProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(localStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  const unlock = useCallback(async (passcode: string) => {
    const res = await fetch("/api/verify-passcode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passcode }),
    });
    if (res.ok) {
      localStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
      return true;
    }
    return false;
  }, []);

  const lock = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUnlocked(false);
  }, []);

  return (
    <GateCtx.Provider value={{ unlocked, unlock, lock }}>
      {children}
    </GateCtx.Provider>
  );
}

export function useGate() {
  return useContext(GateCtx);
}
