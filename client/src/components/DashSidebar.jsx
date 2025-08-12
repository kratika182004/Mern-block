import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react'
import React from 'react'
import { useState, useEffect} from 'react';

import { Link, useLocation } from 'react-router-dom'
import {
    HiArrowSmRight,
    HiUser,
   
  } from 'react-icons/hi';

export default function DashSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab');
      if (tabFromUrl) {
        setTab(tabFromUrl);
      }
    },
    [location.search]);
  return (
    <Sidebar aria-label="Dashboard Sidebar" className='w-full md:w-56'>
    <SidebarItems>
      <SidebarItemGroup>
        <Link to='/dashboard?tab=profile'>
        
      <SidebarItem
        
       active={tab === 'profile'} icon={HiUser} label={'User'} labelColor='dark'
      >
        profile
      </SidebarItem>
      </Link>

      <SidebarItem
        
    

          icon={HiArrowSmRight}
          className="cursor-pointer"
          
        >
          Signout
        </SidebarItem>
      </SidebarItemGroup>
    </SidebarItems>
  </Sidebar>
  )
}
