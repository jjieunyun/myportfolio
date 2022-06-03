import React from 'react';
import styles from './about.module.css'

const About = () => {
    return (
        <section className={styles.about}>
            <h1>About Me</h1>
        <div className={styles.about_intro}>
            <h3>Frontend 개발자를 꿈꾸는 이유?</h3>
            <p>막연히 대학생활을 하면서 진로 생각은 여러번 했지만 정확히 내가 하고 싶은일이 무엇인진 알지 못했습니다. 그렇게 구체적인 꿈없이 지내던 중 졸업작품에서 소프트웨어를 담당한 저는 작품의 완성도를 높이기 위해 어플을 제작하게 되었습니다. 그 과정에서 간편하게 어플을 제작하는 사이트를 이용하게 되었습니다.
                그 사이트는 UI/UX 부분이나 기능구현에서 제한이 매우 많았기 때문에 만족스럽지 못했습니다. 졸업을 앞두고 작품에 미련이 남아 UI/UX에 대해 더 알고 싶어 찾아보았습니다.
                그리고 프론트엔드라는 직업의 존재를 알게 되었습니다. 평소에 프로그래밍에 흥미를 느끼고 있던 저에게 프론트엔드라는 직업은 처음으로 꼭 해내고 싶은 꿈이자 목표가 되었습니다.</p>
        </div>
        <div className={styles.about_history}>
            <div className={styles.about_history_age}>
                <h3>icon</h3>
                <p>1992.05.07</p>
            </div>
            <div className={styles.about_history_job}>
                <h3>icon</h3>
                <p>0000.00~ 0000.00  파라다이스카지노부산(오퍼레이션/ 딜러)</p>
                <p>0000.00~ 0000.00  한국남부발전 (전략기획실/ 인턴)</p>
                <p>0000.00~ 0000.00  JBG로지스틱스(업무부)</p>
            </div>
            <div className={styles.about_history_edu}>
                <h3>icon</h3>
                <p>동아대학교 국제학부 (중국학전공)</p>
            </div>
            <div className={styles.about_history_certification}>
                <h3>icon</h3>
                <p>정보처리기사 (한국산업인력공단 / 0000.00)</p>
                <p>컴퓨터활용능력1급 (대한상공회의소/0000.00)</p>
                <p>한국사능력검정시험 1급(국사편찬위원회/0000.00)</p>
                <p>TOEIC(870/0000.00)</p>
                <p>新HSK 5급(중국국가한반/0000.00)</p>
                <p>자동차 운전면허증 2종 보통(0000.00)</p>
            </div>
            <div className={styles.about_history_social}>
                <h3>icon</h3>
                <p>2021, 제9회 산업부 공공데이터활용 비즈니스 아이디어 대회(장려상)</p>
                <p>2021, ESG with KOSPO 영상 콘텐츠 공모전(우수상)</p>
                <p>2021, 공공데이터를 활용 아이디어 해커톤(우수상)</p>
                <p>2013,충칭 서남대학교 교환학생프로그램 수료</p>
                <p>2014, 아시아안전도시연차대회 자원봉사</p>
                <p>2013, 평창동계스페셜올림픽 자원봉사</p>
                <p>2013, 평창동계스페셜올림픽 기념 빙상경기대회</p>
                <p>2014, 부산청년일자리사업단(부산강소기업 서포터즈 참여)</p>
            </div>
        </div>
        </section>
    );
};

export default About;