import React from 'react';
import styles from './skills.module.css'

const Skills = () => {
    return (
        <section className={styles.skills}>
            <h1>Skills</h1>
            <h2>Skills & Attributes</h2>
            <p>스킬과 관련된 나의 부가적인 설명</p>
            <div className={styles.skillset}>
                <h3 className={styles.sillset_title}>Skills</h3>
                <div className={styles.skill}>
                    <div className={styles.sill_description}>
                        <span>HTML</span>
                        <span>99%</span>
                        <div>
                            <div className={styles.skill_bar}>
                                <div className={styles.skill_value}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;