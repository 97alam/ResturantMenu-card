import React from 'react'

const MenuCard = ({menuData}) => {
    console.log(menuData)
  return (
   <>
   <section className='main-card--cointainer'>
   {menuData.map((curElem)=>{
    return(
        <>
        <div className='card-container' key={curElem.id}>
        <div className='card'>
        <div className='card-body'>
        <span className='card-number card-circle subtle'>{curElem.id}</span>
        <span className='card-author subtle'>{curElem.category}</span>
        <h2 className='card-title'>{curElem.name}</h2>
        <span className='card-description sbtle'>{curElem.description} 
        </span>
        <div className='card-read'>Read</div>
        <img className='card-media' alt="images" src={curElem.image}></img>
        <span className='card-tag subtle'>Order Now</span>
        </div>
        </div> 
        </div>
        </>
    )
   })}
   </section>
   </>
  )
}

export default MenuCard
