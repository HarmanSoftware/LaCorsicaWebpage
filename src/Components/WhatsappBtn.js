import React from 'react'
import WhatsappIcon from '../Assets/Images/whatsapp.png'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

function WhatsappBtn() {
  return (    
    <Tippy content="Call Us!">      
    <div className='fixed bottom-10 right-5 h-14 w-14 z-50'>
    <a href="https://wa.me/+9647501347400" > 
    <img src={WhatsappIcon} alt="Whatsapp icon img" />
    </a>
    </div>       
    </Tippy>
  )
}

export default WhatsappBtn