import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { Book } from '../../pages/products'

interface Props {
    data: Book
}

const Book: FC<Props> = ({data}) => {
  return (
    <div className='card'>
          <Link href={`/products/${data.id}`} >
              <h3>{data.name}</h3>
          </Link>
          <Image src={data.image} alt="book-cover" width={200} height={300} />
    </div>
  )
}

export default Book