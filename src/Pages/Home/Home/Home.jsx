import React, { useEffect, useState } from "react";
import dish from "../../../assets/dish.png";
import { useLoaderData, useNavigation } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/autoplay";
import Feedback from "../Feedback/Feedback";
import gellary1 from "../../../assets/gallery-1.jpg";
import gellary2 from "../../../assets/gallery-2.jpg";
import gellary3 from "../../../assets/gallery-3.jpg";
import gellary4 from "../../../assets/gallery-4.jpg";
import gellary5 from "../../../assets/gallery-5.jpg";
import gellary6 from "../../../assets/gallery-6.jpg";
import Heading from "../../../Shared/Heading/Heading";
import Spinner from "../../../Shared/Spiner/Spinner";
import LazyLoad from "react-lazy-load";

const Home = () => {
  const chefData = useLoaderData();
  const [feedback, setFeedback] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://chefs-server-side-babuhp80-gmailcom.vercel.app/feedback")
      .then((res) => res.json())
      .then((data) => setFeedback(data));
  }, []);

  return (
    <>
      {/* --bannar area start-- */}
      <section id="bannar" className="bannar py-14">
        <div className="mycontainer">
          <div className="bannarWrapper md:flex md:items-center gap-8">
            <div className="bannarRight md:w-1/2">
              <img className="block w-full" src={dish} alt="images not found" />
            </div>
            <div className="bannarLeft md:w-1/2 md:text-right mt-5 md:mt-0">
              <h2 className="text-4xl font-bold textyell">
                We do not cook, we create your emotions!
              </h2>
              <p className="text-xl font-medium mt-5 text-white">
                Cooking is a satisfying and essential skill that allows us to
                explore our culinary creativity. It offers a journey of
                discovery, from selecting fresh ingredients to experimenting
                with flavors and techniques. Ultimately, cooking provides a way
                to nourish ourselves and others, connect with our senses, and
                celebrate the richness of food.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --bannar area end-- */}

      {/* --chef area start-- */}
      <section id="chef" className="chef">
        <div className="mycontainer">
          <div className="chefwrapper">
            <Heading>
              OUR <span className="textyell">TOP CHEF</span>
            </Heading>

            {navigation.state === "loading" && <Spinner></Spinner>}

            <div className="chefContent  md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {chefData.map((chef) => (
                <ChefCard key={chef.id} chef={chef}></ChefCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --chef area end-- */}

      {/* --Gellary area start--  */}
      <section id="gellary" className="gellary pt-24">
        <div className="mycontainer">
          <Heading>
            Our <span className="textyell">GALLERY</span>
          </Heading>
          <div className="gellarywrapper md:grid md:grid-cols-3">
            <div className="gellaryImg mb-3">
              <LazyLoad>
                <img src={gellary1} alt="" />
              </LazyLoad>
            </div>
            <div className="gellaryImg mb-3">
              <LazyLoad>
                <img src={gellary2} alt="" />
              </LazyLoad>
            </div>
            <div className="gellaryImg mb-3">
              <LazyLoad>
                <img src={gellary3} alt="" />
              </LazyLoad>
            </div>
            <div className="gellaryImg mb-3">
              <LazyLoad>
                <img src={gellary4} alt="" />
              </LazyLoad>
            </div>
            <div className="gellaryImg mb-3">
              <LazyLoad>
                <img src={gellary5} alt="" />
              </LazyLoad>
            </div>
            <div className="gellaryImg mb-3">
              <LazyLoad>
                <img src={gellary6} alt="" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>
      {/* --Gellary area end--  */}

      {/* --feedback area start-- */}
      <section id="feedback" className="feedback py-20">
        <div className="mycontainer">
          <Heading>
            Reviews <span className="textyell">about us</span>
          </Heading>
          <div className="feedbackSlider">
            <Swiper
              breakpoints={{
                320: {
                  width: 320,
                  slidesPerView: 1,
                },
                577: {
                  width: 500,
                  slidesPerView: 1,
                },
                768: {
                  width: 680,
                  slidesPerView: 2,
                },
                992: {
                  width: 992,
                  slidesPerView: 2,
                },
                1152: {
                  width: 1100,
                  slidesPerView: 2,
                },
              }}
              slidesPerView={2}
              spaceBetween={60}
              autoplay={{ delay: 3000 }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {feedback.map((feedbackitems) => {
                return (
                  <SwiperSlide key={feedbackitems.id}>
                    <Feedback feedbackitems={feedbackitems}></Feedback>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      {/* --feedback area end-- */}
    </>
  );
};

export default Home;
