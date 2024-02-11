import Nav from './components/Nav';
import Hero from './components/Hero';
import CustomerReviews from './components/CustomerReviews';
import PopularProducts from './components/PopularProducts';
import Services from './components/Services';
import SpecialOffer from './components/SpecialOffer';
import Subscribe from './components/Subscribe';
import SuperQuality from './components/SuperQuality';
import Footer from './components/Footer';


const App = () => {

  return (
    <>
      {/* main div */}
      <div className='relative'>
        <Nav/>
        
        <div className="xl:padding-l wide:padding-r padding-b"> {/* padding-l -> sm:pl-16 pl-8 */}
          <Hero/>
        </div>

        <div className="padding">
          <PopularProducts/>
        </div>   
      
        <div className="padding">
          <SuperQuality/>
        </div>

        <div className="padding-x py-10">
          <Services/>
        </div>

        <div className="padding">
          <SpecialOffer/>
        </div>

        <div className="padding bg-pale-blue">
          <CustomerReviews/>
        </div>

        <div className="padding-x sm:py-32 py-16 w-full">
          <Subscribe/>
        </div>

        <div className="padding-x padding-t pb-8 bg-black">
          <Footer/>
        </div>
      
      </div>
    </>
  )
}

export default App
 