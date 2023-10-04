import React, {useState ,useEffect} from 'react'
import CardTag from './CardTag'

const CardList = ({Cards}) => {
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
  return (
    <>
    {
    Cards.slice(0,currentpage).map((card)=>(
    <CardTag  card={card} key={card.id}/>
    ))
  }
 
   <div className='btn'><button onClick={showMoreItems}>Show More</button></div>
  </>
  )
}

export default CardList
