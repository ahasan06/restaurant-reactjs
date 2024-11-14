import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import clock from '../assets/icons/clock.png';
import call from '../assets/icons/call-alt.png';
import message from '../assets/icons/message.png';
import location from '../assets/icons/location.png';

function Footer() {
  return (
    <div className='footer_bg min-h-[800px] text-white py-10 px-6 flex flex-col justify-center'>
      <footer className='max-w-6xl xl:min-w-[60vw] mx-auto'>
        {/* Heading Section */}
        <div className='text-center mb-12'>
          <h1 className='font-heading text-[40px] md:text-5xl 2xl:text-[56px]'>We’re ready to offer you the best dining experiences</h1>
        </div>

        {/* Information Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
          <div className="footer_card text-center ">
            <img src={clock} alt="Opening hours" className='mx-auto mb-4 w-[30px] h-[30px] object-cover' />
            <h4 className='font-heading  text-3xl mb-2'>Opening hours</h4>
            <p className='font-menu'>Monday - Sunday</p>
            <p className='font-menu'>9:00 AM to 11:30 PM</p>
          </div>

          <div className="footer_card text-center ">
            <img src={call} alt="Let's talk" className='mx-auto mb-4 w-[30px] h-[30px] object-contain' />
            <h4 className='font-heading  text-3xl mb-2'>LET'S TALK</h4>
            <p className='font-menu'>Phone: 1-800-222-4545</p>
            <p className='font-menu'>Fax: 1-800-222-4545</p>
          </div>

          <div className="footer_card text-center ">
            <img src={message} alt="Book a table" className='mx-auto mb-4 w-[30px] h-[30px] object-contain' />
            <h4 className='font-heading  text-3xl mb-2'>BOOK A TABLE</h4>
            <p className='font-menu'>Email: demo@website.com</p>
            <p className='font-menu'>Support: support@website.com</p>
          </div>

          <div className="footer_card text-center">
            <img src={location} alt="Our address" className='mx-auto mb-4 w-[30px] h-[30px] object-contain' />
            <h4 className='font-heading  text-3xl mb-2'>Our Address</h4>
            <p className='font-menu'>123 Street, New York City</p>
            <p className='font-menu'>United States of America</p>
          </div>
        </div>

      <div className='flex flex-col gap-4  mt-16 md:mt-24'>
          {/* Social Media Icons */}
          <div className='flex justify-center space-x-6'>
          <a href="#" className='p-3  border rounded-full text-white hover:bg-yellow-500 transition'>
            <FaFacebookF size={20} />
          </a>
          <a href="#" className='p-3 border rounded-full text-white hover:bg-yellow-500 transition'>
            <FaTwitter size={20} />
          </a>
          <a href="#" className='p-3 border rounded-full text-white hover:bg-yellow-500 transition'>
            <FaInstagram size={20} />
          </a>
          <a href="#" className='p-3 border rounded-full text-white hover:bg-yellow-500 transition'>
            <FaLinkedinIn size={20} />
          </a>
         </div>

        {/* Footer Bottom */}
        <div className='text-center text-xl'>
          <p className='font-menu'>© 2023 All Rights Reserved</p>
        </div>
      </div>


      </footer>
    </div>
  );
}

export default Footer;
