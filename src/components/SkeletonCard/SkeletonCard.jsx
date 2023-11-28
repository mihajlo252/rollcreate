import React from 'react'

export const SkeletonCard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='w-56 h-3 bg-gray-500 animate-pulse rounded-full mb-2'></div>
      <div className='w-36 h-3 bg-gray-500 animate-pulse rounded-full'></div>
      <div className='w-24 h-3 bg-gray-500 animate-pulse rounded-full'></div>
    </div>
  )
}
