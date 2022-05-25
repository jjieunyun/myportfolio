import React from 'react';
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src="../imgs/nameLogo.png" alt="name"/>
            </div>


            <ul className={styles.navbar_menu}>
                <li className={styles.navbar_menu_item}>Home</li>
                <li className={styles.navbar_menu_item}>About</li>
                <li className={styles.navbar_menu_item}>Skills</li>
                <li className={styles.navbar_menu_item}>My works</li>
                <li className={styles.navbar_menu_item}>Contact</li>
            </ul>

        </nav>
    );
};

export default Navbar;