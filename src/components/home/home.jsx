import React from 'react';
import styles from './home.module.css'

const Home = () => {
    return (
        <section id="home">
            <img className={styles.home_avatar} src="../imgs/myDog.jpg" alt="myDog"/>
                <h1 className={styles.home_title}>Hello, I'm Jieun Yun</h1>
                <h3>I like making fun, interactive things with code. I also talk & write about those things.</h3>
            <button>Contact Me</button>
        </section>
        
    );
};

export default Home;