import Image from 'next/image'
import React, { FC } from 'react'
import { Book } from '../../pages/products'

interface Props {
    book: Book,
    handleBought: ()=>void
}

const BookInfo: FC<Props> = ({book, handleBought}) => {
  return (
    <div>
        <div>
            <h3>{book.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aspernatur praesentium labore veritatis culpa sed dicta at accusantium aut dolore.
            Dignissimos voluptatem pariatur, natus inventore nisi sit
            commodi voluptate animi corporis?</p>
        </div>
        <div>    
         <Image src={book.image} alt="book-cover" width={200} height={300} />
        </div>
        <div>
        </div>
        <div>
            <button onClick={handleBought}>Order now</button>
            
        </div>
                <div>2 days ago</div>
    </div>   
  )
}

export default BookInfo