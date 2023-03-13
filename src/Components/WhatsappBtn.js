import React from 'react'
// import WhatsappIcon from '../Assets/Images/whatsapp.png'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

function WhatsappBtn() {
  return (    
    <Tippy content="WhatsApp">      
    <div className='fixed bottom-10 right-4 h-14 w-14 z-50 rounded-full'>
    <a href="https://wa.me/+9647507821514"> 
    {/* <img src={WhatsappIcon} alt="Whatsapp icon img"/> */}
    </a>
    </div>       
    </Tippy>
  )
}

export default WhatsappBtn