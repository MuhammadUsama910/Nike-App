import Button from "./Buttons/Button"

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10">

      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up from
        <span className="text-coral-red"> Updates </span> & Newsletter
      </h3>

      <div className="w-full lg:max-w-[45%] flex items-center gap-5 p-2.5 
        max-sm:flex-col sm:border sm:border-slate-gray rounded-full">
        
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input focus:ring-transparent"
        />

        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth/>
        </div>

      </div>

    </section>
  )
}

export default Subscribe