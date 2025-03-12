import React from 'react'
import Img from './../../images/img.png'

const FrontPage = () => {
  return (
    <div className='mbg'>

    <section className='frontpage'>
     <h1 className='ourvision'>Our Vision</h1>
     <a href='/about-us'>
     <button className='learnb'>Learn more</button>
     </a>
    </section>
    <section className='frontpage1'> 
      <div className='fp'>
      <img className='img' src={Img} />
    <p className='visionp'>BeanBot: Empowering Creativity, Redefining Gaming
At BeanBot, we are more than just a game development company—
<br />
</p>
<p className='visionp1'>
we are a revolution in interactive entertainment. With innovation at our core, we craft visually stunning and engaging 2D and 3D games that captivate players worldwide.
Our vision is to push the boundaries of gaming by blending cutting-edge design with dynamic gameplay that sparks imagination and delivers unforgettable experiences. We believe that every great idea deserves a chance to shine, which is why we are committed to supporting indie developers by providing a platform where creativity meets opportunity.
BeanBot is a home for dreamers, creators, and innovators. Whether it's through building immersive worlds, developing addictive mechanics, or nurturing independent talent, we are dedicated to shaping the future of gaming—one visionary project at a time.
Join us.</p> <p className='p3'>Let’s create something extraordinary.</p>
    </div>
    </section>
    </div>
  )
}

export default FrontPage
