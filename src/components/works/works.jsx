import React, { forwardRef } from 'react';
import CenterSlider from '../slider/centerSlider';
import styles from './works.module.css'

const Works = forwardRef((props,ref) => {
    return (
        <section ref={ref} className={styles.work}>
            <div className={styles.subTitle}>Projects</div>
            <h1 className={styles.title}>My Works</h1>
            <div className={styles.slider}>
                <CenterSlider/>
            </div>

            <div className={styles.card}>
                <div className={styles.bar}>
                    <div></div><div></div><div></div>
                </div>
                <h3>Portfolio Site</h3>
                <p>Html CSS React 아이콘 찾아서 넣기</p>
                <p>간단하게 사이트 설명 넣기</p>
            </div>
        </section>
    );
});

export default Works;