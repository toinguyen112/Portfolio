import React from 'react'
import './Testimonial.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import profile1 from '../../img/profile1.jpg';
import profile2 from '../../img/profile1.jpg';
import profile3 from '../../img/profile1.jpg';
import profile4 from '../../img/profile1.jpg';
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {

    const clients = [
        {
            img: profile1,
            review: "Hãy cảm ơn những lúc bạn gặp khó khăn, bởi nếu không có khó khăn, bạn sẽ không có cơ hội để hiểu mình và trải nghiệm cuộc sống."
        },
        {
            img: profile2,
            review: "Bạn cần sức mạnh, nghị lực nên cuộc sống đã đặt ra những khó khăn nghịch cảnh để bạn vượt qua và trở nên mạnh mẽ hơn."
        },
        {
            img: profile3,
            review: "Cuộc sống của bạn chỉ thật sự ý nghĩa và trọn vẹn khi bạn biết giữ gìn và nuôi dưỡng ước mơ, biết ghi nhận, biết tin vào những lời hứa."
        },
        {
            img: profile4,
            review: "Cuộc sống có quyền đẩy bạn ngã nhưng ngồi đó than khóc hay đứng dậy và tiếp tục là quyền của bạn."
        }
    ]

    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>

            {/* slider */}
            {/* <AwesomeSlider>
                {clients.map((client, index) => {
                    <>
                        <div className="profilePic" data-src={client.img}>
                        </div>
                        <span>{client.review}</span>

                    </>

                })}
            </AwesomeSlider> */}
            {/* <Swiper>
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={client.img} alt="" />
                        </SwiperSlide>
                    )
                })}
            </Swiper> */}
        </div>
    )
}

export default Testimonial