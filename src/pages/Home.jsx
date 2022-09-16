import React from "react";
import styles from "./Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import category from "../components/Category.json";
import { useSelector } from 'react-redux';
import Mens from './Mens';
const Home = () => {
  // console.log(category);
  const search = useSelector(state=>state.app.search)

  return (
    <>
    {
      search!=="" ? (<Mens/>) : (
<div className={styles.container}>
      <div className={styles.swiperStyle}>
        <Swiper>
          <SwiperSlide>
            <Link to="/men">
              <img
                className={styles.full_width_image}
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/7b1da839-34a4-4e78-b5b5-e18af304e3bd1654099311017-Top-Kurta-Sets_Desk.jpg"
                alt=""
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.full_width_image}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/735e64d7-b478-4c04-9a2d-0c93ae257cfc1654097850282-Kurtas-Sets_Desktop.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.full_width_image}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/553384ff-be1f-4272-81d6-6f9e43fe5fe51654097949853-Dresses_Desk.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.full_width_image}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/16e52ae5-d21b-4f1f-9c4a-8392c3a9592d1654099056613-Workwear_Desk.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.full_width_image}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/9041bdba-b48a-4ed9-8fcb-e1eeb23a74e31654099110315-Sports---Casual-Shoes_Desk.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.full_width_image}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1ae72dae-ffbd-465d-81e2-4751fd06fbbe1654012895525-EORS-Desktop-Banner.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.full_width_image}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/3d0ac179-044c-4060-a28a-89bbf63a112f1654099355774-Premium-Watches_DK--1-.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.full_width_image}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.full_width_image}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/04ba6fb3-569d-480e-aaec-13c3d74525d41654006667684-Innerwear_Desk--1-.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.full_width_image}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/a1a2d3b7-f227-4ee9-9026-4f0754e219851654006760962-Smartwatches_DK.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.full_width_image}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/5b4e9f29-f0ef-41bf-be9d-83f468c823cc1654006815381-Tees---Tops_DK.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.full_width_image}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/215d36d4-54d5-4b82-ba76-d86f5eed17a81654006864315-Staycation-Essentials_DK.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <img
        className={styles.full_width_image}
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/14/43e543ba-f952-4e03-a76d-0a8a465915af1655190445616-DK-xtra-1-7.gif"
        alt=""
      />
      <img
        className={styles.full_width_image}
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/0bf2f455-f754-4b3a-b498-d4125428c7db1654785362720-Must-Haves-In-Your-Wardrobe.jpg"
        alt=""
      />

      <SimpleGrid
        m="auto"
        placeItems={"center"}
        spacing="3"
        columns={{ base: 1, md: 2, lg: 4 }}
      >
        {category.cat1.map((item, index) => {
          return (
            <Box key={index}>
              <Image src={item.image} alt="images" />
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
      )
    }
    
    </>
  );
};

export default Home;
