import React, { useState } from 'react'
import about_image from '../images/about_image.png'
import Button from '../components/ui/Button';
import phone from '../assets/icons/phone.png'
import fastDelivery from '../assets/icons/fast_delivery.png'
import AboutCard from '../components/ui/AboutCard';
import dining from '../assets/icons/absolute_dining.png'
import pickup_delivery from '../assets/icons/pickup_delivery.png'

import ExperimentCard from '../components/ui/ExperimentCard';
import marketplcae from '../images/MarketPlace.png'

function About() {
    const tabContent = {
        About: {
            title: "EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation."
        },
        Experience: {
            title: "EXPERIENCED CHEFS BRINGING AUTHENTIC FLAVORS",
            description:
                "Our chefs have years of experience crafting authentic Saudi cuisine, blending traditional recipes with modern techniques to create unforgettable flavors. Experience the true taste of Saudi Arabia with every bite."
        },
        Contact: {
            title: "CONTACT US FOR RESERVATIONS OR INQUIRIES",
            description:
                "Get in touch with us to book your table, ask questions, or provide feedback. We're here to make your dining experience memorable and look forward to serving you soon."
        }
    };

    const [activeTab, setActiveTab] = useState('About');


    return (
        <section className=' max-w-[1373px] min-h-[864px] justify-center mx-auto flex lg:gap-10 flex-col px-6 lg:py-6 xl:pt-0'>

            

             <div className='about_top  mt-6 flex flex-col lg:mt-0 lg:flex-row md:gap-16'>

                <aside className='md:flex-1 relative'>
                    <img src={about_image} alt="about image" className='w-full' />
                    <div className='absolute top-6 '>
                     <img src={marketplcae} className='w-[160px] md:w-full'/>
                    </div>
                </aside>

                <article className="mt-10 mx-auto min-h-[398px] md:mt-0 md:flex-1 ">

                    <div className="flex items-center space-x-4 border-b-2 border-[#B52B1D]">
                        {Object.keys(tabContent).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`font-medium  pb-2 border-b-2 px-4 py-2 border-transparent ${activeTab === tab ? '  border-[#B52B1D] bg-[#B52B1D] text-white' : 'text-gray-800'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="mt-6">
                        <h2 className="text-4xl xl:text-6xl font-heading">{tabContent[activeTab].title}</h2>
                        <p className="mt-4 text-[#333333] text-[14px] leading-[26px]">{tabContent[activeTab].description}</p>
                   </div>

                   <div className='mt-6 about_contact flex items-center gap-2 md:gap-8'>
                        <Button label="About More" className='bg-[#FEBF00] hover:bg-yellow-500'/>
                        <div className='flex items-center gap-2'>
                        <img src={phone} alt="icon" />
                        <p className='font-bold'>+88 3426 739 485</p>
                        </div>
                   </div>
                 
                </article>
              

            </div>

            <article className='about_bottom my-6  grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                
                <AboutCard 
                icon={fastDelivery}
                title="Fast Delivery"
                description="Within 30 minutes"
                />

                <AboutCard 
                icon={dining}
                title="Pbsolute dining"
                description="Best buffet restaurant"
                />
                <AboutCard 
                icon={pickup_delivery}
                title="Pickup delivery"
                description="Grab your food order"
                />

                
            </article>



        </section>
    )
}

export default About
