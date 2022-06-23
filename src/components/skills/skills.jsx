import React, { forwardRef, useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import styles from './skills.module.css'

import bootstrap from '../../imgs/stack/bootstrap.svg'
import css from '../../imgs/stack/css-3.svg'
import express from '../../imgs/stack/express.svg'
import firebase from '../../imgs/stack/firebase.svg'
import github from '../../imgs/stack/github-icon.svg'
import html from '../../imgs/stack/html-5.svg'
import js from '../../imgs/stack/javascript.svg'
import jquery from '../../imgs/stack/jquery.svg'
import postcss from '../../imgs/stack/postcss.svg'
import router from '../../imgs/stack/react-router.svg'
import react from '../../imgs/stack/react.svg'
import redux from '../../imgs/stack/redux.svg'
import vue from '../../imgs/stack/vue.svg'
import vuetify from '../../imgs/stack/vuetifyjs.svg'


const Skills = forwardRef((props,ref) => {
    const skillsRef = useRef();

    const [barStyles, setBarStyles] = useState({width: '0%'});

const handleScroll = useCallback(([entry]) => {
        const { current } = skillsRef;
        
        
        if(entry.isIntersecting) {
        console.log(current)
        setBarStyles({visibility: 'visible', })
    }
}, []);

useEffect(() => {
    let observer;
    const { current } = skillsRef;
    
    if (current) {
    observer = new IntersectionObserver(handleScroll, { threshold: 0.3});
    observer.observe(current);
    return () => observer && observer.disconnect();
    };
}, [handleScroll]);



    return (
        <section ref={ref} className={styles.skills}>
            <div className={styles.container}>
            <h1>Skills & Attributes</h1>
            <p>스킬과 관련된 나의 부가적인 설명</p>
                <div ref={skillsRef} className={styles.skillset}>
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
                                        <span  className={styles.per}>90%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div style={barStyles} className={`${styles.skill_value} ${styles.value1}`}></div>
                                        </div>
                                    
                                </div>

                                <div className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>CSS</span>
                                        <span className={styles.per}>90%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div style={barStyles} className={`${styles.skill_value} ${styles.value2}`}></div>
                                        </div>
                                </div>

                                <div className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>JavaScript</span>
                                        <span className={styles.per}>80%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div style={barStyles} className={`${styles.skill_value} ${styles.value3}`}></div>
                                        </div>
                                    
                                </div>

                                <div className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>React</span>
                                        <span className={styles.per}>70%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div style={barStyles} className={`${styles.skill_value} ${styles.value4}`}></div>
                                        </div>
                                    
                                </div>

                                <div className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>Vue.js</span>
                                        <span className={styles.per}>70%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                        <div style={barStyles} className={`${styles.skill_value} ${styles.value5}`}></div>
                                    </div>
                                </div>

                                <div className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>JQuery</span>
                                        <span className={styles.per}>60%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                        <div style={barStyles} className={`${styles.skill_value} ${styles.value6}`}></div>
                                    </div>
                                </div>
                        </div>

                        {/*tool, Etc*/}
                        <div className={styles.skillset_right}>
                            <div className={styles.tools}>
                                <h3 className={styles.skillset_title}>Tools</h3>
                                <ul className={styles.tools_list}>
                                    <img src={bootstrap} alt="" />
                                    <img src={css} alt="" />
                                    <img src={express} alt="" />
                                    <img src={firebase} alt="" />
                                    <img src={github} alt="" />
                                    <img src={html} alt="" />
                                    <img src={js} alt="" />
                                    <img src={jquery} alt="" />
                                    <img src={postcss} alt="" />
                                    <img src={router} alt="" />
                                    <img src={react} alt="" />
                                    <img src={redux} alt="" />
                                    <img src={vue} alt="" />
                                    <img src={vuetify} alt="" />
                                </ul>
                            </div>
                            <div className={styles.etc}>
                                <h3 className={styles.skillset_title}>Details</h3>
                                <ul className={styles.etc_list}>
                                    <li><span>Git</span></li>
                                    <li><span>BLog</span></li>
                                    <li><span>Git Page</span></li>
                                    <li><span>Vuetify</span></li>
                                    <li><span>Bootstrap</span></li>
                                    <li><span>React Router</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Skills;