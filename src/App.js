import {React} from 'react'
import { createContext, useState,useEffect} from 'react'
import BeatLoader from "react-spinners/BeatLoader";

import '../src/Assets/App.css';
import '../src/Assets/Global.css';

import WhatsappBtn from './Components/WhatsappBtn';
import CallBtn from './Components/CallBtn';
import ReactCarousel from './Components/ReactCarousel';
import ReactMap from './Components/ReactMap';
import BackTop from './Components/BackTop';

import Logo from "./Assets/Images/Logo.jpg";
import Meal from "./Assets/Images/Meal.jpg";
import Tea from "./Assets/Images/Tea.jpg";
import Sandwich from "./Assets/Images/Sandwich.jpg";
import Juice from "./Assets/Images/Juice.jpg";
import Team from "./Assets/Images/Team.jpg";
import Hand from "./Assets/Images/Hand.jpg";
import LacorsicaInside from "./Assets/Images/LacorsicaInside.jpg";
import Coffee from "./Assets/Images/Coffee.gif";


export const ThemeContext = createContext(null);

function App() {  

  //Screen preloader
  const override = {
    display: "flex",
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    width:'%100',
    height:'100vh',
    margin: "0 auto",    
  };
  const [loading,setLoading] = useState(false);

  useEffect (() => {
    setLoading(true)
    setTimeout(()=>{
    setLoading(false)
    },3000)
  },[])

 

  return (
    <>
    {loading? <BeatLoader
        color='#4193a9'
        loading={loading}
        cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :    
      
    <div className="App">

      <header>
      <div className='flex justify-center'>
       <img src={Logo} className='mt-12' height='250' width='250'/>
      </div>
      <div className='text-4xl font-semibol text-center text-[#B59670] py-6'>Welcome To LaCorsica Cafe And Bakery</div>      
      </header>

      <body>
      <ReactCarousel/>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
        <div className='text-center'>
      <div className='text-4xl font-semibol text-[#B59670] py-6'>About Us</div>
      <div className='text-justify px-6'>Welcome to our cafe and bakery, where we specialize in providing delicious food and baked goods in a cozy and welcoming atmosphere.
                      At our cafe, you'll find a wide range of breakfast, lunch, and dinner options to suit all tastes. Of course, no visit to our cafe and bakery would be complete without trying one of our signature coffee drinks. We use only best coffee beans and expertly trained baristas to craft the perfect cup every time. Whether you prefer a cappuccino or a more indulgent latte with whipped cream and caramel drizzle, we've got something to satisfy your caffeine cravings.
                      But it's not just about the food and drinks at our cafe and bakery - it's also about the experience. Our friendly and attentive staff are always on hand to make recommendations or answer any questions you may have, and we strive to make every visit to our cafe and bakery a memorable one. We can't wait to welcome you!</div>
      <div className='flex justify-center'> <img src={Coffee} width='400' height='400'/></div>
        </div>
      <div className='flex justify-center py-6'><img className="rounded-md" src={LacorsicaInside} width='500' height='300'/></div>
      </div>
      <div className='text-4xl font-semibol text-center text-[#B59670] py-6'>Your New And Only Quality Time Destination In The City Of Erbil!</div>
      <div className='text-4xl font-semibol text-center text-[#B59670] py-6'>Contact Us!</div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 place-items-center'>
        <div className='bg-black w-full h-full'>
          <div className='text-white text-center font-semibold text-3xl p-2'>Find Us!</div>
          <div className='text-[#B59670] text-center font-semibold text-3xl p-2'>Open Time: Everyday 8AM - 12PM</div>
          <div className='text-white text-center font-semibold text-3xl p-2'>Contact Us</div>
          <div className='text-[#B59670] text-center font-semibold text-3xl p-2'>
          <a href="tel:+964-750-272-8888">0750 272 8888</a>
          </div>
        </div>
        <div className='w-full h-full'>
          <ReactMap/>
        </div>
      </div>

      <div className='grid lg:grid-cols-2 sm:grid-cols-1 place-items-center'>
        <div className='m-6'><img className="rounded-md" src={Meal} width='500' height='500'/></div>
        <div className='m-6'><img className="rounded-md" src={Juice} width='500' height='500'/></div>
        <div className='m-6'><img className="rounded-md" src={Tea} width='500' height='500'/></div>
        <div className='m-6'><img className="rounded-md" src={Sandwich} width='500' height='500'/></div>
      </div>
      
      <WhatsappBtn/>
      <CallBtn/>    
      <BackTop/>
      </body>
    </div>     
  }
    </>
  );
}
export default App;