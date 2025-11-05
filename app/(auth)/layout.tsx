import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 font-sans dark:bg-neutral-800">
      <div className='py-6 pl-6 hidden lg:block basis-5/12 w-full h-screen'>
        <div className='bg-violet-600 h-full p-6 rounded-lg shadow-lg text-white pt-12'>
          <div className="max-w-md">
            <h1 className='text-7xl font-medium mb-4'>Tickr</h1>
            <p className="text-neutral-50 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus at vero placeat!</p>
          </div>
        </div>
      </div>
      <div className='py-6 pr-0 lg:pr-6 basis-full lg:basis-7/12 w-full h-screen'>
        <div className='h-full px-10 rounded-lg shadow-lg flex items-center justify-center'>
          <div className="max-w-md w-full text-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}