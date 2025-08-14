import React from 'react'
import { Timeline } from '../components/timeline'
import { experiences } from '../constants'

const Experiences = () => {
  return (
    <div>
        <Timeline data={experiences}/>
    </div>
  )
}

export default Experiences