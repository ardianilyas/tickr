import React from 'react'

type Props = {
    message: string | undefined
}

export default function InputError({ message }: Props) {
  return (
    <div className='text-sm text-left text-red-600 mt-1'>
        {message}
    </div>
  )
}