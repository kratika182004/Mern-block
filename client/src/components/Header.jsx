import React from 'react';
import { Navbar, Button, Dropdown, Avatar, DropdownHeader, DropdownItem, DropdownDivider } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';

import { useEffect, useState } from 'react';

export default function Header() {
  const dispatch = useDispatch();
   const location = useLocation();
     const navigate = useNavigate();
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
   const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);


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
   const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="border-b-2">
      {/* Brand */}
      <Link
        to="/"
        className="self-center text-sm sm:text-xl font-semibol text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Kratika's
        </span> Blog
      </Link>

      {/* Search Input (desktop) */}
      <form className="hidden lg:block relative" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg pl-3 pr-10 py-2"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </form>

    
     

      {/* Navigation Links */}
      <div className="flex gap-4 ml-6">
        <Link to="/" className={path === '/' ? 'text-purple-600 font-semibold' : ''}>
          Home
        </Link>
        <Link to="/about" className={path === '/about' ? 'text-purple-600 font-semibold' : ''}>
          About
        </Link>
        <Link to="/projects" className={path === '/projects' ? 'text-purple-600 font-semibold' : ''}>
          Projects
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Button className="w-12 h-10 hidden sm:inline" color="white" pill>
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
          arrowIcon={false}
            inline
            label={
              <Avatar
              alt='user' img={currentUser.profilePicture} rounded/>
              } >
                <DropdownHeader>
                <samp className='block text-sm'>
              @{currentUser.username}
              </samp>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
                </DropdownHeader>
             <Link  to={'/dashboard?tab=profile'}>
              <DropdownItem>
              Profile
              </DropdownItem>

             </Link>
             <DropdownDivider/>
             <DropdownItem onClick={handleSignout}>
              sign out
              </DropdownItem>
              
          </Dropdown>
         

        ):
      (
        <Link to="/sign-in">
          <Button  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-200" >Sign in</Button>
        </Link>
       
      )
    }
  
       </div>
    
    </Navbar>
  );
}
