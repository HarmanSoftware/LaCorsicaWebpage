import React from 'react'
import ReactCarousel from '../Components/ReactCarousel';
import {Link} from "react-router-dom";

export default function Home() {
    return (
    <>
        <div className='grid grid-cols-1'>
        <div>
            <ReactCarousel/>
        </div>     
       </div>
       
       <div className='bg-[#146994] text-white mt-10 pt-4 pb-12 text-center' id="aboutme-div">
       <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
       <h2 className='container mx-auto text-center font-semibold text-3xl mb-4 mt-4'>About Us</h2>
       <div id="aboutme-txt-div" className='container mx-auto p-10 text-white  text-justify text-xl rounded-lg drop-shadow-md'>
       We are a full-service digital marketing team that specializes in helping businesses in all shapes and sizes
       We can help with everything from social media management photography/videography, website design and development and mobile application to online marketing and SEO.
       We also offer high quality video and content production and email marketing services.       
       </div>
       <Link to='/about'>
       <button type='text' className='w-24 h-12 bg-white text-black font-semibold rounded-md'>READ MORE</button>              
       </Link>
       </div>       
       </div>

        <br></br>
        <br></br>
    </>
  )
}