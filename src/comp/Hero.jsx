import React from 'react'

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-title'>
        <div><img src="/image/hero/text_Hello.svg" /></div>

        <p>YEWON'S </p>
        <p>PORTFOLIO</p>
        
      </div>
      <div className='box'>
        <hr />
        <a href='#' className='hero-btn'>View Resume <img src="/image/hero/btn_arrow.svg" /></a>
      </div>
    </section>
  )
}

export default Hero