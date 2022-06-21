import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styles from './home.module.css'
import background from '../../imgs/backgound.png'
import avatar from '../../imgs/avatar.png'
import confetti from 'canvas-confetti';
import { useCallback } from 'react';
import { useReward } from 'react-rewards';

import home_me from '../../imgs/home-4cut.png'


const Home = forwardRef((props,ref) => {
    const divRef = useRef();

    const [scrollPosition, setScrollPosition] = useState(0);
    const [style, setStyle] = useState({visibility: 'hidden',  width: '8rem'})

    // const {reward: confettiReward} = useReward('confettiReward', 'confetti');
    const {reward: balloonsReward} = useReward('balloonsReward', 'balloons');
    // const {reward: emojiReward} = useReward('emojiReward', 'emoji','config');


    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        const homeHeight = divRef.current.getBoundingClientRect().height
        divRef.current.style.opacity = 1-scrollPosition / homeHeight;
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    const changeStyle = () => {
        setStyle({visibility: 'visible',  width: '12rem'})
    }

    const closeStyle = () => {
        setStyle({visibility: 'hidden',  width: '8rem'})
    }


    /*코드펜*/
    const onHover = useCallback(() => {
        confetti({
        particleCount: 160,
        spread: 60,
        origin: { x: 0.3, y: 0.55 },
        });
    }, []);

    // 도전부분에 사진넣기!!


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
                    <p className={styles.second_letter}>Casino Dealer</p>
                </div>
                    <div className={styles.left1}>
                        <div style={{position: 'relative', left : '3.5rem'}} className={styles.point} onMouseOver={()=>changeStyle()} onMouseLeave={()=>closeStyle()} id="emojiReward" >Challenge :</div>
                        <h3>눈앞의 도전을 두려워하지 않고,</h3>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.point2}  id="balloonsReward" onMouseEnter={() => { balloonsReward();}} >Consistency :</div>
                        <h3>뚝심있게 성장하겠습니다.</h3>
                    </div>
                    <div className={styles.left2}>
                        <div 
                            className={styles.point3} 
                            onMouseEnter={onHover}
                            style={{position: 'relative', left : '-1rem'}}
                        >Cooperation +</div>
                        <h3>함께 할때 더욱 빛나는</h3>
                        <h3 className={styles.mini_letter}>프론트엔드 개발자가 되겠습니다.</h3>
                    </div>
                    
                    {/* <button onClick={clickContact} className={styles.button}>Contact Me</button> */}
                </div>
                            {/* disabled={isConfettiAnimating || isBalloonsAnimating}
                            onClick={() => {
                                confettiReward();
                                balloonsReward();
                            }}> */}
            </div>
        </section>
    );
});

export default Home;

