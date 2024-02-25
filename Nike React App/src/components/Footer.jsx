import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">

        <div className="flex flex-col items-start">
          
          <a href="/">
            <img
              src={footerLogo}
              width={150}
              height={46}
            />
          </a>

          <p className="mt-6 text-white-400 text-base leading-7 font-montserrat sm:max-w-sm"> 
            Get shoes ready for the new term at your nearest nike store. Find your perfect
            Size In Store. Get Rewards
          </p>

          <div className="mt-8 flex items-center gap-5">
            {
              socialMedia.map((icon) => (
                <div 
                  key={icon.alt} 
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                </div>
              ))
            }
          </div>

        </div>


        <div className="flex justify-between flex-wrap flex-1 gap-20 lg:gap-10">
          
          {footerLinks.map((section) => (
            
            <div key={section}>

              <h4 className="text-2xl text-white mb-6 font-montserrat leading-normal font-medium"> 
                {section.title} 
              </h4>
              
              <ul>
                {section.links.map((links) => (
                  
                  <li key={links.name} 
                    className="mt-3 text-base text-white-400 font-montserrat leading-normal
                    hover:text-slate-gray cursor-pointer">
                    
                    {links.name}
                  </li>
                  ))
                }
              </ul>
            
            </div>
            ))
          }  
        </div>

      </div>


      <div className="flex justify-between max-sm:flex-col max-sm:items-center text-white-400 mt-24">

        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p> Copyright. All rights reserved. </p>
        </div>

        <p className="font-montserrat cursor-pointer"> Terms & Conditions </p>
      </div>

    </footer>
  )
}

export default Footer