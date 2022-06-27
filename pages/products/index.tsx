import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import Book from '../../features/Book'
import styles from "../../styles/Products.module.css"

interface Props {
    books: Book[]
}
export type Book = {name: string, id: string, image: string}

const Products: NextPage<Props> = ({books}) => {
  return (
    <main>
        <div className={styles.heading} >
            <h2>Books store</h2>
            <small className='text-muted'> The current stock is: {books.length}</small>
        </div>
        <div className={styles.booksGrid} >
            {books.length 
            ? books.map(book => <Book key={book.id} data={book}/>)
            : null }
        </div>
    </main>

  )
}


export const getServerSideProps: GetServerSideProps =async () => {
    const res = await fetch("https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data")
    const data: Book[] = await res.json()
    return {
        props: {
            books: data
        }
    }
}

export default Products