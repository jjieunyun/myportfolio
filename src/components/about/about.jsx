import React, { forwardRef } from 'react';
import styles from './about.module.css'

const About = forwardRef((props,ref) => {
    return (
        <section ref={ref} className={styles.about}>
        <div className={styles.history}>
            <div className={styles.history_box}>
                <h1>About Me</h1>
                <div className={styles.intro}>
                    <div className={styles.bar}>
                        <div></div><div></div><div></div>
                    </div>
                    <div className={styles.intro_box}>
                        <div className={styles.about_history_age}>
                                <h3><i style={{fontSize:'1.7rem'}} class="fa-solid fa-cake-candles"></i></h3>
                                <p className={styles.age}>1992. 05.07</p>
                        </div>
                        <div className={styles.about_history_edu}>
                                <h3><i style={{fontSize:'1.7rem'}} className="fa-solid fa-graduation-cap"></i></h3>
                                <p className={styles.edu}>동아대학교 <br/>국제학부 중국학전공</p>
                        </div>
                    </div>
                    <div className={styles.reason}>
                        <h3>Frontend 개발자를 꿈꾸는 이유?</h3>
                        <p> 달 탐사를 위해 개발된 '다누리(KPLO·Korea Pathfinder Lunar Orbiter)'가 발사를 위한 모든 준비를 마친 것이다. 다누리는 다음달 초 미국으로 이송돼 8월3일께 발사되며 12월 중순 달에 도착해 약 1년간 달 영구 음영 지대 촬영 등 주요 탐사와 함께 우주통신망 기술 등을 실험할 예정이다.</p>
                    </div>
                </div>
            </div>
            <div className={styles.history_box2}>
            <div className={styles.social}>
                    <div className={styles.bar}>
                        <div></div><div></div><div></div>
                    </div>
                    <h3 className={styles.boxTitle}>Activities</h3>
                    <p>2021, 제9회 산업부 공공데이터활용 비즈니스 아이디어 대회(장려상)</p>
                    <p>2021, ESG with KOSPO 영상 콘텐츠 공모전(우수상)</p>
                    <p>2021, 공공데이터를 활용 아이디어 해커톤(우수상)</p>
                    <p>2013, 충칭 서남대학교 교환학생프로그램 수료</p>
                    <p>2014, 아시아안전도시연차대회 자원봉사</p>
                    <p>2013, 평창동계스페셜올림픽 자원봉사</p>
                    <p>2013, 평창동계스페셜올림픽 기념 빙상경기대회</p>
                    <p>2014, 부산청년일자리사업단(부산강소기업 서포터즈)</p>
                </div>
                <div className={styles.job}>
                    <div className={styles.bar}>
                        <div></div><div></div><div></div>
                    </div>
                    <h3 className={styles.boxTitle}>Work experience</h3>
                    <p>0000.00~ 0000.00  <br/>파라다이스카지노부산(오퍼레이션팀,딜러)</p>
                    <p>0000.00~ 0000.00  <br/>한국남부발전 (전략기획실,인턴)</p>
                    <p>0000.00~ 0000.00  <br/>JBG로지스틱스(업무부)</p>
                </div>
                
                <div className={styles.certification}>
                    <div className={styles.bar}>
                        <div></div><div></div><div></div>
                    </div>
                    <h3 className={styles.boxTitle}>Certificates</h3>
                    <p>정보처리기사 (한국산업인력공단 / 0000.00)</p>
                    <p>컴퓨터활용능력1급 (대한상공회의소/0000.00)</p>
                    <p>한국사능력검정시험 1급(국사편찬위원회/0000.00)</p>
                    <p>TOEIC(870/0000.00)</p>
                    <p>新HSK 5급(중국국가한반/0000.00)</p>
                    <p>자동차 운전면허증 2종 보통(0000.00)</p>
                </div>

                
            </div>
        </div>
        </section>
    );
});

export default About;