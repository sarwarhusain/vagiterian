import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import img1 from "../../../../images/Banner/engin-akyurt-Y5n8mCpvlZU-unsplash.jpg";
import img2 from "../../../../images/Banner/jonathan-pielmayer-eFFnKMiDMGc-unsplash.jpg";
import img3 from "../../../../images/Banner/randy-fath-5aJVJvJ9rG8-unsplash.jpg";
import img4 from "../../../../images/Banner/sharon-pittaway-KUZnfk-2DSQ-unsplash.jpg";
import "./Style.css";

const Banner = () => {
  const [thumbsSwiper] = useState(null);

  return (
    <div className="bg_color text-white ">
      <div className="bg-black/40 w-full h-full flex items-center">
        {/* Section container */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 gap-10">
          {/* Text Section */}
          <div className="max-w-lg text-center md:text-left space-y-4">
            <p className="text-orange-400 text-sm sm:text-base uppercase tracking-wider">
              100% Organic Vegetable
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 leading-tight">
              Organic Veggies & Fruits Foods
            </h1>

            <p className="text-gray-200 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>

            <div className="join mt- flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="mail@site.com"
                required
                className="input input-bordered join-item w-48 sm:w-64 md:w-72"
              />
              <button className="btn bg-green-600 text-white join-item">Submit</button>
            </div>
          </div>

          {/* Swiper Slider */}
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-10 md:mt-0 mx-auto rounded-lg overflow-hidden"
          >
            {[img1, img2, img3, img4].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  alt={`slide-${i}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* option 2 */}

          {/* <Swiper 
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 w-80 md:w-120 mt-10 mx-auto"
            >
              <SwiperSlide>
                <img className="w-full h-64 sm:h-80 md:h-96 object-cover" src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full h-64 sm:h-80 md:h-96 object-cover" src={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full h-64 sm:h-80 md:h-96 object-cover" src={img3} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full h-64 sm:h-80 md:h-96 object-cover" src={img4} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full h-64 sm:h-80 md:h-96 object-cover" src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full h-64 sm:h-80 md:h-96 object-cover" src={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full h-64 sm:h-80 md:h-96 object-cover" src={img3} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full h-64 sm:h-80 md:h-96 object-cover" src={img4} />
              </SwiperSlide>
            </Swiper> */}
        </section>
      </div>
    </div>
  );
};

export default Banner;
