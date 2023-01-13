import React from 'react'

function SuperHeader() {
  return (
    <>
       <div className='sticky grid grid-cols-2 place-items-center h-12 w-full  bg-[#3c8bca] text-white text-semibold drop-shadow-lg' id='super-header'>  
        <div className='flex p-2'> 
           9AM - 5PM | Sat-Thu
        </div>
        <div className='flex mx-2'>
          <div className='pr-2'>English</div>          
          <div className='pr-2'>Arabic</div>
          <div>Kurdish</div>
        </div>    
       </div>
    </>
  )
}

export default SuperHeader