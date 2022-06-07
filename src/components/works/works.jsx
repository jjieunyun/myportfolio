import React from 'react';
import CenterSlider from '../slider/centerSlider';
import styles from './works.module.css'

const Works = () => {
    return (
        <section className={styles.work}>
            <div className={styles.subTitle}>Projects</div>
            <h1 className={styles.title}>My Works</h1>
            <div className={styles.slider}>
                <CenterSlider/>
            </div>
        </section>
    );
};

export default Works;