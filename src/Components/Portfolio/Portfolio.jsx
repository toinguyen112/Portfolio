import React from 'react'
import './Portfolio.css';
import SideBar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";



const Portfolio = () => {
    return (
        <div className="portfolio">
            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            {/* <Swiper>
                <SwiperSlide>
                    <img src={SideBar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper> */}

            <AwesomeSlider>
                <div data-src={SideBar}></div>
                <div data-src={Ecommerce}></div>
                <div data-src={MusicApp}></div>
                <div data-src={HOC}></div>
            </AwesomeSlider>



        </div>
    )
}

export default Portfolio