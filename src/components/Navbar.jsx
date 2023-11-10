import React, {useState} from 'react';
import logopetit from '../assets/logopetit.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logopetit} alt='Logo' style={{width:'80px'}}/>
        </div>

        {/* Menu */}
            <ul className='hidden md:flex'>
                <li>Accueil</li>
                <li>A Propos</li>
                <li>Compétences</li>
                <li>Projets</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars className='text-3xl' /> : <FaTimes className='text-3xl' /> }
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Accueil</li>
            <li className='py-6 text-4xl'>A Propos</li>
            <li className='py-6 text-4xl'>Compétences</li>
            <li className='py-6 text-4xl'>Projets</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#0A66C2] '>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#2C3035] '>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#F80751] '>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#F6631D] '>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        CV <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar