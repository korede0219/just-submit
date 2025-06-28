
import React from 'react'
import {useParams} from 'react-router-dom'

const PIzzaDetails = () => {
      const {title} = useParams();
  return (
   <div className="container">
      <h1 className='mt-5 text-primary'>This the best pizza you can get: {title}</h1>
   </div>
  )
}

export default PIzzaDetails