"use client";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TestimonialCard from "./TestimonialCard";
import Test from "./Test";

const testimonialsData = [
	{
		id: "1",
		author: "William Jack",
		designation: "Creative Director",
		title: "HIRE THE HOSTCURATOR FOR EXPERT SUPPORT! ",
		description:
			"Experience seamless server management and expert support with Hostcurator. Hire our dedicated team today!",
		img: "./images/allimg/bannner1.png",
        color:'#7947DD',
        star:'./images/allimg/logo/stars.png',
        star:'./images/allimg/logo/stars.png'
	

	},
	{
		id: "2",
		author: "William Jack",
		designation: "Creative Director",
		title: "STREAMLINE YOUR SERVER MANAGEMENT",
		description:
			"Get peace of mind with Hostcurator's efficient server management services. Focus on your business while we handle the technicalities.",
		img: "./images/allimg/bannner2.png",
        color:'#F89E97',
         star:'./images/allimg/logo/purple-star.svg'
	},
	{
		id: "3",
		author: "William Jack",
		designation: "Creative Director",
		title: "HIRE THE HOSTCURATOR FOR EXPERT SUPPORT! ",
		description:
			"Experience seamless server management and expert support with Hostcurator. Hire our dedicated team today!",
            img: "https://dev.hostcurator.com/wp-content/themes/Hostcurator/theme_assets/images/ReviewSection.png",
            color:'#FD9620',
               star:'./images/allimg/logo/purple-star.svg'  
	},
];

const swiperSettings = {
	slidesPerView: 1,
	pagination: { clickable: true },
	autoplay: { delay: 3000, disableOnInteraction: false },
	modules: [ Autoplay],
	// modules: [Pagination, Autoplay],
};

function Testimonialss1() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="section aximo-section-padding2" style={{backgroundColor:'black'}}>
			<div className="container">
				<div className="row align-items-center">
					{/* Left Side - Image */}
					<div className="col-md-6 text-center" style={{height:'100%'}}>
						<div className="aximo-testimonial-slider-thumb">
							<img
								src={testimonialsData[activeIndex].img}
								alt="testimonial"
								className="img-fluid"
                              
							/>
						</div>
					</div>

					{/* Right Side - Testimonial Slider */}
					<div className="col-md-6" style={{ backgroundColor: 'color', borderRadius: "29px" }}>
						<div className="swiper aximo-testimonial-slider" style={{borderRadius: "29px"}}>
							<Swiper {...swiperSettings} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
								{testimonialsData.map((testimonial) => (
									<SwiperSlide key={testimonial.id}>
										<Test testimonial={testimonial} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonialss1;
