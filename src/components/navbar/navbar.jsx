import React, { useState,useEffect, useRef } from 'react';
import styles from './navbar.module.css'

const Navbar = ({scrollEvent}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const navRef = useRef();

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    

    const clickMenu = (event) => {
        
        //const target = event.target;
        const text = event.target.dataset.text;
        if(text == null) {
            return;
        }
        scrollEvent(text);
    }

    return (
            <nav 
            onClick={(event)=>clickMenu(event)} 
            ref={navRef}
            className={`${scrollPosition < 100? styles.navbar : styles.changed_navbar}`}>
                <div 
                className={`${scrollPosition < 100? styles.navbar_logo : styles.changed_logo}`}>
                    <span 
                        className={`${scrollPosition < 100? styles.title : styles.changed_title}`}>
                        <p>jieun.Yun</p>
                    </span>
                </div>

                <ul
                
                className={`${scrollPosition < 100? styles.navbar_menu : styles.changed_menu}`}>
                    <li 
                        className={`${scrollPosition < 100? styles.navbar_menu_item : styles.changed_item}`}
                        data-text='Home'
                        value='home'>
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