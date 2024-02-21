import { shoe8 } from '../assets/images';
import Button from './Button';

const SuperQuality = () => {
  return (
    
    <section 
      id="about-us" 
      className="w-full flex justify-between items-center gap-10 max-container max-lg:flex-col">

      <div className="flex flex-col flex-1">
        
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"> {/*capitalize class make first character of each word capital */}

          We Provide You
          <br/>
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>

        <p className="mt-4 info-text lg:max-w-lg"> 
          Ensure premium comfort and style, our meticulously crafted footwear is designed to elevate
          your experience, providing you with unmatched quality, inovation, and a touch of elegance.
        </p>

        <p className='mt-6 info-text lg:max-w-lg'> 
          Our dedication to detail and excellence ensures your satisfaction. 
        </p>

        <div className='mt-11'>
          <Button label="View details"/>
        </div>
        
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <img
          src={shoe8}
          alt='shoe8'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>

    </section>
  )
}

export default SuperQuality