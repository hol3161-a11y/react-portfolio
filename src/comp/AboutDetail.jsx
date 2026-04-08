import React, { useState } from 'react'
import '../AboutDetail.scss'

function AboutDetail() {
    const [isSkill, setSkill] = useState(true);
    const Design = [
        { name: 'UI /UX Design', level: 75, content: '사용자 흐름을 고려한 와이프레임 및 화면설계' },
        { name: 'Layout Design', level: 80, content: '정보 구조를 고려한 구조를 레이아웃 구성' },
        { name: 'Typography', level: 75, content: '가독성을 고려한 텍스트 스타일링' },
    ];
    const Tool = [
        { name: 'Figma', level: 85, content: ' 웹/앱 디자인 UI 디자인 및 프로토타이밍' },
        { name: 'Photoshop', level: 75, content: '배너 및 상세페이지 디자인' },
        { name: 'Illustrator', level: 65, content: '아이콘 및 그래픽 요소 제작' },
    ];
    const Web = [
        { name: 'HTML', level: 70, content: '기본적인 웹퍼블리싱 구현' },
        { name: 'CSS', level: 70, content: ' 반응형 및 스타일 구현' },

    ];


    return (
        <div className='aboutDetail'>

            <div className='intro'>
                <img className='emoji' src='./image/aboutdetail/emoji.png' />
                <h1 className='hello'>안녕하세요, 이예원입니다 !</h1>
            </div>
            <div className='text'>
                <div className='profile-info'>
                    <img src='./image/aboutdetail/profile_img.png' />
                    <div className='profile-item'>
                        <ul>
                            <li><p>이예원 / 2002.05.29</p></li>
                            <li><p>웹 퍼블리셔(Web Publisher)</p></li>
                            <li><p>Email : hol3161@gmail.com</p></li>
                            <li><p>Phone : 010-85913161</p></li>
                        </ul>
                    </div>
                </div>
                <div className='contents'>
                    <p>
                        안녕하세요. 사용자 경험을 섬세한 디테일로 그려나가는 웹 퍼블리셔 이예원입니다.<br />
                        저는 단순히 시각적으로 완성도 높은 디자인을 만드는 것을 넘어 사용자의 흐름과 행동을 고려한 구조적인 설계와 편리한 인터페이스를 구현하는 데 가치를 두고 있습니다.
                    </p>

                    <p>
                        다양한 프로젝트를 통해 사용자 중심의 사고를 기반으로 화면을 설계하고 정보 전달이 명확하면서도 직관적인 UI를 구현하는 경험을 쌓아왔습니다.
                        작은 요소 하나까지도 사용자의 입장에서 고민하며 자연스럽고 편안한 사용자 경험을 만들어내기 위해 노력합니다.
                    </p>

                    <p>
                        맡은 작업에 있어서는 책임감을 바탕으로 높은 완성도를 추구하며 기획 의도를 정확히 이해하고 이를 결과물에 충실히 반영하는 것을 중요하게 생각합니다.
                        또한 피드백을 적극적으로 수용하고 빠르게 개선에 반영함으로써 결과물의 완성도를 한 단계 더 끌어올리는 과정을 꾸준히 이어가고 있습니다.
                    </p>

                    <p>
                        새로운 기술과 트렌드에 대한 학습을 지속하며 변화하는 환경 속에서도 유연하게 대응하고 성장하는 것을 목표로 하고 있습니다.
                        앞으로도 사용자에게 더 나은 경험을 제공하는 웹 퍼블리셔로서 디테일과 완성도를 놓치지 않는 작업을 이어가겠습니다.
                    </p>
                </div>

                <div className='keyword'>
                    <h1>key word</h1>
                    <span>#사용자중심</span>
                    <span>#도전적인</span>
                    <span>#문제해결형</span>
                    <span>#성장지향</span>
                    <span>#유연한사고</span>
                </div>

                <div className='skill'>
                    <h1>Skills</h1>

                    <div className='list'>

                        <h2>1. Design</h2>

                        <ul>
                            {Design.map((skills, i) => (
                                <li key={i}>
                                    <p>{skills.name}</p>
                                    <div className='skill-bar'>
                                        <div
                                            className='skill-fill'
                                            style={{
                                                width: `${isSkill ? skills.level : 0}%`
                                            }}
                                        ></div>
                                        <span className='skill-percent'>{skills.level}%</span>
                                    </div>
                                    <b> → {skills.content} </b>
                                </li>
                            ))}
                        </ul>

                        <h2>2. Tool</h2>

                        <ul>
                            {Tool.map((skills, i) => (
                                <li key={i}>
                                    <p>{skills.name}</p>
                                    <div className='skill-bar'>
                                        <div
                                            className='skill-fill'
                                            style={{
                                                width: `${isSkill ? skills.level : 0}%`
                                            }}
                                        ></div>
                                        <span className='skill-percent'>{skills.level}%</span>
                                    </div>
                                    <b> → {skills.content} </b>
                                </li>
                            ))}
                        </ul>

                        <h2>3. Web</h2>

                        <ul>
                            {Web.map((skills, i) => (
                                <li key={i}>
                                    <p>{skills.name}</p>
                                    <div className='skill-bar'>
                                        <div
                                            className='skill-fill'
                                            style={{
                                                width: `${isSkill ? skills.level : 0}%`
                                            }}
                                        ></div>
                                        <span className='skill-percent'>{skills.level}%</span>
                                    </div>
                                    <b> → {skills.content} </b>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className='education'>
                        <h1>Education</h1>
                        <ul>
                            <li><p>2025.12.30 ~ 2026.06.16 - 생성형AI기반 UX UI 디자인 & 프론트엔드 개발 과정 - 이젠컴퓨터 아카데미</p></li>
                            <li><p>2025.12.30 ~ 2026.06.16 - 생성형AI기반 UX UI 디자인 & 프론트엔드 개발 과정 - 이젠컴퓨터 아카데미</p></li>
                            <li><p>2025.12.30 ~ 2026.06.16 - 생성형AI기반 UX UI 디자인 & 프론트엔드 개발 과정 - 이젠컴퓨터 아카데미</p></li>
                            <li><p>2025.12.30 ~ 2026.06.16 - 생성형AI기반 UX UI 디자인 & 프론트엔드 개발 과정 - 이젠컴퓨터 아카데미</p></li>
                        </ul>
                    </div>

                    <div className='certificaten'>
                        <h1>Certificate</h1>
                        <ul>
                            <li><p>2025.11.14 - GTQ Photoshop 1급</p></li>
                            <li><p>2025.09.12 - ITQ 한글파워포인트 A등급</p></li>
                            <li><p>2025.04.03 - ITQ 한글엑셀 A등급</p></li>
                            <li><p>2021.02.28 - 운전면허2종 보통   </p></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default AboutDetail