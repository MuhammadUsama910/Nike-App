const Button = ( { label, iconURL, backgroundColor, borderColor, textColor } ) => {
  return (
    
    <button className={`flex justify-center items-center gap-2 px-7 py-4 
      border font-montserrat text-lg 
      ${backgroundColor ? 
        `${backgroundColor} ${borderColor} ${textColor}` : 
          "text-white bg-coral-red border-coral-red"} 
      rounded-full leading-none`}>
      
      {label}
      {iconURL && <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      }
      
    </button>
  )
}

export default Button