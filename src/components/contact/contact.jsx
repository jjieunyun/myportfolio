import React from 'react';
import styles from './contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <h1 className={styles.title}>Contact</h1>
            <div className={styles.container}>
                <h2 className={styles.email}>jjieunyun@naver.com</h2>
                <a href='https://github.com/'>
                    아이콘
                </a>
                <a href='https://github.com/'>
                    아이콘
                </a>
            </div>
        </section>
    );
};

export default Contact;