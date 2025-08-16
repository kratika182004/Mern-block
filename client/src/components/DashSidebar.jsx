import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react'
import React from 'react'
import { useState, useEffect} from 'react';
 import {signoutSuccess,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

import { Link, useLocation } from 'react-router-dom'
import {
    HiArrowSmRight,
    HiUser,
    HiDocumentText,
    HiOutlineUserGroup
   
  } from 'react-icons/hi';
  import { useSelector } from 'react-redux';

export default function DashSidebar() {
  const dispatch = useDispatch();
    const location = useLocation();
    const { currentUser } = useSelector((state) => state.user);
    const [tab, setTab] = useState('');
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab');
      if (tabFromUrl) {
        setTab(tabFromUrl);
      }
    },
    [location.search]);
    const handleSignout = async () => {
      try{
        const res = await fetch('/api/user/signout', {
          method: 'POST',
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signoutSuccess());
        }
      }catch(error){
        console.log(error.message);
     
     
      }
    }
  
  return (
    <Sidebar aria-label="Dashboard Sidebar" className='w-full md:w-56'>
    <SidebarItems>
      <SidebarItemGroup className='flex flex-col gap-1'>
        <Link to='/dashboard?tab=profile'>
        
      <SidebarItem
        
       active={tab === 'profile'} icon={HiUser} label={currentUser.isAdmin ? 'Admin' : 'User'} labelColor='dark'
       as='div'
      >
        profile
      </SidebarItem>
      </Link>
      
      {currentUser.isAdmin && (
            <Link to='/dashboard?tab=posts'>
              <SidebarItem
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
              >
                Posts
              </SidebarItem>
            </Link>
  )}
   {currentUser.isAdmin && (
            
              <Link to='/dashboard?tab=users'>
                <SidebarItem
                  active={tab === 'users'}
                  icon={HiOutlineUserGroup}
                  as='div'
                >
                  Users
                </SidebarItem>
                </Link>
                )}

      <SidebarItem
        
    

          icon={HiArrowSmRight}
          className="cursor-pointer"
          onClick={handleSignout}
          
        >
          Signout
        </SidebarItem>
      </SidebarItemGroup>
    </SidebarItems>
  </Sidebar>
  )
}
