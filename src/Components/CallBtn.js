import React from 'react'
import CallIcon from '../Assets/Images/CallIcon.png'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

function CallBtn() {
  return (
    <>
      <Tippy content="Call Us!">      
    <div className='fixed bottom-28 right-2 h-14 w-14 z-50 '>
    <a href="tel:+964-750-782-1514" > 
    <img src={CallIcon} alt="Call icon img" />
    </a>
    </div>       
    </Tippy>
    </>
  )
}

export default CallBtn