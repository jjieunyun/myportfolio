import React from 'react';
import styles from './modal.module.css'

const ModalPortfolio = ({setModalList}) => {

    const onclickClose = () => {
        setModalList(null)
        document.body.style.overflowY = "scroll";
    }

    return (
        <article>
            <div className={styles.overlay}></div>
            <div role='dialog' aria-modal='true' className={styles.modal}>
            <div className={styles.bar}>
                <h1 className={styles.bar_title}>README.md</h1>
                <button 
                className={styles.closeButton}
                onClick={onclickClose}
                >X</button>
            </div>
                <div className={styles.line}>
                    <h1 className={styles.content_title}>PortFolio Site</h1>
                </div>
                    <h3>인 포트폴리오 용도로 제작한 사이트</h3>
                    <div className={styles.content_box}>
                        <h2>📌Summary</h2>
                    <p>
                    현재 보고있는 사이트로, React를 활용해서 SPA사이트를 제작했습니다.<br/><br/>
                    포트폴리오 사이트를 동적으로 제작하면서, <br/>CSS의 Animation과 
                    ReactHooks에 대해 깊이 공부해볼수있었습니다.<br/>
                    앞으로 계속해서 React를 공부하면서 Dark Mode등의 기능을 추가할 예정입니다.

                    <li><span className={styles.point}>Home </span>사이트의 가장 첫 화면입니다</li>
                    <li><span className={styles.point}>About</span>저의 대한 정보를 카드형식으로 디자인했습니다 </li>
                    <li><span className={styles.point}>Skills</span>기술스택 활용수치를 Progress Bar로 표현하고 사용가능한 기술스택들을 아이콘으로 보여줍니다</li>
                    <li><span className={styles.point}>MyWorks</span> 진행했던 프로젝트들을 슬라이더 라이브러리를 활용해서 제작했습니다</li>
                    <li><span className={styles.point}>Contact</span>연락처 정보를 볼수있는 페이지입니다.</li>
                    </p>
                    </div>

                    <div className={styles.content_box}>
                        <h2>🖥️담당 역할</h2>
                    
                        <li>애니메이션기능과 Confati라이브러리를 사용해 hover했을때의 동적기능을 구현했습니다</li>
                        <li>이미지데이터는 Cloudinary서비스를 이용해서 Cloud에 이미지를 저장하고
                    비동기로 URL을 받아와 Realtime DB에 저장하는 방법을 사용했습니다. </li>
                        <li>각 게시물의 댓글작성,삭제,수정기능을 구현했습니다. </li>
                        <li>'❤️'인스타그램의 좋아요 기능을 구현했습니다. </li>
                        <li>MyPage에는 본인이 작성한 게시물, 댓글, '❤️'게시물만 볼수있도록 구현했습니다. </li>
                        <li>Redux Toolkit을 사용하여 해시태그로 원하는 게시물만 검색할 수있도록 구현했습니다.</li>

                    </div>

                    <div className={styles.content_box}>
                        <h2>⚒️Technology Stacks</h2>
                        <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
                        <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
                        <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>
                        <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"/>
                        <img src="https://img.shields.io/badge/Cloudinary-2C39BD?style=for-the-badge&logo=Cloudways&logoColor=white"/>
                        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
                    </div>
                    
            </div>
        </article>
    );
};

export default ModalPortfolio;