import React, { useState } from 'react';

import { Link } from "react-router-dom"

import styles from './navbar.module.css'

import iconNavbar from '../../assets/icon/iconNavbar.svg'
import iconMenu from '../../assets/icon/menuIconMobile.svg'

function NavBar() {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className={styles.container}>
                <div>
                    <Link to="/">
                        <img src={iconNavbar} />
                    </Link>
                </div>
                <div>
                    <nav>
                        <div className={styles.linkStyle}>
                            <Link to="/" className={styles.link}>
                                <span className={styles.linkText}>Characters</span>
                            </Link>
                            <Link to="/locations" className={styles.link}>
                                <span className={styles.linkText}>Locations</span>
                            </Link>
                            <Link to="/episodes" className={styles.link}>
                                <span className={styles.linkText}>Episodes</span>
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className={styles.hambuguerMenu}>
                    <div>
                        {
                            show ?
                                <span onClick={() => setShow(!show)}>X</span>
                                :
                                <img src={iconMenu} onClick={() => setShow(!show)} />
                        }
                    </div>
                </div>
            </div>
            {
                show &&
                <div className={styles.mobileMenu}>
                    <Link to="/" className={styles.link}>
                        <span className={styles.linkText} onClick={() => setShow(!show)}>Characters</span>
                    </Link>
                    <Link to="/locations" className={styles.link}>
                        <span className={styles.linkText} onClick={() => setShow(!show)}>Locations</span>
                    </Link>
                    <Link to="/episodes" className={styles.link}>
                        <span className={styles.linkText} onClick={() => setShow(!show)}>Episodes</span>
                    </Link>
                </div>
            }
        </>
    )
}

export default NavBar