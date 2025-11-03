import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 font-sans dark:bg-neutral-800">
        <div className="max-w-xl w-full p-6 shadow-md rounded-md bg-white dark:bg-neutral-900">
            {children}
        </div>
    </div>
  )
}