import React from 'react'
import { Card } from '../components/Card/Card'

export const Campaigns = () => {

  const campaigns = [
    {
      id: 1,
      name: 'Campaign 1',
      description: 'This is the first campaign',
      date: '2022-01-01',
      author: 'Author 1',

    },
    {
      id: 2,
      name: 'Campaign 2',
      description: 'This is the second campaign',
      date: '2022-01-02',
      author: 'Author 2',
    },
    {
      id: 5,
      name: 'Campaign 2',
      description: 'This is the second campaign',
      date: '2022-01-02',
      author: 'Author 2',
    },
    {
      id: 6,
      name: 'Campaign 2',
      description: 'This is the second campaign',
      date: '2022-01-02',
      author: 'Author 2',
    },
    {
      id: 7,
      name: 'Campaign 2',
      description: 'This is the second campaign',
      date: '2022-01-02',
      author: 'Author 2',
    },
    {
      id: 8,
      name: 'Campaign 2',
      description: 'This is the second campaign',
      date: '2022-01-02',
      author: 'Author 2',
    },
    {
      id: 3,
      name: 'Campaign 3',
      description: 'This is the third campaign',
      date: '2022-01-03',
      author: 'Author 3',
    }
  ]

  return (
    <main className='flex flex-col gap-20'>
      <h1 className='text-5xl text-primary font-semibold'>Featured Campaigns</h1>
      <div className='grid grid-cols-4 gap-5'>
        {campaigns.map(campaign => (
          <Card key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </main>
  )
}
