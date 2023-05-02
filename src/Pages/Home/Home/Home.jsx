import React, { useEffect, useState } from "react";
import dish from "../../../assets/dish.png";
import { useLoaderData } from "react-router-dom";
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

const Home = () => {
  const chefData = useLoaderData();
  const [feedback, setFeedback] = useState([]);

  console.log(chefData);

  useEffect(() => {
    fetch("http://localhost:5000/feedback")
      .then((res) => res.json())
      .then((data) => setFeedback(data));
  }, []);

  return (
    <>
      {/* --bannar area start-- */}
      <section id="bannar" className="bannar py-14">
        <div className="mycontainer">
          <div className="bannarWrapper flex items-center gap-8">
            <div className="bannarRight w-1/2">
              <img className="block w-full" src={dish} alt="images not found" />
            </div>
            <div className="bannarLeft w-1/2 text-right">
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
            <div className="chefHeading text-center mb-14">
              <h2 className="text-5xl font-bold text-white uppercase">
                Our top chef
              </h2>
              <span className="block w-[150px] h-[5px] bgyell mx-auto my-3"></span>
            </div>
            <div className="chefContent grid grid-cols-3 gap-6">
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
          <div className="chefHeading text-center mb-14">
            <h2 className="text-5xl font-bold text-white uppercase">
              Our GALLERY
            </h2>
            <span className="block w-[150px] h-[5px] bgyell mx-auto my-3"></span>
          </div>
          <div className="gellarywrapper grid grid-cols-3">
            <div className="gellaryImg">
              <img src={gellary1} alt="" />
            </div>
            <div className="gellaryImg">
              <img src={gellary2} alt="" />
            </div>
            <div className="gellaryImg">
              <img src={gellary3} alt="" />
            </div>
            <div className="gellaryImg">
              <img src={gellary4} alt="" />
            </div>
            <div className="gellaryImg">
              <img src={gellary5} alt="" />
            </div>
            <div className="gellaryImg">
              <img src={gellary6} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* --Gellary area end--  */}

      {/* --feedback area start-- */}
      <section id="feedback" className="feedback py-20">
        <div className="mycontainer">
          <div className="chefHeading text-center mb-14">
            <h2 className="text-5xl font-bold text-white uppercase">
              Reviews about us
            </h2>
            <span className="block w-[150px] h-[5px] bgyell mx-auto my-3"></span>
          </div>
          <div className="feedbackSlider">
            <Swiper
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
