import React from 'react'
import Tippy from '@tippyjs/react';
import {Link} from 'react-router-dom'
import '../Assets/DarkMode.css';
import ReactMap from './ReactMap';

import Youtube from '../Assets/Images/Youtube.png'
import Behance from '../Assets/Images/Behance.png'
import Instagram from '../Assets/Images/Instagram.png'

export default function Footer() {
  return (
    <>
        <footer className="grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-1  dark:bg-[#3C8BCA] dark:text-white" id="footer">
             {/* Column 1 */}
			<div className='lg:col-span-2 md:col-span-2'> 
			<Link rel="noopener noreferrer" to="/" className="flex justify-center space-x-3 lg:justify-start">
				<span className="self-center text-2xl font-semibold ml-4 mt-4">Hi Marketing Agency</span>
			</Link>
			<div className='text-justify p-4'>
			Serving all shapes & sized businesses, obsessed with making your brand more valuable and successful commercially!
		    With a talented team of specialists who are on hand to provide strategic support and direction where you need it most, We offer all digital marketing services, website design & development and content production.
			</div>
			</div>
			{/* Column 2 */}
			<div>
			<h3 className="tracking-wide uppercase text-lg font-medium dark:text-gray-50 p-1 mt-4 mx-2">Navigation</h3>
				<ul className="space-y-1 text-base mx-2">
					<li>
						<Link className='hover:bg-white hover:text-black p-1 rounded-sm' rel="noopener noreferrer" to="/">Home</Link>
					</li>
					<li>
						<Link className='hover:bg-white hover:text-black p-1 rounded-sm' rel="noopener noreferrer" to="/about">About</Link>
					</li>
                    <li>
						<Link className='hover:bg-white hover:text-black p-1 rounded-sm'  rel="noopener noreferrer" to="/Service">Service</Link>
					</li>
                    <li>
						<Link className='hover:bg-white hover:text-black p-1 rounded-sm' rel="noopener noreferrer" to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
             {/* Column 3 */}
			<div className='my-2'>
			<div className="uppercase text-lg font-medium dark:text-gray-50 mt-3 mx-2">Follow Us On</div>
				<div className="flex p-1 mx-2">					
						<Tippy content='Behance'>
					<a href="https://www.behance.net/HiMarketing_Agency" target='_blank' rel="noreferrer" className="">
					<img src={Behance} className='w-8 h-8' alt='Behance icon img'/>
					</a>
						</Tippy>

						<Tippy content='Youtube'>
					<a rel="noopener noreferrer" href='https://www.youtube.com/@himarketing.agency' target='_blank' className="">
					<img src={Youtube} className='w-8 h-8 mt-1.5 mx-2' alt='Youtube icon img'/>
					</a>
						</Tippy>

						<Tippy content='Instagram'>
					<a rel="noopener noreferrer" href="https://www.instagram.com/himarketing.agency/"  target="_blank" className="">
					    <img src={Instagram} className='w-8 h-8' alt='Instagram icon img'/>
					</a>
						</Tippy>
				</div>
			</div>
			{/* Column 4 */}
			<div className='h-96 w-84 mr-20 ml-2 mt-4 lg:col-span-2 md:col-span-2'>
			<ReactMap></ReactMap>
			</div>
</footer>
    </>
  )
}