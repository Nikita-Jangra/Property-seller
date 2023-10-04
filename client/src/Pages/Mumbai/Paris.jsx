import React, {useState ,useEffect} from 'react'
import './Mumbai.css'
import img2 from '../../Assets/img-2.webp'
import img1 from '../../Assets/img-1.webp'
import img3 from '../../Assets/img-3.webp'
import {Link} from 'react-router-dom'
import bed from '../../Assets/bed.png'
import bath from '../../Assets/bath.png'
import area from '../../Assets/area.png'
import room from '../../Assets/room.png'
const NewYork = ({card}) => {
    const [items, setItems] = useState([])
  const [currentpage, setCurrentpage] = useState(3)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((Cards)=> setItems(Cards));
  }, [])
  const showMoreItems =()=>{
    setCurrentpage((preValue)=> preValue+3);
  };
    var Cards =[{
        id: 1,
        img: img3,
        title : "lorem",
        room: 2,
        bed:2,
        bath: 1,
        area: "445sft",
        rent: "$4200",
      },
        {id: 2,
        img: img1,
        title : "lorem",
        room: 2,
        bed:2,
        bath: 1,
        area: "445sft",
        rent: "$4200",
      },
        {id: 3,
        img: img3,
        title : "lorem",
        room: 2,
        bed:2,
        bath: 1,
        area: "445sft",
        rent: "$4200",
      },
        {id: 4,
        img: img1,
        title : "lorem",
        room: 2,
        bed:2,
        bath: 1,
        area: "445sft",
        rent: "$4200",
      },
        {id: 5,
        img: img1,
        title : "lorem",
        room: 2,
        bed:2,
        bath: 1,
        area: "445sft",
        rent: "$4200",
      },
        {id: 6,
        img: img1,
        title : "lorem",
        room: 2,
        bed:2,
        bath: 1,
        area: "445sft",
        rent: "$4200",
      },
        {id: 7,
        img: img2,
        title : "lorem",
        room: 2,
        bed:2,
        bath: 1,
        area: "445sft",
        rent: "$4200",
      },
        {id: 8,
        img: img2,
        title : "lorem",
        room: 2,
        bed:2,
        bath: 1,
        area: "445sft",
        rent: "$4200",
      },
        {id: 9,
        img: img2,
        title : "lorem",
        room: 2,
        bed:2,
        bath: 1,
        area: "445sft",
        rent: "$4200",
      }]
  return (
    <div className='card-body'>
        {Cards.slice(0,currentpage).map((card)=>{
            return(

         
        <div className='card-body-div'>
            <img src={card.img} className='card-img'/>
            <Link to='/' className='for-rent'>For Rent</Link>
            <div className='card-title' >{card.title}
            <div className='card-icon'>
                <p className='card-icon-1'>
                    <img src={room} alt='room' width='20px'/>
                    {card.room} room
                </p>
                <div className='card-icon-1'>
                    <img src={bed} alt='bed' width='20px'/>
                    {card.bed} bed
                </div>
                <p className='card-icon-1'>
                    <img src={bath} alt='bath' width='20px'/>
                    {card.bath} bath
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
          )

        } )}
         <div className='btn'><button onClick={showMoreItems}>Show More</button></div>
    </div>
  )
}

export default NewYork
