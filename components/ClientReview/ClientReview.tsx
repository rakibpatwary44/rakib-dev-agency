"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UserReviews } from "./Review";
import ClientReviewCard from "./ClientReviewCard";
export default function ClientReview() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="reviews" className="py-20">
      <div className="w-[80%] mx-auto">
        <div className="">
          <h1 className="text-red-500 dark:text-red-300 font-medium">
            Client Review
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
            Don't Just Take Our Words For It
          </h1>
        </div>
        <div className="mt-14">
          <Carousel
            arrows={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {UserReviews.map((user) => (
              <div key={user.id}>
                <ClientReviewCard user={user} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
