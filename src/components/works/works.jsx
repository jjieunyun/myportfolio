import React, { forwardRef } from 'react';
import Slider from '../slider/slider';
import styles from './works.module.css'

import backgound_dot3 from '../../imgs/backgound_dot3.png'

const Works = forwardRef((props,ref) => {
    return (
        <section ref={ref} className={styles.work}>
            <img className={styles.background} src={backgound_dot3} alt="" />
            <div className={styles.work_container}>
                <div className={styles.subTitle}>Projects</div>
                <h1 className={styles.title}>My Works</h1>
                <div className={styles.slider}>
                    <Slider/>
                </div>
            </div>
        </section>
    );
});

export default Works;