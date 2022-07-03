import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styles from './home.module.css'
import background from '../../imgs/backgound.png'
import avatar from '../../imgs/avatar.png'
import confetti from 'canvas-confetti';
import { useCallback } from 'react';
import { useReward } from 'react-rewards';

import home_me from '../../imgs/home_me_colored.png'


const Home = forwardRef((props,ref) => {
    const divRef = useRef();

    const [scrollPosition, setScrollPosition] = useState(0);
    const [style, setStyle] = useState({visibility: 'hidden',  width: '6rem'})

    // const {reward: confettiReward} = useReward('confettiReward', 'confetti');
    const {reward: balloonsReward} = useReward('balloonsReward', 'balloons');
    // const {reward: emojiReward} = useReward('emojiReward', 'emoji','config');


    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        const homeHeight = divRef.current.clientHeight
        divRef.current.style.opacity = 1-scrollPosition / homeHeight;
        
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    const changeStyle = () => {
        setStyle({visibility: 'visible',  width: '10rem'})
    }

    const closeStyle = () => {
        setStyle({visibility: 'hidden',  width: '6rem'})
    }


    /*코드펜*/
    const onHover = useCallback(() => {
        confetti({
        particleCount: 160,
        spread: 60,
        origin: { x: 0.3, y: 0.55 },
        });
    }, []);

    // 


    return (
        <section ref={ref} className={styles.home} data-name='home'>
            <img className={styles.background} src={background} alt="" />
            <div className={styles.div_container} ref={divRef}>
                
                <div className={styles.avatar}>
                <h1 className={styles.title}>Hello! I'm jieun Yun &#128077;</h1>
                    <img className={styles.avatarIMG}  src={avatar} alt="avatar"/>
                </div>
                <div className={styles.intro}>
                <div className={styles.home_cut_container} style={style}>
                    <p className={styles.first_letter}>Forwarder</p>
                    <img className={styles.home_cut} src={home_me} alt="" />
                    <div className={styles.home_cut_background}></div>
                    <p className={styles.second_letter}>Casino Dealer</p>
                </div>
                <div className={styles.contents}>
                    <div className={styles.contents_box}>
                        <div 
                        className={styles.point} 
                        onMouseOver={()=>changeStyle()} 
                        onMouseLeave={()=>closeStyle()} 
                        >Challenge</div>
                        <p className={styles.text}>도전을 두려워하지 않고,</p>
                    </div>
                    <div className={styles.contents_box}>
                        <div 
                            className={styles.point} 
                            onMouseEnter={() => { balloonsReward();}}
                            id="balloonsReward" 
                        >Cooperation
                        </div>
                        <p className={styles.text}>함께 일하고싶은 개발자가 되기위해</p>
                    </div>
                    <div className={styles.contents_box}>
                        <div 
                        className={styles.point}  
                        onMouseEnter={onHover}
                        >Consistency</div>
                        <p className={styles.text}>오늘도 성장하겠습니다.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
});

export default Home;

