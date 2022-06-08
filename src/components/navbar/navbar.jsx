import React, { useState,useEffect } from 'react';
import styles from './navbar.module.css'

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    
    return (
        <nav className={`${scrollPosition < 100? styles.navbar : styles.changed_navbar}`}>
            <div 
            className={`${scrollPosition < 100? styles.navbar_logo : styles.changed_logo}`}>
                <a href='www.naver.com' 
                    className={`${scrollPosition < 100? styles.title : styles.changed_title}`}>
                    <p>jieun.Yun</p>
                </a>
            </div>

            <ul 
            className={`${scrollPosition < 100? styles.navbar_menu : styles.changed_menu}`}>
                <li 
                    className={`${scrollPosition < 100? styles.navbar_menu_item : styles.changed_item}`}
                    data-text='Home'>
                    Home
                </li>
                <li 
                    className={`${scrollPosition < 100? styles.navbar_menu_item : styles.changed_item}`}
                    data-text='About'>
                    About
                </li>
                <li 
                    className={`${scrollPosition < 100? styles.navbar_menu_item : styles.changed_item}`}
                    data-text='Skills'>
                    Skills
                </li>
                <li 
                    className={`${scrollPosition < 100? styles.navbar_menu_item : styles.changed_item}`}
                    data-text='Myworks'>
                    Myworks
                </li>
                <li 
                    className={`${scrollPosition < 100? styles.navbar_menu_item : styles.changed_item}`}
                    data-text='Contact'>
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;