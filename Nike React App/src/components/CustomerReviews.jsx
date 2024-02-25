import { reviews } from "../constants";
import ReviewCard from "./Cards/ReviewCard";

import { Carousel } from 'flowbite-react';

const CustomerReviews = () => {
  return (
    <section className="max-container">

      <h3 className="text-4xl text-center font-palanquin font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>

      <p className="info-text mt-4 max-w-lg m-auto text-center"> Hear genuine stories from our satisfied customers about
       their exceptional experience with us. 
      </p>

      <div className="mt-24 h-68 sm:h-68 xl:h-80 2xl:h-96">
        <Carousel slideInterval={2100} pauseOnHover>
          {
            reviews.map((review) => (
              <ReviewCard key={review.customerName}
                imgURL={review.imgURL}
                customerName={review.customerName}
                rating={review.rating}
                feedback={review.feedback}
              />
            ))
          }
        </Carousel>
      </div>

    </section>
  )
}

export default CustomerReviews