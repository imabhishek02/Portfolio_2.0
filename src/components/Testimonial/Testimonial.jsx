import React from 'react'
import './Testimonial.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import videopic from "../../img/video.gif";
import edit from "../../img/edit.gif";
import upload from "../../img/upload.gif"
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonial = () => {
    const blogs= [
        {
            img: videopic,
            review: "Videography for beginners can be intimidating—largely because of the investment required. However, you may be able to get your feet wet using a piece of gear you already have on hand: your smartphone. If your iPhone or Android is no more than a couple of years old, it is likely all you’ll need to begin to shoot high-quality video—and, perhaps more importantly, thinking like the videographer you want to become.",
            
        },
        {
            img: edit,
            review: "The great place to start learning how to use Adobe Premiere Pro is from the creators of the software themselves. Adobe avails numerous video tutorials on their website for both beginners and seasoned users of the application. ",
        },
        {
            img: upload,
            review: "YouTube is not only the most popular video-sharing platform in the world, but it’s the second most-visited website on the entire planet.Worried about diving into this new world? Don’t be. Creating a YouTube channel and uploading videos to your channel is, fortunately, pretty simple.",
            
        },
    ]
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Blogs that</span>
            <span> makes you </span>
            <span>Creator Ready...</span>
            <div className="blur t-blur1"style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2"style={{background:"skyblue"}}></div>
        </div>
           {/*slider */}
           <Swiper 
           modules={[Pagination]}
           slidesPerView={1}
           pagination={{clickable:true}}
           >
            {blogs.map((blog,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src= {blog.img} alt=""/>
                        <span>{blog.review}</span>
                        </div>
                        
                    </SwiperSlide>
                );
            })}

           </Swiper>

    </div>
  );
};

export default Testimonial