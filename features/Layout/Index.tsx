import Head from 'next/head'
import React, { FC } from 'react'
import NavBar from '../Navigation'

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = ({children}) => {
  return (
    <>
        <Head>  
            <title>Cooking Shelf</title>
            <link rel="icon" href="/logo.png" />
        </Head>
        <NavBar/>
        {children}
    </>
  )
}

export default Layout