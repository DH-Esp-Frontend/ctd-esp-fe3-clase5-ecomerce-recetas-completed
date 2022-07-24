import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { ChangeEvent, ChangeEventHandler, FC, FormEvent, useState } from 'react'
import Book from '../../features/Book'

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
    <div className='info'>
        <Book data={book}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aspernatur praesentium labore veritatis culpa sed dicta at accusantium aut dolore.
        Dignissimos voluptatem pariatur, natus inventore nisi sit
        commodi voluptate animi corporis?</p>
        <button onClick={handleBought}>Buy now</button>

    </div>
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

function Form() {
    const [values, setValues] = useState({
        email: "",
        password: "",
      });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>  {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value})
    }

    const handleSubmit = ()=>{
        //...
    }
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    );
  }