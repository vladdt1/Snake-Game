import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import image from './sn.png'

const Header:FC = () => {

    return(
        <header className={styles.header}>
            <Link to='/'>
                <div className={styles['image-wrapper']}>
                    <img src={image}
                         alt="" />
                </div>
            </Link>

            <div className={styles.wrapper} style={{fontSize: 22}}>Игра в змейку</div>
        </header>
    )
}

export default Header