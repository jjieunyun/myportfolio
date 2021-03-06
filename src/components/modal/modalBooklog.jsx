import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css'

const ModalBooklog = ({setModalList, divRef}) => {

    const onclickClose = () => {
        setModalList(null)
        document.body.style.overflowY = "scroll";
    }


    //๐๋ค๋ฅธ๊ณณ ํด๋ฆญํ๋ฉด ๋ฉ๋ด์ฐฝ ์์ด์ง
    const clickEvent = ()=> {
        setModalList(null)
        document.body.style.overflowY = "scroll";
    }


    useEffect(()=>{
        divRef.current !==undefined && divRef.current.addEventListener('click', clickEvent);
    })
    

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
                    <h1 className={styles.content_title}>BookLog</h1>
                </div>
                <h3>๋์๋ฅผ ์๋ฃํ ์ฑ์ ๊ฐ๋จํ ์ ๋ณด๋ฅผ ๊ธฐ๋กํ  ์์๋ ๋์๊ธฐ๋ก์ฅ</h3>
                    <div className={styles.content_box}>
                        <h2>๐Summary</h2>
                    <p>
                    React ํ๋ ์์ํฌ๋ฅผ ํตํด์ ์ ์ํ์ต๋๋ค. <br/><br/>
                    React ํ๋ ์์ํฌ๋ฅผ ๊ณต๋ถํ๋ฉด์ ๋๋ฒ์งธ๋ก ์งํํ ๊ฐ์ธํ๋ก์ ํธ์๋๋ค. <br/>
                    React ํจ์ํ์ ์ฌ์ฉํ๊ณ , React Router๋ฅผ ์ฌ์ฉํด ํ์ด์ง๋ฅผ ์ด๋ํฉ๋๋ค. <br/>
                    Firebase์ ์ธ์ฆ,Realtime DB๋ฅผ ์ ์ฉํ์ฌ ๋ณธ์ธ์ ๋ฐ์ดํฐ๋ ๋ณธ์ธ๋ง ๋ณผ์์์ต๋๋ค.
                    <br/><br/>
                    <li><span className={styles.point}>login </span>์ฌ์ดํธ์ ๊ฐ์ฅ ์ฒซ ํ๋ฉด์๋๋ค.๊ตฌ๊ธ, GitHub๋ก ๋ก๊ทธ์ธํฉ๋๋ค.</li>
                    <li><span className={styles.point}>Logmaker</span>์ฑ์๋ํ ์ ๋ณด๋ฅผ ํํ์์ผ๋ก ๋ณผ ์์๊ณ  ์์ , ์ถ๊ฐํ  ์์์ต๋๋ค.</li>
                    <li><span className={styles.point}>LogPreview</span>๊ธฐ๋กํ ๋ด์ฉ์ ์นด๋ํ์์ผ๋ก ๋ณผ ์์์ต๋๋ค.</li>
                    </p>
                    </div>

                    <div className={styles.content_box}>
                        <h2>๐ฅ๏ธ์์ธ ๋ด์ฉ</h2>
                        <li>Reactํจ์ํ ์ปดํฌ๋ํธ๋ก ์ ์ํ์ต๋๋ค.</li>
                        <li>UseEffect, useRef, forwardRef๋ฑ๊ณผ ๊ฐ์ ReactHooks๋ฅผ ์ฌ์ฉํ์ต๋๋ค</li>
                        <li>ReactRouter๋ฅผ ํ์ฉํด์ ํ์ด์ง๋ฅผ ์ด๋ํฉ๋๋ค.</li>
                        <li>Google Firebase๋ฅผ ํ์ฉํด ์ธ์ฆ๊ธฐ๋ฅ์ ๊ตฌํํ์ต๋๋ค.</li>
                        <li>Firebase Realtime DB๋ฅผ ํ์ฉํด ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ๊ณ  ๋ถ๋ฌ์ต๋๋ค.</li>
                        <li>Cloudinary์๋น์ค๋ฅผ ํ์ฉํด ์ด๋ฏธ์ง๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ๊ณ  ๋น๋๊ธฐ๋ก ์ ์ฅํฉ๋๋ค.</li>

                    </div>

                    <div className={styles.content_box}>
                        <h2>โ๏ธTechnology Stacks</h2>
                        <img alt="badge" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/Cloudinary-2C39BD?style=for-the-badge&logo=Cloudways&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
                    </div>
                    
            </div>
        </article>
    );
};

export default ModalBooklog;