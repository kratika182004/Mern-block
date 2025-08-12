import { Footer, FooterCopyright, FooterDivider, FooterIcon } from 'flowbite-react';
import { Link } from 'react-router-dom';
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterCo() {
  
  return (
   <Footer container={true}className='border border-t-8 border-teal-500 text-white'>
    
    <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
            <div className='mt-5'>
            <Link
        to="/"
        className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Kratika's
        </span> Blog
      </Link>

            </div>
            <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
              <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            About
        </h2>
        <div className="flex flex-col">
  <a
    href="https://www.100jsprojects.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-gray-500 hover:underline dark:text-gray-400"
  >
    100 JS Projects
  </a>
</div>
<div className="flex flex-col">
  <a
    href="/about"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-gray-500 hover:underline dark:text-gray-400"
  >
   Kratika blog
  </a>
</div>
</div>
<div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Follow us
        </h2>
        <div className="flex flex-col">
  <a
    href="https://github.com/kratika182004"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-gray-500 hover:underline dark:text-gray-400"
  >
       Github
  </a>
</div>
<div className="flex flex-col">
  <a
    href="#"
    
    className="text-sm text-gray-500 hover:underline dark:text-gray-400"
  >
  Discord
  </a>
</div>
</div>
<div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Legal
        </h2>
        <div className="flex flex-col">
  <a
    href="#"
   
    className="text-sm text-gray-500 hover:underline dark:text-gray-400"
  >
      privacy policy
  </a>
</div>
<div className="flex flex-col">
  <a
    href="#"
    
    className="text-sm text-gray-500 hover:underline dark:text-gray-400"
  >
  Terms & Conditions
  </a>
</div>
</div>

  
            </div>

        </div>
        <FooterDivider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <FooterCopyright 
           href='#'
           by="Kratika Blog"
           year={new Date().getFullYear()}
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
          <FooterIcon href='#' icon={BsFacebook}/>
            <FooterIcon href='#' icon={BsInstagram}/>
            <FooterIcon href='#' icon={BsTwitter}/>
            <FooterIcon href='https://github.com/kratika182004' icon={BsGithub}/>
            <FooterIcon href='#' icon={BsDribbble}/>
          
          </div>
        </div>
    </div>
   </Footer>
  )
}
