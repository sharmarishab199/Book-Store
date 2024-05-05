// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../components/OtherBookCards.css"
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const OtherBookCards = ({books,headline}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper shadow-xl bg-teal-100"
      >
        {
            books.map((book)=> <SwiperSlide key={book._id} className="bg-gradient-to-l from-teal-100 to-teal-300">
                <Link to={`/book/${book._id}`} className='main'>
                    <div className='relative'>
                        <img className='image' src={book?.imageUrl} alt="" />
                        <div className='absolute top-3 right-3 bg-blue-700 hover:bg-black p-2 rounded'>
                            <FaCartShopping className='w-4 h-4 text-white'/>
                        </div>
                    </div>
                    <div>
                        <div>
                        <h3>{book?.bookTitle}</h3>
                        <p>{book?.authorName}</p>
                        </div>
                        <div>
                            <p>$10.00</p>
                        </div>
                    </div>
                </Link>
            </SwiperSlide>)
        }
        
      </Swiper>
    </div>
  )
}

export default OtherBookCards
