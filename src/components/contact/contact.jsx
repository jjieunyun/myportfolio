import React, { forwardRef } from 'react';
import Mouse from '../mouse';
import styles from './contact.module.css'


const Contact = forwardRef((props,ref) => {
    return (
        <section ref={ref} className={styles.contact}>
            <h1 className={styles.title}>Contact</h1>
            <div className={styles.container}>
                <div className={styles.icon_container}>
                    <a className={styles.icon} href='https://github.com/'>
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </div>
                <div className={styles.icon_container}>
                    <a className={styles.icon} href='https://github.com/'>
                        <i class="fa-solid fa-phone"></i>
                    </a>
                </div>
                <div className={styles.icon_container}>
                    <a className={styles.icon} href='https://github.com/'>
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
                <div className={styles.icon_container}>
                    <a className={styles.icon} href='https://github.com/'>
                        <i  class="fa-solid fa-cube"></i>
                    </a>
                </div>
            </div>
            <Mouse/>
        </section>
    );
});

export default Contact;