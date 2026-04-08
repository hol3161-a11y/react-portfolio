import React, { useEffect, useState } from 'react'


function About() {
  const [isSkill, setSkill] = useState(false);
  const skills = [
    { icon: "/image/about/ic_ui.png", level: 75, color: '#FF5AD0' },
    { icon: "/image/about/ic_figma.png", level: 85, color: '#FF7262' },
    { icon: "/image/about/ic_Ps.png", level: 75, color: '#31A8FF' },
    { icon: "/image/about/ic_Ai.png", level: 65, color: '#FF9A00' },
    { icon: "/image/about/ic_Html.svg", level: 70, color: '#D54D03' },
    { icon: "/image/about/ic_css.png", level: 70, color: '#0571B2' }
  ];

  useEffect(() => {
    const el_photo = document.querySelectorAll('.ani');
    let observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entries[i].isIntersecting) {
          //entries[i].target.classList.add('active');
          setSkill(true)
        }
      })

    }, { threshold: 0.8 });

    el_photo.forEach(function (target, i) {
      observer.observe(el_photo[i]);
    });
  }, [])

  return (

    <section id="about" className="about">

      <h2 className='about-title'>[ ABOUT ]</h2>

      <div className='profile'>
        <div className='about-left'>
          <div className='about-img'>
            <img src='./image/about/profile_img.png' />
          </div>
          <div className='about-card'>
            <p>안녕하세요! 섬세한 디테일로 사용자 중심
              UX를 완성하는 웹 퍼블리셔 <b>이예원</b>입니다. </p>
            <a className='more-btn' href='/about'>자기소개서 더보기 <img className='icon' src='./image/about/ic_arrow.png' /></a>
          </div>
        </div>

        <div className='about-right'>
          <div className='content'>

            <div className='about-box'>
              <h2>Introduce</h2>
              <div className='text-box'>
                <p>sda</p>
                <p>sda</p>
                <p>sda</p>
              </div>
            </div>

            <div className='about-box'>
              <h2>Education</h2>
              <div className='text-box'>
                <p>
                  2025.12.30 ~ 2026.06.16<br />
                  생성형AI기반 UX UI 디자인 & 프론트엔드 개발 과정 - 이젠컴퓨터 아카데미
                </p>
                <p>
                  2025.12.30 ~ 2026.06.16<br />
                  생성형AI기반 UX UI 디자인 & 프론트엔드 개발 과정
                </p>
                <p>
                  2025.12.30 ~ 2026.06.16<br />
                  생성형AI기반 UX UI 디자인 & 프론트엔드 개발 과정
                </p>
                <p>
                  2025.12.30 ~ 2026.06.16<br />
                  생성형AI기반 UX UI 디자인 & 프론트엔드 개발 과정
                </p>
              </div>
            </div>

            <div className='about-tag'>
              <h2>Advantages</h2>
              <div className='text-box'>
                <p>#도전적인  #성장형 디자이너  #끈기있는
                  #문제해결형  #감각적인</p>
              </div>
            </div>

          </div>

          <div className='skills ani' >
            <h2>Skills</h2>

            {skills.map((skill, i) => (
              <div className='skill-item' key={i}>

                <div className='skill-info'>
                  <img src={skill.icon} alt="" />
                </div>

                <div className='bar'>
                  <div
                    className='fill'
                    style={{
                      width: `${isSkill ? skill.level : '0'}%`,
                      background: skill.color
                    }}
                  ></div>
                </div>
                <span className='percent'>{skill.level}%</span>

              </div>
            ))}

            <div className='Certificate'>
              <h2>Certificate</h2>
              <div className='info'>
                <p>2025.11.14    <span>GTQ Photoshop 1급</span></p>
                <p>2025.09.12    <span>ITQ 한글파워포인트 A등급</span></p>
                <p>2025.04.03   <span>ITQ 한글엑셀 A등급</span></p>
                <p>2021.02.28   <span>운전면허2종 보통</span></p>
              </div>
            </div>

          </div>


        </div>
      </div>


    </section>
  )
}

export default About