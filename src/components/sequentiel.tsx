import React from 'react'

type Props = {
  id: number,
  name: string,
  pictogrammes?: string[], // 3 pictogrammes max
}

export const Sequentiel = ({ id, name, pictogrammes }: Props) => {
  return (
    <div className='relative border-1 rounded-lg'>
      <p>{name}</p>
    </div>
  )
}
