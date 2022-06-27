import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import Book from '../../features/Book'
import BookInfo from '../../features/Book/bookInfo'

type Book = {name: string, id: string, image: string}

interface Props {
    book: Book
}

const Product: FC<Props> = ({book}) => {
    const router = useRouter()
    const handleBought = async()=>{
        await fetch(`https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data/${book.id}`, { method: 'DELETE' })
        alert("Thanks for buying!")
        router.push("/products")
    }

  return (
    <BookInfo book={book} handleBought={handleBought} />
  )
}


export const getStaticProps: GetStaticProps =async ({params}) => {
    const res = await fetch(`https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data/${params?.id}`)
    const data: Book = await res.json()
    console.log(data);
    return {
        props: {
            book: data
        }
    }
    
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data`)
    const data: Book[] = await res.json()
    const paths = data.map(book => {
        return {params: {id: book.id}}})

    return {
        paths,
        fallback: false
    }
    
}
export default Product