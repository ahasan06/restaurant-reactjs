import React, { useRef, useState } from 'react';
import { IoIosPlayCircle } from "react-icons/io";
import { FaPauseCircle } from "react-icons/fa";
import coma from '../images/coma.png';
import rev_bg_card from '../images/review_card_des.png';
import rev_bg_card_desk from '../images/Vector (Stroke).png';

function ReviewCard({ reviewer_name, reviewer_location, reviewer_imageUrl, review_video, review }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='review_container w-full h-full md:h-[350px] xl:min-h-[550px] flex flex-col-reverse md:flex-row justify-between'>
            <div className='bg-[#FEBF00] relative text-wrap p-[25px] lg:p-[40px] xl:p-[90px] min-h-[335px] md:min-h-[300px] md:w-[600px] lg:w-[100%] 2xl:w-[70%] flex flex-col justify-between overflow-auto'>
                <img src={rev_bg_card} className='absolute xl:hidden bottom-0 lg:bottom-0 left-0' />
                <img src={rev_bg_card_desk} className='hidden xl:block absolute bottom-0 lg:bottom-10 left-0' />
                <div className="relative card_container gap-[40px] p-2">
                    <img src={coma} className='absolute top-0 left-0' />
                    <p className='text-[#0A1425] text-[18px] p-1'>{review}</p>
                </div>
                <div className='card_reviewer relative flex items-center justify-between border-gray-900 pb-3 border-b-2'>
                    <div className='bg-red-600 w-10 h-1 absolute bottom-0 right-0 translate-y-1/2'></div>
                    <div className='reviewer_details'>
                        <h3 className='text-[#0A1425] font-heading text-[18px]'>{reviewer_name}</h3>
                        <p className='text-gray-800'>{reviewer_location}</p>
                    </div>
                    <div>
                        <img src={reviewer_imageUrl} alt="reviewer" className='w-[40px] h-[40px] rounded-full object-cover' />
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 relative w-full h-[240px] md:h-full flex justify-center items-center overflow-hidden">
                <button onClick={handlePlayPause} className="absolute cursor-pointer z-30 text-yellow-500">
                    {isPlaying ? <FaPauseCircle className='text-6xl' /> : <IoIosPlayCircle className='text-6xl' />}
                </button>
                <video width="100%" height="100%" className="object-cover h-full w-full" ref={videoRef}  muted loop playsInline>
                    <source src={review_video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default ReviewCard;
