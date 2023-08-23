import { useState, useEffect, useRef } from 'react';
import logo from '../images/logo.svg';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    toggleMobileMenu();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className='container mx-auto px-6 flex justify-between items-center pt-10 lg:pt-12 mb-12 lg:mb-32'>
      {/* Logo */}
      <a href='#'>
        <img src={logo} alt='logo image' />
      </a>

      {/* Hamburger Menu */}
      <button
        aria-label='Toggle Mobile Menu'
        aria-expanded={isMobileMenuOpen}
        onClick={handleButtonClick}
        className={`hamburger lg:hidden ${isMobileMenuOpen ? 'close' : ''}`}
      >
        <span className='first'></span>
        <span className='second'></span>
        <span className='third'></span>
      </button>

      {/* Mobile Menu */}
      <ul
        ref={mobileMenuRef}
        className={` absolute right-6 top-24  p-12 flex flex-col gap-8 text-center bg-white rounded-lg shadow-md transition-transform duration-menu  lg:hidden ${
          !isMobileMenuOpen
            ? 'opacity-0 -translate-y-6 -z-10'
            : 'opacity-100 translate-y-0 z-10'
        }`}
      >
        <li>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Product
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-darkGrayishBlue'>
            About Us
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Careers
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Community
          </a>
        </li>
      </ul>

      <ul className='hidden lg:flex gap-6'>
        <li>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Product
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-darkGrayishBlue'>
            About Us
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Careers
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Community
          </a>
        </li>
      </ul>

      <button className='hidden lg:block px-8 pt-4 pb-3 bg-brightRed hover:bg-brightRedLight text-white font-bold rounded-full'>
        Get Started
      </button>
    </header>
  );
};

export default Navigation;
