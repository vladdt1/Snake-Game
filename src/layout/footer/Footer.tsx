import React, { FC } from 'react'
import styles from './footer.module.css'

const Footer:FC = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.wrapper}>© 2022, Титов Владислав, АС-20-1</div>
        </footer>
    )
}

export default Footer