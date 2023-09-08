import logo from '../images/logo_white.svg';
import githubIcon from '../images/github-icon.svg';
import { links_1, links_2 } from '../constants';
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className='bg-veryDarkBlue pt-14 pb-6 lg:py-14'>
      <div className='w-full max-w-xl lg:max-w-[90rem] mx-auto px-6'>
        <div className='grid gap-12 grid-rows-[repeat(3,auto)] grid-cols-2 lg:grid-rows-1 lg:grid-cols-[repeat(4,auto)]'>
          <div className='row-[1/2] col-[1/3] lg:col-[4/5] flex flex-col gap-4'>
            <form
              action=''
              method='post'
              className=' flex gap-4 items-start'
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type='text'
                name='email'
                placeholder='Updates in your inbox...'
                className=' flex-grow px-3 py-2 sm:px-6 sm:py-4 text-sm sm:text-base rounded-full focus:outline-none'
              />
              <button
                type='submit'
                className='px-3 py-2 sm:px-6 sm:py-4 rounded-full bg-brightRed hover:bg-brightRedLight text-white font-bold'
              >
                Go
              </button>
            </form>
            <p className='hidden text-darkGrayishBlue lg:block'>
              Copyright &copy; 2023, All Rights Reserved
            </p>
          </div>
          {/* first list */}
          <ul className='row[2/3] col[1/2] lg:row-[1/2] lg:col-[2/3] justify-self-center   flex flex-col gap-y-4'>
            {links_1.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className='text-darkGrayishBlue hover:text-white'
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          {/* second list */}
          <ul className='row[2/3] col[2/3] lg:row-[1/2] lg:col-[3/4] justify-self-center flex flex-col gap-y-4'>
            {links_2.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className='text-darkGrayishBlue hover:text-white'
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          {/* logo and social */}
          <div className='row-[3/4] col-[1/3] lg:row-[1/2] lg:col-[1/2] flex flex-col   items-center justify-end lg:flex-col-reverse  gap-y-12'>
            {/* social media icons */}
            <ul className='flex gap-x-4 sm:gap-x-8 lg:gap-x-4'>
              {/* facebook */}
              <li>
                <a href='#'>
                  <FaFacebook className='text-4xl lg:text-2xl text-white hover:text-brightRed' />
                </a>
              </li>
              {/* youtube */}
              <li>
                <a href='#'>
                  <FaYoutube className='text-4xl lg:text-2xl text-white hover:text-brightRed' />
                </a>
              </li>
              {/* twitter */}
              <li>
                <a href='#'>
                  <FaTwitter className='text-4xl lg:text-2xl text-white hover:text-brightRed' />
                </a>
              </li>
              {/* pinterest */}
              <li>
                <a href='#'>
                  <FaPinterest className='text-4xl lg:text-2xl text-white hover:text-brightRed' />
                </a>
              </li>
              {/* instagram */}
              <li>
                <a href='#'>
                  <FaInstagram className='text-4xl lg:text-2xl text-white hover:text-brightRed' />
                </a>
              </li>
            </ul>
            {/* logo */}
            <a href='#'>
              <img src={logo} alt='logo image' />
            </a>
            <div className='text-darkGrayishBlue lg:hidden'>
              Copyright &copy; 2023, All Rights Reserved
            </div>
          </div>
        </div>
        <hr className='border-t-2 border-gray-500 mt-8 mb-4' />
        <p className='text-center'>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'
            className='text-darkGrayishBlue hover:text-white flex flex-row items-center justify-center'
          >
            <img src={githubIcon} alt='GitHub Icon' className='w-5 h-5 mr-2' />
            Check out the repository on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
