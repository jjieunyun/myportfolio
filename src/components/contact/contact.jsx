import React, { forwardRef } from 'react';
import Mouse from '../mouse';
import styles from './contact.module.css';

import background_paper from '../../imgs/background_paper.png'
import avatar from '../../imgs/avatar_contact.png'
import qr from '../../imgs/qr_kakao.png'

const Contact = forwardRef((props,ref) => {
    return (
        <section ref={ref} className={styles.contact}>
            <img className={styles.background} src={background_paper} alt="" />
            <img className={styles.avatar} src={avatar} alt="" />
            <h1 className={styles.title}>Contact</h1>
            <div className={styles.container}>
                <p>지금까지 제 포트폴리오를 읽어주셔서 감사합니다. </p>
                <p>아래는 공부하는 내용을 꾸준히 기록하고 있는 저의 GitHub와 Notion링크 입니다😊</p>
        
                <div className={styles.Profilecard}>
                    <p className={styles.name}>Yun jieun</p>
                    <img className={styles.qr} src={qr} alt="" />
                    <div className={styles.icon_container}>
                        <a className={styles.icon} href='https://github.com/'>
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                    <div className={styles.icon_container}>
                        <a className={styles.icon} href='https://github.com/'>
                            <i className="fa-solid fa-phone"></i>
                        </a>
                    </div>
                </div>
            </div>
        <footer className={styles.footer}>
            <div className={styles.footerLogo_container}>
                <h1>Yun jieun</h1>
            </div>
            <p>Thanks for visiting MyPage</p>
            <p>Copyright ⓒ 2022.jieun Yun All rights reserved.</p>
        </footer>
        </section>
    );
});

export default Contact;