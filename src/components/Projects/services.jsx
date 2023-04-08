import React from 'react'
import './services.css'
import Card from '../Card/Card'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from '../../img/humble.png'
import resume from './resume.pdf'
const services = () => {
  return (
    <div className="services">
        {/*left side */}
        <div className="awesome">
<span> My Awesome</span>
<span> Projects</span>
<span>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> 
Praesent sed bibendum sem. Nunc tristique ipsum ac fermentum <br/>
laoreet. Sed cursus mi feugiat lacus rutrum, nec vestibulum turpis auctor.
</span>
<a href={resume} download>
<button className='button s-button'>Download CV</button>
</a>

<div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/*right side*/}
 <div className="cards">
    <div style={{left:'14rem'}}>
        <Card
        emoji={HeartEmoji}
        heading = {'Design'}
        detail={"Premier pro, After Effects,Adobe"}
        />
    </div>
    <div style={{top:'12rem', left:'-4rem'}}>
        <Card
        emoji={Glasses}
        heading = {'Developer'}
        detail={"Html, Css, JavaScript, React"}
        />
    </div>
    <div style={{top:'19rem',left:'12rem'}}>
        <Card
        emoji={Humble}
        heading = {'UI/UX'}
        detail={"This project made using html, css and javascript"}
        />
    </div>
    <div className="blur s-blur2" style={{background:'var(--purple'}}></div>
 </div>
    </div>
  )
}

export default services