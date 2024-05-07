import { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("/all-books").then(res => res.json()).then(data => setBooks(data))
  }, [])
  return (
    <div className='px-4 mt-28 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
      <div className='grid grid-cols-1 gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3'>
        {
          books.map((book) => {
            return (<Card className="max-w-sm" key={book}>
              <img src={book.imageUrl} alt=""/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {book.bookDescription.substring(0,300)}
              </p>
              <Link to={`/book/${book._id}`} 
              className='py-2 font-semibold text-center text-white bg-blue-700 rounded'>
                Buy Now
              </Link>
            </Card>)
          })
        }
      </div>
    </div>
  )
}

export default Shop
