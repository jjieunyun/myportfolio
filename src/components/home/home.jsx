import React from 'react';
import styles from './home.module.css'
import background from '../../imgs/backgound.png'
import avatar from '../../imgs/avatar.png'

const Home = () => {
    return (
        <section id="home">
            <img className={styles.background} src={background} alt="" />
            <div className={styles.avatar}>
                <img  src={avatar} alt="avatar"/>
            </div>
            <div className={styles.intro}>
                <h1 className={styles.title}>Hello! I'm Jieun Yun</h1>
                <h3>I like making fun, interactive things with code. I also talk & write about those things.</h3>
                <button>Contact Me</button>
            </div>
        </section>
        
    );
};

export default Home;