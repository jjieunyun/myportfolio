import React from 'react';
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <a href="" className={styles.title}>
                    <p>jieun.Yun</p>
                </a>
            </div>


            <ul className={styles.navbar_menu}>
                <li className={styles.navbar_menu_item}
                    data-text='Home'>
                    Home
                </li>
                <li className={styles.navbar_menu_item}
                    data-text='About'>
                    About
                </li>
                <li className={styles.navbar_menu_item}
                    data-text='Skills'>
                    Skills
                </li>
                <li className={styles.navbar_menu_item}
                    data-text='Myworks'>
                    Myworks
                </li>
                <li className={styles.navbar_menu_item}
                    data-text='Contact'>
                    Contact
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;