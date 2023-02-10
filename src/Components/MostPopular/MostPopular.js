import React from 'react'
import './MostPopular.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import MostPopularData from '../../Data/MostPopularData'
import Card from '../Card/Card'
const MostPopular = () => {

    const cards = MostPopularData.map(card=>{
        return <Card image={card.image} title={card.title} category ={card.category} rate={card.rate} download={card.download}/>

    })

  return (
    <div className='section-wrapper'>
       <SectionHeader>Most Popular</SectionHeader>
       <div className='most-popular-items'>
       {cards}
        
       </div>
    </div>
  )
}

export default MostPopular