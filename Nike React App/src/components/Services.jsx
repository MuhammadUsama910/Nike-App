import { services } from "../constants"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    
    <section className="max-container flex justify-center flex-wrap gap-9"> {/* max-contaienr is a class added by myself in css file */}
      {
        services.map((service) => (
          <ServiceCard key={service.label} {...service}/>
        ))
      }
    </section>
  )
}

export default Services

// {...service} -> this means we spread all the properties of service object. Which we pass as
// props to <ServiceCard/> component. Like this
// <ServiceCard
//    imgURL={service.imgURL} 
//    label={service.label}
//    subtext={service.subtext}
// />