import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import redstore from '../../img/redstore.png'
import porto1 from '../../img/porto1.png'
import port2 from '../../img/port2.png'
import black from '../../img/black.png'
import text from '../../img/text.png'

import 'swiper/css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        {/*heading*/}
        <span>My Recent</span>
        <span>Projects</span>

        {/*Slider*/}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <a href="https://imabhishek02.github.io/Text_Utils/"><img src={text} alt="" /></a>
            
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://imabhishek02.github.io/Ecommerce_Website/"><img src={redstore} alt="" /></a>
            
        </SwiperSlide>
        <SwiperSlide>
           <a href="https://imabhishek02.github.io/Portfolio/"><img src={porto1} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://imabhishek02.github.io/Personal_Website/"><img src={port2} alt="" /></a>
            
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://imabhishek02.github.io/BlackJack_Game/"><img src={black} alt="" /></a>
            
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Portfolio