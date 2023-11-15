'use client'

import { NextUIProvider as Provider } from '@nextui-org/react'
import { PropsWithChildren } from 'react'

export function NextUIProvider({ children }: PropsWithChildren) {
  return (
    <Provider className='w-full h-full'>
      {children}
    </Provider>
  )
}