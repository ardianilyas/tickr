'use client'

import { useUserStore } from "@/features/auth/stores/useUserStore";

export default function Home() {
  const user = useUserStore ((state) => state.user);
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      {user && <pre>Welcome, {user?.email}</pre>}
    </div>
  );
}
