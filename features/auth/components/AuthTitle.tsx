import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function AuthTitle({ children }: Props) {
  return (
    <h2 className="text-3xl font-medium">
        {children}
    </h2>
  )
}