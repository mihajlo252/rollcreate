import React, { useEffect, useState } from 'react'
import { getData } from '../utilities/getData'

export const Create = () => {
  
  const [classes, setClasses] = useState([])

  const handleGetClasses = async () => {
    const type_of_file = 'Classes'
    const res = await getData(type_of_file)
    setClasses(res)
  }

  useEffect(() => {
    handleGetClasses()
  }, [])

  return (
    <div>
      {classes.map(c => (
        <button className='btn btn-ghost' key={c.name}>
          <p>{c.name}</p>
        </button>
      ))
      }
    </div>
  )
}
