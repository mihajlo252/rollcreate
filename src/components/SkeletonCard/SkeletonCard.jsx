import React from 'react'

export const SkeletonCard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-2 h-3 w-56 animate-pulse rounded-full bg-gray-500'></div>
    </div>
  )
}
