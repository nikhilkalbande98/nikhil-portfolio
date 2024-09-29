import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
   <nav className="flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        </a>

    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/nikhil-kalbande-995b8924b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">
           <FaLinkedin />
        </a>
        <a href="https://github.com/nikhilkalbande98"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub">
           <FaGithub/>
        </a>
        <a href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram">
           <FaInstagram/>
        </a>
    </div>
   </nav>
  )
}
export default Navbar;
