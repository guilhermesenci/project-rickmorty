import { Link } from "react-router-dom"

import styles from './navbar.module.css'

import iconNavbar from '../../assets/icon/iconNavbar.svg'

function NavBar() {
    return (
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
        </div>
    )
}

export default NavBar