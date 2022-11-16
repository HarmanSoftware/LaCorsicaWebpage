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
       
       <h2 className='container mx-auto text-center font-semibold text-5xl mt-16 mb-16'>Where Art Takes Place!</h2>

       <div className='bg-[#146994] text-white mt-10 pt-4 pb-12 text-center' id="aboutme-div">
       <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
       <h2 className='container mx-auto text-center font-semibold text-3xl mb-4 mt-4'>About Us</h2>
       <div id="aboutme-txt-div" className='container mx-auto p-10 text-white  text-justify text-xl rounded-lg drop-shadow-md'>
       We are a full-service digital marketing team that specializes in helping businesses in all shapes and sizes
       We can help with everything from social media management photography/videography, website design and development and mobile application to online marketing and SEO.
       We also offer high quality video and content production and email marketing services.       
       </div>
       <Link to='/about'>
       <button type='text' className='w-36 h-12 bg-white text-black font-semibold rounded-md'>READ MORE</button>              
       </Link>
       </div>       
       </div>

        <br></br>

       <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-12 text-center scale-95 hover:scale-100 ease-in-out duration-500'>
       <div>
       <h2 className='container mx-auto text-center font-semibold text-5xl mt-16'>Why Choose Us?</h2>
       </div>
       <div id="aboutme-txt-div" className='container mx-auto p-6 text-justify text-xl rounded-lg drop-shadow-md'>
       There are many reasons to choose our marketing services. We are a full-service marketing agency that can help you with all aspects of your marketing. We are also a results-oriented agency, which means that we focus on getting you the results you want and need from your marketing efforts.     
       </div>
       </div>  
       <br></br>
       <br></br>
        <br></br>

        <div className='bg-[#146994] text-white mt-10 pt-4 pb-12 text-center' id="aboutme-div">
       <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
       <h2 className='container mx-auto text-center font-semibold text-3xl mb-4 mt-4'>Have Something In Your Mind?</h2>
       <div id="aboutme-txt-div" className='container mx-auto p-10 text-white text-center  text-xl rounded-lg drop-shadow-md'>
       If you have any plan and want to improve your work and bussiness, Don't worry we are here to help and answer your questions
       please contact us and we will be happy to assist you.      
       </div>
       <Link to='/contact'>
       <button type='text' className='w-36 h-12 bg-white text-black font-semibold rounded-md'>CONTACT US</button>              
       </Link>
       </div>       
       </div>
       <br></br>
       <br></br>
    </>
  )
}