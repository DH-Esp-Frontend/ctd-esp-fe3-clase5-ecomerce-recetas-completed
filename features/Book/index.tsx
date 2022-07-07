import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { Book } from '../../pages/products'

interface Props {
    data: Book
}

const Book: FC<Props> = ({data}) => {
  return (
      <div>
        <div>
          <h3>{data.name}</h3>
          <Image src={data.image} alt="book-cover" width={200} height={300} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis porro, quaerat commodi</p>
          <Link href={`/products/${data.id}`} >
             <button>Buy now</button>
          </Link>
        </div>
      </div>
  )
}

export default Book