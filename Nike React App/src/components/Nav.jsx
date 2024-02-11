import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index';

const Nav = () => {
  return (
    
    <header className='w-full padding-x py-8 absolute z-10'>

      <nav className='flex justify-between items-center max-container'>
        
        <img
          className='w-32 h-7'
          src={headerLogo}
          alt='Logo'
        />

        {/* flex-1 is grow and shrink automatically no need to give width to element*/}

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((item) => (
              <li key={item.label}> {/* li -> is a list item*/}
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray' 
                  > {/* leading-normal is a line height */}

                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>

        <div className='hidden max-lg:block'>
          <img
            className='w-[25px] h-[25px]'
            src={hamburger}
            alt='Hamburger'
          />
        </div>

      </nav>

    </header>
  )
}

export default Nav