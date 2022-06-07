import React from 'react';
import styles from './skills.module.css'

const Skills = () => {
    return (
        <section className={styles.skills}>
            <div className={styles.container}>
            <h1>Skills & Attributes</h1>
            <p>스킬과 관련된 나의 부가적인 설명</p>
                <div className={styles.skillset}>
                    <div className={styles.bar}>
                            <div></div><div></div><div></div>
                    </div>
                    <div className={styles.skillset_container}>
                        {/*알고있는 언어*/}
                        <div className={styles.skillset_left}>
                            <h3 className={styles.skillset_title}>Skills</h3>
                                <div className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>HTML</span>
                                        <span className={styles.per}>99%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div className={styles.skill_value}></div>
                                        </div>
                                    
                                </div>

                                <div className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>CSS</span>
                                        <span className={styles.per}>99%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div className={styles.skill_value}></div>
                                        </div>
                                </div>

                                <div className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>JavaScript</span>
                                        <span className={styles.per}>99%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div className={styles.skill_value}></div>
                                        </div>
                                    
                                </div>

                                <div className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>React</span>
                                        <span className={styles.per}>99%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div className={styles.skill_value}></div>
                                        </div>
                                    
                                </div>

                                <div className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>Vue.js</span>
                                        <span className={styles.per}>99%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div className={styles.skill_value}></div>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;