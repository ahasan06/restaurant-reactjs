import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import reviewer1 from '../images/review_people1.png';
import nahid from '../images/nahid.jpg';
import habib from '../images/habib.jpg';
import burger_video from '../videos/burger.mp4';
import pizza_video from '../videos/Pizza.mp4';
import chickenFry_video from '../videos/chicken_fry.mp4';
import ReviewCard from '../components/ReviewCard';

function Review() {
    const reviewObj = [
        { reviewer_name: "Khalid Al Dawsry", reviewer_location: "Jeddah, Saudi", reviewer_imageUrl: reviewer1, review_video: burger_video, review: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it." },
        { reviewer_name: "Ahasan Habib", reviewer_location: "Dhaka, Bangladesh", reviewer_imageUrl: nahid, review_video: pizza_video, review: "The pizza had a perfect blend of flavors with a crispy crust. The cheese was melted to perfection, and every bite had a burst of fresh ingredients." },
        { reviewer_name: "Siam Ahmed", reviewer_location: "Dhaka, Bangladesh", reviewer_imageUrl: habib, review_video: chickenFry_video, review: "The chicken fry was exceptionally crispy and flavorful. The seasoning was on point, and the texture was just right. Each bite was satisfying and left a lingering taste of spices!" },
    ];

    const swiperRef = useRef(null);

   

    const handlePrev = () => {
      if (swiperRef.current) {
        console.log("swiperRef : ",swiperRef.current);
        swiperRef.current.slidePrev();
      }
    };
  
    const handleNext = () => {
      if (swiperRef.current) {
        console.log("swiperRef : ",swiperRef.current);
        swiperRef.current.slideNext();
      }
    };
  
    return (
        <div className="max-w-[1373px] min-h-[860px] md:min-h-[600px] xl:min-h-[900px] flex flex-col justify-center gap-8 lg:gap-14 mx-auto px-6 2xl:px-6 py-6 lg:py-10 2xl:py-0">
            <div className="Food_heading_content flex justify-between items-center">
                <div className="food_title">
                    <h3 className="relative text-red-600 text-[20px] md:text-lg font-bold before:content-[''] before:inline-block before:bg-red-600 before:w-[8px] before:h-[8px] before:mr-2 before:align-middle">
                        Crispy, Every Bite Taste
                    </h3>
                    <h2 className="font-heading text-5xl md:text-5xl lg:text-6xl mt-2">What Some of my Customers Say</h2>
                </div>

                <div className="food_card_btn hidden space-x-4 lg:flex">
                    <button
                        onClick={handlePrev}
                        className="bg-white rounded-full shadow-md p-3 hover:bg-gray-700 hover:text-white transition ease-in"
                    >
                        <AiOutlineLeft />
                    </button>

                    <button
                        onClick={handleNext}
                        className="bg-white rounded-full shadow-md p-3 hover:bg-gray-700 text-red-600 hover:text-white transition ease-in"
                    >
                        <AiOutlineRight />
                    </button>
                </div>
            </div>

            <div className="review_container">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {reviewObj.map((review, index) => (
                        <SwiperSlide key={index}>
                            <ReviewCard {...review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="food_card_btn lg:hidden space-x-4 flex items-center justify-center">
                <button
                    onClick={handlePrev}
                    className="bg-white rounded-full shadow-md p-3 hover:bg-gray-700 hover:text-white transition ease-in"
                >
                    <AiOutlineLeft className="text-gray-800 hover:text-white" />
                </button>

                <button
                    onClick={handleNext}
                    className="bg-white rounded-full shadow-md p-3 hover:bg-gray-700 text-red-600 hover:text-white transition ease-in"
                >
                    <AiOutlineRight className="text-red-600 hover:text-white" />
                </button>
            </div>
        </div>
    );
}

export default Review;
