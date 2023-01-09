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
    <div>
        <footer className="px-4 divide-y dark:bg-[#3C8BCA] dark:text-white" id="footer">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<Link rel="noopener noreferrer" to="/" className="flex justify-center space-x-3 lg:justify-start">
				<span className="self-center text-2xl font-semibold">Hi Marketing Agency</span>
			</Link>
			<div className='text-justify pr-10 py-4'>
			Serving all shapes & sized businesses, obsessed with making your brand more valuable and successful commercially!
		    With a talented team of specialists who are on hand to provide strategic support and direction where you need it most, We offer all digital marketing services, website design & development and content production.
			</div>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-lg font-medium dark:text-gray-50 p-1">Navigation</h3>
				<ul className="space-y-1 text-base">
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
			<div className="space-y-3 text-base">
				<div className="uppercase text-lg font-medium dark:text-gray-50 pl-4">Follow Us On</div>
				<div className="grid grid-cols-3 place-items-start px-4">
					
						<Tippy content='Behance'>
					<a href="https://www.behance.net/HiMarketing_Agency" alt='behance icon' target='_blank' rel="noreferrer" className="">
					<img src={Behance} className='w-8 h-8'/>
					</a>
						</Tippy>

						<Tippy content='Youtube'>
					<a rel="noopener noreferrer" href='https://www.youtube.com/@himarketing.agency' alt='YT icon' target='_blank' className="">
					<img src={Youtube} className='w-8 h-8 mt-1.5'/>
					</a>
						</Tippy>

						<Tippy content='Instagram'>
					<a rel="noopener noreferrer" href="https://www.instagram.com/himarketing.agency/" alt='Instagram icon' target="_blank" className="">
					    <img src={Instagram} className='w-8 h-8'/>
					</a>
						</Tippy>
				</div>
			</div>
			<div className='w-96'>
				<ReactMap></ReactMap>
			</div>
		</div>
	</div>
</footer>
    </div>
  )
}