import React from 'react' 
import {useLocation,Link } from "react-router-dom";
import { Disclosure, Menu } from '@headlessui/react';
import {MenuIcon, XIcon } from '@heroicons/react/outline';
import DarkModeToggle from "react-dark-mode-toggle";
import '../Assets/DarkMode.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

import LensAgency from "../Assets/Images/LensLogo.png";

export default function NavBar(props) {
  
  const location = useLocation(); 

    const navigation = [
        { name: 'Home', href: '/', current: true},
        { name: 'About', href: '/about', current: false },
        { name: 'Project', href: '/projects', current: false },
        { name: 'Contact', href: '/contact', current: false },             
      ]    
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

  return (
    <>
    <Disclosure as="nav" className="bg-purple sticky top-0 z-50" id='nav-bg'>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black bg-white text-black hover:bg-lightmauve">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className='px-2'><img src={LensAgency} className="w-10 h-10 mx-2" alt="lens agency icon" /></Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4" id='desktop-nav-link'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        as={Link}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
                            ? 'bg-[#146994] text-white'
                            : 'hover:bg-[#146994] hover:text-white',
                          'px-1 py-2 rounded-sm text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined} 
                      >                       
                        {item.name}
                      </Link>
                    ))}                    
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div> 
                    <Tippy content='Change Mode'>
                    <span className="flex">
                    <DarkModeToggle size={80} onChange={props.toglleprops} checked={props.themeprops === "dark"} />
                    </span>
                    </Tippy>  
                  </div>                  
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-center" id='mob-nav-link'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? 'bg-lightmauve'
                      : 'text-white hover:bg-white hover:text-black',
                    'block px-1 py-2 rounded-sm text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  )
}