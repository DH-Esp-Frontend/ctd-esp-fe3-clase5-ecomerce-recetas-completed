import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav >
      <div>
          <Image src="/logo.png" alt='logo' width={50} height={50}/>
        <Link href="/products"><a>Home</a></Link>
        <Link href="/create"><a>Create</a></Link>
        <Link href="/products/offers"><a>Sale</a></Link>
      </div>
    </nav>
  )
}

export default NavBar