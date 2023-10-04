import React from 'react'
import {Link} from 'react-router-dom'
import bed from '../../Assets/bed.png'
import bath from '../../Assets/bath.png'
import area from '../../Assets/area.png'
import room from '../../Assets/room.png'
const CardTag = ({card}) => {
  return (
      <div className='card-body'>
        <div className='card-body-div'>
            <img src={card.img} className='card-img'/>
            <Link to='/' className='for-rent'>For Rent</Link>
            <div className='card-title' >{card.title}
            <div className='card-icon'>
                <p className='card-icon-1'>
                    <img src={room} alt='room' width='20px'/>
                    {card.room}room
                </p>
                <div className='card-icon-1'>
                    <img src={bed} alt='bed' width='20px'/>
                    {card.bed}bed
                </div>
                <p className='card-icon-1'>
                    <img src={bath} alt='bath' width='20px'/>
                    {card.bath}bath
                </p>
                <p className='card-icon-1'>
                    <img src={area} alt='area' width='20px'/>
                    {card.area}
                </p>
            </div>
            <div className='card-footer'>
            <p className='card-rent'>
                <span style={{color:"blue"} }> {card.rent}</span>/month
            </p>
            <Link to={`/Properties/${card.id}`} className='card-link'>Read more</Link></div>
            </div>
        </div>
       
    </div>
  )
}

export default CardTag
