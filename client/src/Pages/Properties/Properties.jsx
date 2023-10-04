import React from 'react'

const Properties = ({card}) => {
  return (
    <div className='property'>
        <div className='title'>
        {card.title}
        <div className='room'>
           {card.room} Room
        </div>
        </div>
    </div>
  )
}

export default Properties
