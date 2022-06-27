import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Explore the world library recipes</h1>
      <Link href="/products" >
        <button>HOME</button>
      </Link>
    </div>
  )
}

export default Home
