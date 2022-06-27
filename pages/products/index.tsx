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
            <h1>Here there from products</h1>
            <p>The current stock is: {books.length}</p>
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
    const res = await fetch("https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data")
    const data: Book[] = await res.json()
    return {
        props: {
            books: data
        }
    }
}

export default Products