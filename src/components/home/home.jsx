import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styles from './home.module.css'
import background from '../../imgs/backgound.png'
import avatar from '../../imgs/avatar.png'


const Home = forwardRef(({clickContact},ref) => {
    const divRef = useRef();

    const [scrollPosition, setScrollPosition] = useState(0);



    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        const homeHeight = divRef.current.getBoundingClientRect().height
        divRef.current.style.opacity = 1-scrollPosition / homeHeight;
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    

    return (
        <section ref={ref} className={styles.home} data-name='home'>
            <img className={styles.background} src={background} alt="" />
            <div className={styles.div_container} ref={divRef}>
                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar"/>
                </div>
                
                <div className={styles.intro}>
                    <h1 className={styles.title}>Hello! I'm jieun Yun &#128077;</h1>
                    <span className={styles.point}>Challenge</span>
                    <h3>눈앞의 도전을 두려워하지 않고,</h3>
                    <span className={styles.point}>Consistency</span>
                    <h3>뚝심있게 성장하겠습니다.</h3>
                    <span className={styles.point}>Cooperation</span>
                    <h3>함께 할때 더욱 빛나는</h3>
                    <h3>프론트엔드 개발자가 되겠습니다.</h3>
                    {/* <button onClick={clickContact} className={styles.button}>Contact Me</button> */}
                </div>
            </div>
        </section>
    );
});

export default Home;