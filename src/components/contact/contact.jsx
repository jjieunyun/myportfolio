import React, { forwardRef } from 'react';
import GithubButton from '../../github-button/GithubButton';
import Mouse from '../mouse';
import styles from './contact.module.css';



const Contact = forwardRef((props,ref) => {
    return (
        <section ref={ref} className={styles.contact}>
            <h1 className={styles.title}>Contact</h1>
            <div className={styles.container}>
            <h3>지금까지 제 포트폴리오를 읽어주셔서 감사합니다. </h3>
            <h3>아래는 공부하는 내용을 꾸준히 기록하고 있는 저의 GitHub와 Notion링크 입니다😊</h3>
            
            <GithubButton/>
                <div className={styles.icon_container}>
                    <a className={styles.icon} href='https://github.com/'>
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </div>
                <div className={styles.icon_container}>
                    <a className={styles.icon} href='https://github.com/'>
                        <i class="fa-solid fa-phone"></i>
                    </a>
                </div>
            </div>
{/* 
            <Mouse/> */}
        </section>
    );
});

export default Contact;