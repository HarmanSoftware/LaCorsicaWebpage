import React from 'react'
import {Link} from 'react-router-dom'
import { AnimatedPages } from '../Components/AnimatedPages'
import RightArrow from '../Assets/Images/RightArrow.png'
import NotFound from '../Assets/Images/eyes.gif'
import '../Assets/BtnStyle.css'

export default function PageNotFound() {
  return (
	<AnimatedPages>

	<div>
    <section className="flex bg-white items-center dark:text-black py-4 " id='not-found-bg'>
	<div className="container flex flex-col items-center justify-center mx-auto text-center sm:max-w-md">
		<img src={NotFound} className='w-80 h-80 mt-10 bg-[#3c8bca] rounded-full' id="not-found-circle" alt="Page not found" />
		<div className="text-5xl font-medium py-2">Error 404</div>
		<div className="text-3xl py-3">Ooops, The page you looking for can't be found!</div>
		<Link to="/">
		<button type="submit" id="cssbuttons-io"><span> BACK HOME <img src={RightArrow} alt='RightArrow img' className='w-10 h-8 mx-2'/> </span></button>
		</Link>
	</div>
</section>
	</div>
	</AnimatedPages>
  )
}
