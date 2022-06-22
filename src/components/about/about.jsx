import React, { forwardRef } from 'react';
import styles from './about.module.css'

const About = forwardRef((props,ref) => {
    return (
        <section ref={ref} className={styles.about}>
        <div className={styles.history}>
            <div className={styles.history_box}>
                <h1>About Me</h1>
                <div className={styles.intro_box}>
                        <div className={styles.about_history_age}>
                                <div><i style={{fontSize:'1.7rem'}} className="fa-solid fa-cake-candles"></i></div>
                                <p className={styles.age}>1992. 05. 07</p>
                        </div>
                        <div className={styles.about_history_edu}>
                                <div><i style={{fontSize:'1.7rem'}} className="fa-solid fa-graduation-cap"></i></div>
                                <p className={styles.edu}>동아대학교 <br/>국제학부 중국학전공</p>
                        </div>
                </div>
                <div className={styles.intro}>
                        <span className={styles.point}>Challenge   </span ><span className={styles.line}></span>
                        <h3>30대, Frontend 개발자에 도전하다!</h3>
                        <p>결코 적지않은 나이에 '세번째' 직업에 도전하게 되었습니다.<br/>
                            지난 날의 저는.. 남들 처럼 대학에 진학했고, 남들이 하는 것 처럼 취업에 성공해  카지노딜러로 살아가던 도중,
                            문득 돌이켜 보니... <br/>저는 무엇인가를 만드는 것을 좋아하고, 몰두하는 것을 좋아하고,
                            새로운것을 배우는것에 아주 흥미를 느끼는 사람이었습니다.<br/>
                            세번째 기회인 만큼 좀 더 신중하고 간절한 마음으로 Front-end개발자의 첫걸음을 시작하게 되었습니다.<br/>
                            오늘도 일을할때 행복을 느끼고 성장 하는 Front-end개발자가 되겠습니다. <br/>감사합니다.
                        </p>
                        <div className={styles.intro_box2}>
                            <span className={styles.point}>Consistency </span> <span className={styles.line}></span>
                            <h3>consistency 제목 정하기</h3>
                            <p>
                                제가 가장 자신있는 건 소통입니다. <br/>
                                학부시절 교내/외에서 만난 수많은 사람들과의 활동들과 다년간의 서비스직을 경험해본 저는,
                                사람들과 소통하는 것은 누구보다 자신있습니다. <br/>단순히 말을 잘 하는 사람이라는 의미가 아니라 상대방이 어떤 것을 원하는지 Needs를 잘 파악하고,
                                긍정적인 분위기를 이끌어 가는 것에 자신있습니다. <br/>사용자 UX/UI에 적합한 기능을 구현하고, 유관부서와의 협업과 소통을 잘 이끌어 내는 'ALL ROUND PLAYER'가 되겠습니다. 
                            </p>
                        </div>
                </div>
            </div>
            <div className={styles.history_box2}>
            <div className={styles.social}>
                    <div className={styles.bar}>
                        <div></div><div></div><div></div>
                    </div>
                    <h3 className={styles.boxTitle}>Activities</h3>
                    <h5>2021</h5>
                    <p>제9회 산업부 공공데이터활용 비즈니스 아이디어 대회(장려상)</p>
                    <p>ESG with KOSPO 영상 콘텐츠 공모전(한국남부발전/우수상)</p>
                    <p>공공데이터를 활용 아이디어 해커톤(한국남부발전/우수상)</p>
                    <h5>2014</h5>
                    <p>아시아안전도시연차대회 대학생 서포터즈</p>
                    <p>부산청년일자리사업단(부산강소기업 박람회 개최)</p>
                    <p>충칭 서남대학교 교환학생 프로그램 수료</p>
                    <h5>2013</h5>
                    <p>평창동계스페셜올림픽 기념 빙상경기대회 자원봉사</p>
                    <p>평창동계스페셜올림픽 자원봉사</p>

                </div>
                <div className={styles.job}>
                    <div className={styles.bar}>
                        <div></div><div></div><div></div>
                    </div>
                    <h3 className={styles.boxTitle}>Work experience</h3>
                    <div className={styles.job_contents}>
                        <h4>2021.06 ~ 2021.09</h4>
                        <p>한국남부발전 (전략기획실,인턴)</p>
                        <h4>2018.04 ~ 2021.06</h4>
                        <p>파라다이스카지노부산(오퍼레이션팀,딜러)</p>
                        <h4>2016.02 ~ 2016.08</h4>
                        <p>JBG로지스틱스(업무부)</p>
                    </div>
                </div>
                
                <div className={styles.certification}>
                    <div className={styles.bar}>
                        <div></div><div></div><div></div>
                    </div>
                    <h3 className={styles.boxTitle}>Certificates</h3>
                    <div className={styles.certification_content}>
                        <p><span>정보처리기사</span> (한국산업인력공단 / 2022.06.17)</p>
                        <p><span>컴퓨터활용능력1급</span> (대한상공회의소/2021.12.24)</p>
                        <p><span>한국사능력검정시험 1급</span>(국사편찬위원회/2021.04.23)</p>
                        <p><span>TOEIC</span>(870/2021.02.28)</p>
                        <p><span>新HSK 5급</span>(중국국가한반/2020.07.12)</p>
                        <p><span>자동차 운전면허증 2종 보통</span>(2015.03.30)</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
});

export default About;