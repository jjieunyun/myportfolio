import React, { forwardRef } from 'react';
import styles from './about.module.css'

const About = forwardRef((props,ref) => {
    return (
        <section ref={ref} className={styles.about}>
        <div className={styles.history}>
            <div className={styles.history_box}>
                <h1>About Me</h1>
                <div className={styles.intro}>
                    <div className={styles.intro_box}>
                        <div className={styles.about_history_age}>
                                <h3><i style={{fontSize:'1.7rem'}} className="fa-solid fa-cake-candles"></i></h3>
                                <p className={styles.age}>1992. 05.07</p>
                        </div>
                        <div className={styles.about_history_edu}>
                                <h3><i style={{fontSize:'1.7rem'}} className="fa-solid fa-graduation-cap"></i></h3>
                                <p className={styles.edu}>동아대학교 <br/>국제학부 중국학전공</p>
                        </div>
                    </div>
                    <div className={styles.reason}>
                        <h3>30대, Frontend 개발자에 도전하다.</h3>
                        <p>30대, 남들이 봤을때 결코 적지않은 나이에 저는 '세번째' 직업에 도전을 하게되었습니다.
                            20대의 저는 남들과 같이 대학에 진학했고, 남들이 하는 것 처럼 취업을 하며 카지노딜러로 살아가던 도중.. 
                            지난 날의 저를 돌이켜 보니 저는 무엇인가를 만드는 것을 좋아하고, 몰두하는 것을 좋아하고,
                            새로운것을 배우는것에 아주 흥미를 느끼는 사람이었습니다. 그렇게 Front-end개발자의 첫걸음을 시작하게 되었습니다.
                            새로운 도전이 마냥 설레기만 한건 아닙니다. 보통의 30대 여성들이 추구하는 정착하는 삶과는 분명 차이가 있고,
                            주변인들의 걱정하는 눈빛 또한 조금은 부담이 되기도 합니다. 하지만 그만큼 더 열정과 간절함을 가지고 시작했습니다. 
                            오늘도 일을할때 행복을 느끼고 함께 성장 할수있는 Front-end개발자가 되겠습니다. 감사합니다.
                        </p>
                        <h3>나는, 'ALL ROUND PLAYER'같은 개발자가 되고싶다.</h3>
                        <p>
                            Code의 Logic을 잘 이해하고 이를 구현하는 것은 개발자가 가져야 할 가장 중요한 역량이고 앞으로 제가 가장 노력해야 할 부분입니다. 
                            이것 이외에, 제가 가장 자신있는 건 소통입니다. 
                            학부시절 교내/외에서 만난 수많은 사람들과의 활동들과 다년간의 서비스직을 경험해본 저는,
                            사람들과 소통하는 것은 누구보다 자신있습니다. 단순히 말을 잘 하는 사람이라는 의미가 아니라 상대방이 어떤 것을 원하는지 Needs를 잘 파악하고,
                            긍정적인 분위기를 이끌어 가는 것에 자신있습니다. 사용자 UX/UI에 적합한 기능을 구현하고, 유관부서와의 협업과 소통을 잘 이끌어 내는 'ALL ROUND PLAYER'가 되겠습니다. 
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
                    <p>2021, 제9회 산업부 공공데이터활용 비즈니스 아이디어 대회(장려상)</p>
                    <p>2021, ESG with KOSPO 영상 콘텐츠 공모전(한국남부발전/우수상)</p>
                    <p>2021, 공공데이터를 활용 아이디어 해커톤(한국남부발전/우수상)</p>
                    <p>2014, 아시아안전도시연차대회 대학생 서포터즈</p>
                    <p>2014, 부산청년일자리사업단(부산강소기업 박람회 개최)</p>
                    <p>2014, 충칭 서남대학교 교환학생 프로그램 수료</p>
                    <p>2013, 평창동계스페셜올림픽 기념 빙상경기대회 자원봉사</p>
                    <p>2013, 평창동계스페셜올림픽 자원봉사</p>

                </div>
                <div className={styles.job}>
                    <div className={styles.bar}>
                        <div></div><div></div><div></div>
                    </div>
                    <h3 className={styles.boxTitle}>Work experience</h3>
                    <p>2021.06~ 2021.09  <br/>한국남부발전 (전략기획실,인턴)</p>
                    <p>2018.04~ 2021.06  <br/>파라다이스카지노부산(오퍼레이션팀,딜러)</p>
                    <p>2016.02~ 2016.08  <br/>JBG로지스틱스(업무부)</p>
                </div>
                
                <div className={styles.certification}>
                    <div className={styles.bar}>
                        <div></div><div></div><div></div>
                    </div>
                    <h3 className={styles.boxTitle}>Certificates</h3>
                    <p>정보처리기사 (한국산업인력공단 / 2022.06.17)</p>
                    <p>컴퓨터활용능력1급 (대한상공회의소/2021.12.24)</p>
                    <p>한국사능력검정시험 1급(국사편찬위원회/2021.04.23)</p>
                    <p>TOEIC(870/2021.02.28)</p>
                    <p>新HSK 5급(중국국가한반/2020.07.12)</p>
                    <p>자동차 운전면허증 2종 보통(2015.03.30)</p>
                </div>
            </div>
        </div>
        </section>
    );
});

export default About;