import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Menu } from 'react-feather';

const Links = () => {

  const linkClasses = ({ isActive }) => {
    return `basis-full md:basis-auto text-center ${isActive ? 'text-gray-500' : ''} hover:text-gray-500`;
  }
  return <>
    <NavLink aria-label="link to about page" className={linkClasses} to="/about">About</NavLink>
    <NavLink aria-label="link to services page" className={linkClasses} to="/services">Services</NavLink>
    <NavLink aria-label="link to parenting page" className={linkClasses} to="/parenting">Parenting</NavLink>
    <NavLink aria-label="link to work with me page" className={linkClasses} to="/work">Work With Me</NavLink>
    <NavLink aria-label="link to options page" className={linkClasses} to="/options">Options</NavLink>
    <NavLink aria-label="link to rates page" className={linkClasses} to="/rates">Rates</NavLink>
    <NavLink aria-label="link to client portal" className={linkClasses} to="https://katemartintherapy.patientsecure.me/" target="_blank">Portal</NavLink>
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
    <header className="flex flex-wrap justify-between items-end w-full mt-3 md:mt-8 mb-3 md:mb-8">
      <div><div className="font-bold text-2xl md:text-4xl lg:text-5xl"><Link to="/" >KATE MARTIN THERAPY</Link></div>
      <div className="font-bold text-md max-w-[300px] min-[400px]:max-w-none md:text-xl lg:text-2xl ">Psychotherapy and Parenting Consultation</div>
    </div>
      <a className="md:hidden" href="#mobile" onClick={showMenu}>
        <Menu />
      </a>
      <div className={`${showHamburger ? 'flex flex-wrap justify-between' : 'hidden'} md:space-x-8 md:block md:text-xl lg:text-2xl xl:text-3xl max-[1440px]:mx-auto max-[1440px]:mt-8`}>
        <Links />
      </div>
    </header>
    </>
  );
}