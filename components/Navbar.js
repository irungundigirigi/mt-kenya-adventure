import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image';
import Logo from '../public/logo.ico'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logoContainer}>
        <div className={styles.logoDiv}>
          <Image className={styles.logo} src={Logo}/>
        </div>
        <div className={styles.logoTitle}> MT KENYA ADVENTURE AND SAFARIS</div>
      </div>
      <div className={styles.linkContainer}>
        <Link href='/featured'>
              <span className={styles.Link}>ROUTES</span >
        </Link>

        <Link href='/contact-us'>
              <span className={styles.Link}>GEAR</span >
        </Link>

        <Link href='/contact-us'>
              <span className={styles.Link}>ABOUT</span >
        </Link>


      </div>
      
      
    </div>
  )
}

export default Navbar



