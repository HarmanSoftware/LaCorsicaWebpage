import React from 'react'
import '../Assets/Card.css'
import SM from '../Assets/Images/SM.png'
import App from '../Assets/Images/App.png'
import Web from '../Assets/Images/Web.png'
import Branding from '../Assets/Images/Branding.png'
import VideoProduction from '../Assets/Images/VideoProduction.png'
import Graphic from '../Assets/Images/Graphic.png'

function Cards() {
  return (
    <>
    <h1 className='text-center font-semibold text-5xl mt-12'>Our Services</h1>
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-items-center my-8'>
       <div className='my-2'>
          {/* Card 1 */}
      <div class="card">
        <div class="header">
           <div class="img-box">
            <img src={SM} alt='SM img'/>
        </div>
        <h1 class="title">SM Management</h1>
    </div>

    <div class="content">
        <p>
        Enssuring the up to date of social media page, making sure that the page is doing well and developing a content sharing calendar. 
        </p>
    </div> 
</div>
       </div>

       <div className='my-2'>
          {/* Card 2 */}
      <div class="card">
        <div class="header">
           <div class="img-box">
           <img src={Graphic} alt='Graphic img'/>
        </div>
        <h1 class="title">Graphics & 3D</h1>
    </div>

    <div class="content">
        <p>
        Our Graphic designers are able to create the visual versions of brands and messages.
        </p>
    </div>
</div>
       </div>



       <div className='my-2'>
          {/* Card 3 */}
      <div class="card">
        <div class="header">
           <div class="img-box">
           <img src={Web} alt='Web img'/>
        </div>
        <h1 class="title">Web Development</h1>
    </div>

    <div class="content">
        <p>
        Every successful company needs a modern and stylish website, by collabrating with my team of developers we're able to deliver the required website 
        </p>
    </div>
</div>
       </div>



       <div className='my-2'>
          {/* Card 4 */}
      <div class="card">
        <div class="header">
           <div class="img-box">
           <img src={App} alt='App img'/>
        </div>
        <h1 class="title">App Development</h1>
    </div>

    <div class="content">
        <p>
        If in case your businesses needs beautiful mobile application for sure Lens Agency can make and Provide reliable and stylish mobile apps 
        </p>
    </div>
</div>
       </div>



       <div className='my-2'>
          {/* Card 5 */}
      <div class="card">
        <div class="header">
           <div class="img-box">
           <img src={Branding} alt='Branding img'/>
        </div>
        <h1 class="title">Branding</h1>
    </div>

    <div class="content">
        <p>
        My team of creative directors is able to turn your product and introduce it to the world through amazing graphic visuals.
        </p>
    </div>
</div>
       </div>


       <div className='my-2'>
          {/* Card 6 */}
      <div class="card">
        <div class="header">
           <div class="img-box">
            <img src={VideoProduction} alt='Video production img'/>
        </div>
        <h1 class="title">Video Production</h1>
    </div>

    <div class="content">
        <p>
        Photography / Videography Providing the creative photography and photo editing for local and international brands and Pre-production to the final cut, producing SM, TVC, Event Coverages for brands 
        </p>
    </div>
</div>
       </div>


    </div>
    </>
  )
}

export default Cards