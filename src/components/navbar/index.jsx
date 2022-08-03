import styles from './navbar.module.css'

import iconNavbar from '../../assets/icon/iconNavbar.svg'

function NavBar() {
    return (
        <div className={styles.container}>
            <div>
                <img src={iconNavbar} />
            </div>
            <div>
                <div className={styles.linkStyle}>
                    <span className={styles.linkText}>Characters</span>
                    <span className={styles.linkText}>Locations</span>
                    <span className={styles.linkText}>Episodes</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar