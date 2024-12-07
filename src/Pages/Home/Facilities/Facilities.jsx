import React from 'react';
import Container from '../../../Components/Container/Container';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import { motion } from "framer-motion";

const Facilities = () => {
    const fadeInAnimation = {
      initial: {
        opacity: 0,
        y: 100,
      },
      animate: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: custom + 0.07, 
          duration: 0.5,
        },
      }),
    };

    return (
      <div
        className="dark:bg-gray-700 bg-[#68a9d3] pb-10 lg:pb-20"
        id="facilities"
      >
        <SectionHeader heading={"Our Academy Facilities"}></SectionHeader>
        <Container>
          <div className="-m-1 lg:flex lg:flex-wrap  md:-m-2">
            <motion.div
              className="flex lg:w-1/2 flex-wrap"
              variants={fadeInAnimation}
              initial="initial"
              custom={0}
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="https://i.postimg.cc/fTzjY2W9/DALL-E-2024-09-28-23-29-43-A-landscape-image-of-a-Sw-imming-Complex-featuring-both-indoor-and-outdo.webp"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 md:top-3/4 lg:top-2/4">
                    <h4 className="text-xl font-semibold">Swimming Complex</h4>
                    <p>Indoor & Outdoor Swimming Pools</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="https://i.postimg.cc/zBTSF4Rn/DALL-E-2024-09-28-23-29-38-A-landscape-image-of-a-Healthy-Food-Canteen-showcasing-a-clean-modern.webp"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 lg:top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Canteen</h4>
                    <p>Healthy Food Canteen</p>
                  </div>
                </div>
              </div>
              <div className="w-full p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="https://i.postimg.cc/rpVkTLqp/DALL-E-2024-09-28-23-29-34-A-landscape-image-of-Indoor-Pitches-with-expertly-maintained-grounds-T.webp"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Indoor Pitches</h4>
                    <p>Expertly Maintained Grounds</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="lg:flex lg:w-1/2 lg:flex-wrap"
              variants={fadeInAnimation}
              initial="initial"
              custom={0.15}
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="w-full p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="https://i.postimg.cc/HsMH42ST/DALL-E-2024-09-28-23-29-32-A-landscape-image-of-Outdoor-Synthetic-Sports-Pitches-featuring-well-m.webp"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Outdoor Pitches</h4>
                    <p>Synthetic Sports Pitches</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="https://i.postimg.cc/L5bwwNS4/DALL-E-2024-09-28-23-56-53-A-landscape-image-of-a-modern-gym-with-professional-trainers-featuring.webp"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 lg:top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Modern Gym</h4>
                    <p>With Professional Trainer</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="https://i.postimg.cc/fbmB8VGt/DALL-E-2024-09-28-23-29-21-A-landscape-image-showcasing-Player-Recovery-for-athletes-The-scene.webp"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 lg:top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Player Recovery</h4>
                    <p>To Become More Productive</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    );
};

export default Facilities;