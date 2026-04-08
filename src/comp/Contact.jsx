import React, { useState } from 'react'

function Contact() {
  const [isActive, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setActive(true);
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
    setActive(false);
  }

  return (
    <>
      <section id="contact" className="Contact">
        <h2 className='Contact-title'>[ CONTACT ]</h2>

        <div className='boxing'>
          <button
            className={`folder ${isActive ? 'active' : ''}`}
            onClick={handleClick}
          >
            <img src="./image/contact/file_img.svg" alt="Contact" />
          </button>
        </div>
      </section>


      {isOpen && (
        <div className='modal-overlay' onClick={handleClose}>

          <div
            className='modal'
            onClick={(e) => e.stopPropagation()}
          >

            <div className='modal-header'>
              <div className='dot'>
                <span className='red'></span>
                <span className='yellow'></span>
                <span className='green'></span>
              </div>

              <div className='dot-icon'>
                <img src='./image/contact/Ic-arrow.png' alt="" />
                <img src='./image/contact/Ic-search.png' alt="" />
              </div>
            </div>

            <div className='modal-popup'>

              <b>
                Contact,<br />
                새로운 협업의 기회를 열어가고 싶습니다 :)
              </b>

              <div className='modal-info'>

                <div className='phone'>
                  <img src='./image/contact/Ic_phone.svg' alt="" />
                  <p>010-8591-3161</p>
                </div>

                <div className='email'>
                  <img src='./image/contact/Ic_email.svg' alt="" />
                  <p>hol3161@gmail.com</p>
                </div>

              </div>

              <a
                className="email-btn"
                href="mailto:hol3161@gmail.com?subject=Portfolio Contact&body=안녕하세요.%0D%0A포트폴리오 보고 연락드립니다."
                target='_blank'
              >
                Email me
                <img src="./image/contact/Ic_btn.png" alt="email icon" />
              </a>

            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Contact