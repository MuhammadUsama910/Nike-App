import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { shoes, statistics } from "../constants/index"
import Button from "./Button"
import ShoeCard from "./ShoeCard"

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (

    // Main Section
    <section 
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 p-2 max-container"
    >

      {/* Div 1 */}
      <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start
        max-xl:padding-x pt-28">
        
        <p className="text-xl font-montserrat text-coral-red"> Our Summer Collections </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold 
          max-sm:text-[72px] max-sm:leading[82px]">

          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> 
            The New Arrival 
          </span>
          <br/>
          <span className="mt-3 inline-block text-coral-red"> Nike </span> Shoes
        </h1>

        <p className="font-montserrat mt-6 mb-14 text-lg text-slate-gray 
          leading-8 sm:max-w-sm"> 
          Discover Stylish Nike arrivals, quality comfort, and innovation for your active life
        </p>

        <Button label="Shop now" iconURL={arrowRight}/>
        
        <div className="w-full flex justify-start items-start mt-20 flex-wrap gap-16">
          {/* key={index} is not a good approach we have a label which is unique so we give label to key */}
          {
            statistics.map((stat) => (      
              <div key={stat.label}>
                <p className="font-palanquin text-4xl font-bold"> {stat.value} </p>
                <p className="font-montserrat text-slate-gray leading-7"> {stat.label} </p>
              </div> 
            ))
          }
        </div>

      </div> {/* Div 1 Ends */}

      
      {/* Div 2 */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40
            bg-primary bg-hero bg-cover bg-center">
        
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {
            shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard 
                  imgURL={shoe}  
                  bigShoeImage={bigShoeImg}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                />
              </div>
            ))
          }
        </div>

      </div> {/* Div 2 Ends */}

    </section>
  )
}

export default Hero