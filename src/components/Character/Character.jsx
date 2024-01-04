import React from 'react'
import { useLocation } from 'react-router-dom'

export const Character = () => {
  const location = useLocation()


  return (
    <div>{location.state.name}</div>
  )
}
