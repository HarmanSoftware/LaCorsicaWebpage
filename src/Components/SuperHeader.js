import React from 'react'
import Clock from '../Assets/Images/Clock.png'

function SuperHeader() {
  return (
    <>
       <div className='sticky grid grid-cols-2  place-items-center h-12 bg-[#3c8bca] text-white text-semibold w-full drop-shadow-lg' id='super-header'>  
        <div className='flex px-2'> 
          <img src={Clock} className='w-6 h-6 mx-2' alt='Clock Icon img'/>         
          9AM - 5PM | Sat- Thu
        </div>
        <div className='flex'>
          <div className='px-2'>English </div>          
          <div className='px-2'>Arabic</div>
          <div className='px-2'>Kurdish</div>
        </div>    
       </div>
    </>
  )
}

export default SuperHeader