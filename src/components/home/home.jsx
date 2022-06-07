import React from 'react';
import styles from './home.module.css'
import background from '../../imgs/backgound.png'
import avatar from '../../imgs/avatar.png'

const Home = () => {
    return (
        <section className={styles.home}>
            <img className={styles.background} src={background} alt="" />
            <div className={styles.avatar}>
                <img  src={avatar} alt="avatar"/>
            </div>
            <div className={styles.intro}>
                <h1 className={styles.title}>Hello! I'm jieun Yun &#128077;</h1>
                <h3><span>Positive</span>긍정적인 마인드와</h3>
                <h3><span>passion</span>열정가득한 도전정신으로</h3>
                <h3><span>cooperation</span>함께 할때, 더욱 빛나는 Frontend Developer입니다.</h3>
                <button className={styles.button}>Contact Me</button>
            </div>
        </section>
        
    );
};

export default Home;