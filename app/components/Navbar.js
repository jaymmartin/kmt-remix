import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Menu } from 'react-feather';

const Links = () => {

  const linkClasses = ({ isActive }) => {
    return `basis-full md:basis-auto text-center ${isActive ? 'text-gray-500' : ''} hover:text-gray-500`;
  }
  return <>
    <NavLink className={linkClasses} to="/about">About</NavLink>
    <NavLink className={linkClasses} to="/services">Services</NavLink>
    <NavLink className={linkClasses} to="/parenting">Parenting</NavLink>
    <NavLink className={linkClasses} to="/work">Work With Me</NavLink>
    <NavLink className={linkClasses} to="/options">Options</NavLink>
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
      <div><div className="font-bold text-2xl md:text-4xl lg:text-5xl"><Link to="/" >KATE MARTIN THERAPY</Link></div>
      <div className="font-bold text-md max-w-[300px] sm:max-w-none md:text-xl lg:text-2xl mb-3 md:mb-8 lg:mb-12">New Jersey Psychotherapy and Counseling</div>
    </div>
      <a className="md:hidden" href="#mobile" onClick={showMenu}>
        <Menu />
      </a>
      <div className={`${showHamburger ? 'flex flex-wrap justify-between' : 'hidden'} md:space-x-8 md:block md:text-xl lg:text-2xl xl:text-3xl max-[1440px]:m-auto`}>
        <Links />
      </div>
    </header>
    </>
  );
}