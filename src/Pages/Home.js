import React from 'react'
import {Link} from "react-router-dom";
import ReactCarousel from '../Components/ReactCarousel';
import { AnimatedPages } from '../Components/AnimatedPages';
import '../Assets/BtnStyle.css'

import RightArrow from '../Assets/Images/RightArrow.png'
import TeamWorking from '../Assets/Images/TeamWorking.jpg'
import HumanHand from '../Assets/Images/HumanHand.png'

import Video from '../Assets/Video/LoopVideo.mp4'
import LiveWallpaper from '../Assets/Video/LiveWallpaper.webm'
import WhatsappBtn from '../Components/WhatsappBtn';
import LocalTime from '../Components/LocalTime';
import CallBtn from '../Components/CallBtn';

export default function Home() {
    return (
      <AnimatedPages>
        <div className='relative'>         
            <div className='absolute z-10 flex flex-col items-center justify-center h-full w-full text-white font-semibold -mt-36 text-6xl'>Hi - Think Diffirent!              
            <Link to="service">
            <button id="cssbuttons-io"><span> Service <img src={RightArrow} alt='RightArrow img' className='w-6 h-6 mx-2'/> </span></button>  
            </Link>            
            </div>
            <video src={LiveWallpaper} autoPlay loop muted/>             
        </div>
       <WhatsappBtn></WhatsappBtn>
       <CallBtn></CallBtn>
    <div>

        <h1 className='container mx-auto text-center font-semibold text-5xl mt-16 mb-16'>Where Art Take Place!</h1>

  <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-12' id="aboutme-div">       
       <div className='bg-[#3c8bca] lg:rounded-r-md md:rounded-r-md' id="aboutme-txt-div">
       <h2 className='text-center text-white font-semibold text-4xl mt-12'>About Us</h2>
       <div className='text-white p-6 text-justify text-xl'>
       We are a full-service digital marketing team that specializes in helping businesses in all shapes and sizes
       We can help with everything from social media management photography/videography, website design and development and mobile application to online marketing and SEO.
       We also offer high quality video and content production and email marketing services.       
       </div>
       <div className='text-center my-12'>
       <Link to="service">
            <button id="cssbuttons-io"><span> READ MORE <img src={RightArrow} alt='RightArrow img' className='w-6 h-6 mx-2'/> </span></button>  
       </Link>   
        </div>
       </div>   
       <div>
         <img src={HumanHand} className='scale-95 hover:scale-100 ease-in-out duration-500' alt='Team Working img' />
       </div>
  </div>

        <div className='my-12'>
            <ReactCarousel/>
        </div>     
      

       <div className='grid lg:grid-cols-2 sm:grid-cols-1 my-12 text-center'>
       <div className='container mx-auto bg-[#3c8bca] text-white p-6 text-justify text-xl lg:rounded-r-md md:rounded-r-md' id="aboutme-txt-div">
       <h2 className='text-center font-semibold text-4xl mb-12'>Choose Us , Time Is Important!</h2>
       There are many reasons to choose our marketing services. We are a full-service marketing agency that can help you with all aspects of your marketing. We are also a results-oriented agency, which means that we focus on getting you the results you want and need from your marketing efforts.     
       <div className='my-16 text-center font-semibold text-5xl p-4'>
       <LocalTime></LocalTime>
       </div>
       </div>

       <div>
       <img src={TeamWorking} className='scale-95 hover:scale-100 ease-in-out duration-500' alt="img"/>
       </div>
       </div>  

       <div>
          
          <div>
            <video className='rounded-sm' src={Video} autoPlay loop muted/>
          </div>          
       </div>

       <h2 className='container mx-auto text-center font-semibold text-5xl mt-16 mb-16'>Best Service Is To Think Like A Costumer</h2>

        <div className='bg-[#3c8bca] text-white my-12 py-6 text-center rounded-md' id="aboutme-div">
       <div>
       <h2 className='container mx-auto text-center font-semibold text-4xl mb-4 mt-4'>Have Something In Your Mind?</h2>
       <div id="aboutme-txt-div" className='container mx-auto p-10 text-white text-center text-xl'>
       If you have any plan and want to improve your work and bussiness, Don't worry we are here to help and answer your questions
       please contact us and we will be happy to assist you.      
       </div>       
       </div>  
       <Link to="contact">
            <button id="cssbuttons-io"><span> CONTACT US <img src={RightArrow} alt='RightArrow img' className='w-6 h-6 mx-2'/> </span></button>  
       </Link>        
       </div>
       
       <h2 className='container mx-auto text-center font-semibold text-5xl mt-16 mb-16'>Make Your Work Dream Reallity!</h2>
    </div>
      </AnimatedPages>
  )
}