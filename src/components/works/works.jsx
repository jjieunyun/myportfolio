import React from 'react';
import styles from './works.module.css'
import readingLog from '../../imgs/reading_log.png'

const Works = () => {
    return (
        <section className={styles.work}>
            <h1>My Work</h1>
            <h3>Projects</h3>
            <div className={styles.work_categories}>
                <button className={styles.btn}>
                    All <span className={styles.count}>5</span>
                </button>
                <button className={styles.btn}>
                    FrontEnd <span className={styles.count}>4</span>
                </button>
                <button className={styles.btn}>
                    BackEnd <span className={styles.count}>1</span>
                </button>
            </div>

            <div className={styles.work_projects}>
                <a 
                href='https://github.com/'
                className={styles.project}
                target='blank'>
                    <img className={styles.img} src={readingLog} alt="스샷" />
                    <div className={styles.description}>
                        <h3>Reading Log</h3>
                        <span>Clone coding with React</span>
                    </div>
                </a>

                <a 
                href='https://github.com/'
                className={styles.project}
                target='blank'>
                    <img className={styles.img} src={readingLog} alt="스샷" />
                    <div className={styles.description}>
                        <h3>Reading Log</h3>
                        <span>Clone coding with React</span>
                    </div>
                </a>

                <a 
                href='https://github.com/'
                className={styles.project}
                target='blank'>
                    <img className={styles.img} src={readingLog} alt="스샷" />
                    <div className={styles.description}>
                        <h3>Reading Log</h3>
                        <span>Clone coding with React</span>
                    </div>
                </a>

                <a 
                href='https://github.com/'
                className={styles.project}
                target='blank'>
                    <img className={styles.img} src={readingLog} alt="스샷" />
                    <div className={styles.description}>
                        <h3>Reading Log</h3>
                        <span>Clone coding with React</span>
                    </div>
                </a>
                
                
            </div>
        </section>
    );
};

export default Works;