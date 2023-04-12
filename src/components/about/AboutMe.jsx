import React from 'react';
import {info} from '../../info/Info';
import styles from './AboutMe.module.css';
export default function AboutMe() {
    return (
        <>
        {/* 자기소개 */}
        <div className={styles.sectionWrap}>
            <section className={styles.sec01}>
                <div className=''>
                   <div className={styles.myName}>
                        <div className={styles.myName_container}>
                        <ul>
                            <li>이유진</li>
                            <li>Yu Jin Lee</li>
                            <li>李 瑜 眞</li>
                            <li>YJ</li>
                        </ul>
                    </div>
                   </div>
                   <div>
                        <p>
                        안녕하세요. <br/>저는 웹 퍼블리셔입니다. <br/>
                        HTML, CSS, Javascript & Jquery를 사용하여 동적인 웹페이지 제작이 가능합니다.<br/>
                        최근에는 프론트엔드도 관심이 있어 React를 공부 중이며, 꾸준히 자기개발을 할 예정입니다.😀<br/><br/>

                        새로운 일에 대한 도전을 적극적으로 해결할 것이며, 밝고 긍정적인 마음으로 실패해도 쓰러지지 않고 실패를 기회로 삼아서 더욱 발전할 것입니다.
                        </p>
                   </div>
                </div>
            </section>
            {/* 학력 */}
            <section className={styles.edu}>
                <div>
                    <h2>Education</h2>
                    <p><b>유한대학교</b> (2013.03 ~ 2015.02)</p>
                    <ul>
                        <li>
                            정보통신과 졸업
                        </li>
                        <li>
                            전공 평점 3.8 / 4.5
                        </li>
                        <li>
                           정보처리산업기사 자격증 취득
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.career}>
                <h2>Career</h2>
                <div>
                    <ul>
                        <li className={styles.crList}>
                            <div><strong>레드망고</strong> <span>(2019.03 ~ 2023.03)</span></div>
                            <ul>
                                <li>
                                    <b>LG ThinQ, LG Smartworld 운영</b> <br/>
                                    전반적으로 유지보수 및 이벤트 페이지 작업
                                </li>
                                <li>
                                    <b>LG Store 1.0, 2.0 웹접근성 작업</b><br/>
                                    Store의 KR, US 사이트가 웹 접근성 기반으로 작업되어 있지 않아 1.0과 2.0 웹 접근성 작업으로 유지보수 
                                </li>
                                <li>
                                    <b>아모레퍼시픽 브랜드 사이트 운영</b><br/>
                                    아모레퍼시픽의 브랜드 사이트를 AEM을 사용하여 운영 및 이벤트 페이지 작업
                                </li>
                                <li></li>
                            </ul>
                            <p className={styles.role}><span>Role</span> 퍼블리셔</p>
                        </li>
                        <li className={styles.crList}>
                            <div><strong>코리아소프트</strong> <span>(2018.11 ~ 2019.05)</span></div>
                            <ul>
                                <li>하이브리드앱과 KB생명보험의 상품상세보기 및 쿠폰북 작업</li>
                            </ul>
                            <p className={styles.role}><span>Role</span> 퍼블리셔</p>
                        </li>
                        <li className={styles.crList}>
                            <div><strong>만두커뮤니케이션</strong> <span>(2017.02 ~ 2018.07)</span></div>
                            <ul>
                                <li>반응형, 모바일웹, 쇼핑몰등 다양한 웹페이지 제작 경험</li>
                                {/* <div>
                                    <ul>
                                       <li>
                                            <a href="http://www.digitalidea.co.kr/myboard/vfx" target='_blank'>디지털아이디어</a>
                                        </li>
                                        <li>
                                            <a href="http://www.tnicultures.com/?mobile_conn=off" target='_blank'>신수림한의원</a>
                                        </li>
                                        <li>
                                            <a href="http://www.yeilcare.com/?mobile_conn=off" target='_blank'>예일헬스케어</a>
                                        </li>
                                        <li>
                                            <a href="https://www.tavalon.co.kr/" target='_blank'>타바론</a>
                                        </li>
                                    </ul>
                                </div> */}
                            </ul>
                            <p className={styles.role}><span>Role</span> 퍼블리셔</p>
                        </li>
                        <li className={styles.crList}>
                            <p><b>티에스트릴리온</b> (2016.10 ~ 2017.02)</p>
                            <ul>
                                <li>제품 상세페이지 및 제품 디자인 </li>
                            </ul>
                            <p className={styles.role}><span>Role</span> 디자이너</p>
                        </li>
                        <li className={styles.crList}>
                            <p><b>회명정보통신</b> (2015.07 ~ 2016.02)</p>
                            <ul>
                                <li>철도 무선통신장비 설비</li>
                            </ul>
                            <p className={styles.role}><span>Role</span> 연구소인턴</p>
                        </li>
                    </ul>
                </div>
            </section>
            {/* 스킬 */}
            <section className={styles.skill}>
                <div>
                    <h2>Skills</h2>
                    <div>
                      <ul>
                        {
                           info.skills.proficientWith.map((skill, index) =>
                           <li key={index}>{skill}</li>)
                        }
                      </ul>
                    </div>
                </div>
            </section>
            </div>
        </>
    );
}

