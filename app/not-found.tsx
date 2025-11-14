"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NotFoundPage() {
    const searchParams = useSearchParams();
    const message = searchParams.get("message");

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-fuchsia-50 font-sans dark:bg-black">
            <h1 className="text-3xl font-medium">404 - Not Found</h1>
            <p>
                {message ?? "The page you are looking for does not exist."}
            </p>
            <Link href="/dashboard">Go Home</Link>
        </div>
    )
}