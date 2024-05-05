import React from 'react'
import favBook from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
    return (
        <div className='px-4 ld:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <img src={favBook} alt="" className='rounded md:w-10/12' />
            </div>
            <div className='md:w-1/2 space-y-6'>
                <h2 className='text-5xl font-bold my-5 md:w-3/5 leading-snug'>Find Your Favourite <span className='text-blue-700'>Book Here!</span> </h2>
                <p className='mb-10 text-lg md:w-5/6'>Lorem description E-book Reader
                    Amazon.in
                    https://www.amazon.in › e-book-reader
                    MEEBOOK M7 e-Book Reader, 2023 New 6.8" 300PPI HD E-Ink Screen Ereader, Cold/Warm Light, Android 11, Support Google Play Store,Speaker/OTG/Type C,3GB+32GB.

                    The 3 Best E-Readers of 2024 | Reviews by Wirecutter

                    The New York Times
                    https://www.nytimes.com › Electronics › Tablets
                    27 Jul 2023 — An ebook reader is a dedicated device on which you read electronic books—usually those you buy from an ebook store, but also some you can ...
                </p>
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-base'>Book Listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>550+</h3>
                        <p className='text-base'>Register Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1200+</h3>
                        <p className='text-base'>PDF Downloads</p>
                    </div>
                </div>

                <Link to="/shop" className="mt-8 block"><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
            </div>
        </div>
    )
}

export default FavBook
