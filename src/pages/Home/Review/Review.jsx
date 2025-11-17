// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useEffect, useState } from "react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    
    <section className=" mt-10 ">
      <SectionTitle
        heading={"Our Testimonial"}
        subHeading={"Our Client Saying!"}
      />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col mx-24 my-16 bg-gray-100 p-5 rounded-2xl w-auto">
              <p className="py-3">{review.details}</p>
              <div className="divider"></div>
              <div className="flex justify-between">
                <div className="flex">
                  <figure>
                    <img
                      className="w-20 h-20 mr-5 rounded-2xl "
                      src={review.image}
                      alt="Movie"
                    />
                  </figure>
                  <div>
                    <h2 className="card-title">{review.name}</h2>
                    <p>{review.profession}</p>
                    <Rating style={{ maxWidth: 140 }} value={4} readOnly />
                  </div>
                </div>
                <i class="fa fa-quote-right w-5" aria-hidden="true"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
