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
       <div className=''>
          {/* Card 1 */}
      <div id="card1">
        <div id="header1">
           <div id="img-box1">
            <img src={SM} alt='SM img'/>
        </div>
        <h1 id="title1">SM Management</h1>
    </div>

    <div id="content1">
        <p>
        Enssuring the up to date of social media page, making sure that the page is doing well and developing a content sharing calendar. 
        </p>
    </div> 
</div>
       </div>

       <div idName='my-2'>
          {/* Card 2 */}
      <div id="card2">
        <div id="header2">
           <div id="img-box2">
           <img src={Graphic} alt='Graphic img'/>
        </div>
        <h1 id="title2">Graphics & 3D</h1>
    </div>

    <div id="content2" >
        <p>
        Our Graphic designers are able to create the visual versions of brands and messages.
        </p>
    </div>
</div>
       </div>



       <div idName='my-2'>
          {/* Card 3 */}
      <div id="card3">
        <div id="header3">
           <div id="img-box3">
           <img src={Web} alt='Web img'/>
        </div>
        <h1 id="title3">Web Development</h1>
    </div>

    <div id="content3">
        <p>
        Every successful company needs a modern and stylish website, by collabrating with my team of developers we're able to deliver the required website 
        </p>
    </div>
</div>
       </div>



       <div idName='my-2'>
          {/* Card 4 */}
      <div id="card4">
        <div id="header4">
           <div id="img-box4">
           <img src={App} alt='App img'/>
        </div>
        <h1 id="title4">App Development</h1>
    </div>

    <div id="content4">
        <p>
        If in case your businesses needs beautiful mobile application for sure Lens Agency can make and Provide reliable and stylish mobile apps 
        </p>
    </div>
</div>
       </div>



       <div idName='my-2'>
          {/* Card 5 */}
      <div id="card5">
        <div id="header5">
           <div id="img-box5">
           <img src={Branding} alt='Branding img'/>
        </div>
        <h1 id="title5">Branding</h1>
    </div>

    <div id="content5">
        <p>
        My team of creative directors is able to turn your product and introduce it to the world through amazing graphic visuals.
        </p>
    </div>
</div>
       </div>


       <div idName='my-2'>
          {/* Card 6 */}
      <div id="card6">
        <div id="header6">
           <div id="img-box6">
            <img src={VideoProduction} alt='Video production img'/>
        </div>
        <h1 id="title6">Video Production</h1>
    </div>

    <div id="content6">
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