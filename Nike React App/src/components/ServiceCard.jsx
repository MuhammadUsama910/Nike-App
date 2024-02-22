
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 w-full sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16">

      <div className="w-11 h-11 rounded-full bg-coral-red flex justify-center items-center">
        <img 
          src={imgURL} 
          alt={label} 
          width={24} 
          height={24}
        />
      </div>
      <h2 className="mt-5 text-3xl font-palanquin font-bold leading-normal"> {label} </h2>
      <p className="mt-3 text-lg font-montserrat leading-normal break-words text-slate-gray"> {subtext} </p>
      {/* Learn about break-words class.....! */}
    </div>
  )
}

export default ServiceCard