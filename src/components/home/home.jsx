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
                    <h3><span>Positive</span>긍정적인 마인드와</h3>
                    <h3><span>passion</span>열정가득한 도전정신으로</h3>
                    <h3><span>cooperation</span>함께 할때, 더욱 빛나는 Frontend Developer입니다.</h3>
                    <button onClick={clickContact} className={styles.button}>Contact Me</button>
                </div>
            </div>
        </section>
    );
});

export default Home;