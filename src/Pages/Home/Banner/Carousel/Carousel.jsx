import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import './Carousel.css';

const Carousel = () => {
    return (
      <>
        <div className="container">
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 2300, disableOnInteraction: false }}
            speed={800}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[Autoplay, EffectCoverflow]}
          >
             <SwiperSlide>
              <img
                loading="lazy"
                src="https://generated-assets.prod.myninja.ai/0a6d2cb5-9742-43b7-a53a-50f1e7950e25/7307df0b-dde6-411a-9139-77f56ec33ed1_1.jpeg"
                alt="football"
                className="relative"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://generated-assets.prod.myninja.ai/3b8d96ed-6a89-4113-8f88-118b5d203168/d35d99c1-3844-4e60-bafd-848ac1cec3e8_1.jpeg"
                alt="cricket"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://generated-assets.prod.myninja.ai/fa125285-c9f9-482d-9666-6cfa916aa413/b4ff0e6c-2982-4126-b7a7-72dc15a2a39a_0.jpeg"
                alt="badminton"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://generated-assets.prod.myninja.ai/fa125285-c9f9-482d-9666-6cfa916aa413/b4ff0e6c-2982-4126-b7a7-72dc15a2a39a_2.jpeg"
                alt="badminton"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://ik.imagekit.io/storybird/images/85cb359b-3026-48af-b48a-d34d1064d3f3/0_527916173.webp"
                alt="cricket"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://img.freepik.com/free-photo/3d-rendering-boy-playing-soccer_23-2150898782.jpg?t=st=1726664595~exp=1726668195~hmac=f5f0df037df54540d9e2571b4c58f5f5dedee23d9b8b52537627a5e90784c691&w=740"
                alt="football"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://generated-assets.prod.myninja.ai/1ca8594e-cd02-4476-be89-634752e82bad/477731d2-0701-4ecd-a90e-5f0260e12e87_1.jpeg"
                alt="gym"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://img.freepik.com/premium-photo/poster-girl-with-glasses-blue-life-jacket_1105043-103735.jpg"
                alt="swimming"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://generated-assets.prod.myninja.ai/b4f6d6cb-bac2-43a9-b7d1-8362fe7c50e5/53203996-20e6-4999-85cd-696a01f0ba53_0.png"
                alt="gym"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
};

export default Carousel;