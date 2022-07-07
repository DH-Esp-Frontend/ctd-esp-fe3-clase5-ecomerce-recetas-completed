import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import Book from '../../features/Book'

interface Props {
    books: Book[]
}
export type Book = {name: string, id: string, image: string}

const Products: NextPage<Props> = ({books}) => {
  return (
    <main>
        <div>
            <h2>Books store</h2>
            <small className='text-muted'> The current stock is: {books.length}</small>
        </div>
        <div>
            {books.length 
            ? books.map(book => <Book key={book.id} data={book}/>)
            : null }
        </div>
    </main>

  )
}


export const getServerSideProps: GetServerSideProps =async () => {
    const res = await fetch("http://localhost:3000/api/products")
    const data: Book[] = await res.json()
    return {
        props: {
            books: data
        }
    }
}

export default Products