import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Menu } from 'react-feather';

const Links = () => {

  const linkClasses = ({ isActive }) => {
    return `basis-full text-center ${isActive ? 'text-gray-500' : ''} hover:text-gray-500`;
  }
  return <>
    <NavLink className={linkClasses} to="/about">About</NavLink>
    <NavLink className={linkClasses} to="/services">Services</NavLink>
    <NavLink className={linkClasses} to="/rates">Rates</NavLink>
    {/* <a href="contact.html">Contact</a> */}
    {/* <a href="https://luminello.com" target="_blank">Portal</a> */}
  </>;
}

export default function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);

  const showMenu = () => {
    setShowHamburger(!showHamburger);
  };


  return (
    <>
    <header className="flex flex-wrap justify-between items-center w-full mt-11 mb-5">
      <div className="font-bold text-xl md:text-3xl lg:text-5xl"><Link to="/" >KATE MARTIN THERAPY</Link></div>
      <a className="md:hidden" href="#mobile" onClick={showMenu}>
        <Menu />
      </a>
      <div className={`${showHamburger ? 'flex flex-wrap justify-between' : 'hidden'} basis-full mt-3 md:mt-auto md:basis-auto md:block md:space-x-8 md:text-xl lg:text-3xl`}>
        <Links />
      </div>
    </header>
    <div className="font-bold text-l md:text-xl lg:text-2xl mb-3 md:mb-8 lg:mb-12">New Jersey Psychotherapy and Counseling</div>
    </>
  );
}