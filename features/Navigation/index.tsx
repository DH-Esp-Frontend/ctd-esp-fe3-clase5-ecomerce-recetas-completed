import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./nav.module.css"

const NavBar = () => {
  return (
    <nav className={styles.navbar} >
        <div className={styles.logo} >
          <Image src="/logo.png" alt='logo' width={50} height={50}/>
        </div>
        <Link href="/products">Home</Link>
    </nav>
  )
}

export default NavBar