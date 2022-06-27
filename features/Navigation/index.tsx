import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
        <Image src="/logo.png" alt='logo' width={50} height={50} />
        <Link href="/">Home</Link>
    </div>
  )
}

export default NavBar