import React from 'react';
import styles from './skills.module.css'

const Skills = () => {
    return (
        <section className={styles.skills}>
            <h1>Skills</h1>
            <h2>Skills & Attributes</h2>
            <p>스킬과 관련된 나의 부가적인 설명</p>

            {/*알고있는 언어*/}
            <div className={styles.skillset_left}>
                <h3 className={styles.skillset_title}>Skills</h3>
                    <div className={styles.skill}>
                        <div className={styles.description}>
                            <span>HTML</span>
                            <span>99%</span>
                            <div className={styles.skill_bar}>
                                <div className={styles.skill_value}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.description}>
                            <span>CSS</span>
                            <span>99%</span>
                            <div className={styles.skill_bar}>
                                <div className={styles.skill_value}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.description}>
                            <span>JavaScript</span>
                            <span>99%</span>
                            <div className={styles.skill_bar}>
                                <div className={styles.skill_value}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.description}>
                            <span>React</span>
                            <span>99%</span>
                            <div className={styles.skill_bar}>
                                <div className={styles.skill_value}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.description}>
                            <span>Vue.js</span>
                            <span>99%</span>
                            <div className={styles.skill_bar}>
                                <div className={styles.skill_value}></div>
                            </div>
                        </div>
                    </div>
            </div>

            {/*tool, Etc*/}
            <div className={styles.skillset_right}>
                <div className={styles.tools}>
                    <h3 className={styles.skillset_title}>Tools</h3>
                    <ul className={styles.tools_list}>
                        <li><span>Node.js Express</span></li>
                        <li><span>FireBase</span></li>
                        <li><span>Visual Studio code</span></li>
                    </ul>
                </div>
                <div className={styles.etc}>
                    <h3 className={styles.skillset_title}>ETC</h3>
                    <ul className={styles.etc_list}>
                        <li><span>Git</span></li>
                        <li><span>잘하는거</span></li>
                        <li><span>잘하는거</span></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;