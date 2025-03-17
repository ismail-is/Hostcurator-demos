"use client";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: "1",
		author: "William Jack",
		designation: "Creative Director",
		title: "Tismail",
		description:
			"As a startup, you need to find a good marketing partner who can help you connect to the right people. They advertise that they can help our company to increase your sales by up to 78% -- they exceeded our expectations.",
		img: "https://dev.hostcurator.com/wp-content/themes/Hostcurator/theme_assets/images/ReviewSection.png",
	},
	{
		id: "2",
		author: "William Jack",
		designation: "Creative Director",
		title: "They exceeded our expectations",
		description:
			"As a startup, you need to find a good marketing partner who can help you connect to the right people. They advertise that they can help our company to increase your sales by up to 78% -- they exceeded our expectations.",
		img: "https://dev.hostcurator.com/wp-content/themes/Hostcurator/theme_assets/images/pexels-christina-morillo-1181354.png",
	},
	{
		id: "3",
		author: "William Jack",
		designation: "Creative Director",
		title: "They exceeded our expectations",
		description:
			"As a startup, you need to find a good marketing partner who can help you connect to the right people. They advertise that they can help our company to increase your sales by up to 78% -- they exceeded our expectations.",
            img: "https://dev.hostcurator.com/wp-content/themes/Hostcurator/theme_assets/images/ReviewSection.png",
	},
];

const swiperSettings = {
	slidesPerView: 1,
	pagination: { clickable: true },
	autoplay: { delay: 3000, disableOnInteraction: false },
	modules: [Pagination, Autoplay],
};

function Testimonialss1() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row align-items-center">
					{/* Left Side - Image */}
					<div className="col-md-6 text-center">
						<div className="aximo-testimonial-slider-thumb">
							<img
								src={testimonialsData[activeIndex].img}
								alt="testimonial"
								className="img-fluid"
							/>
						</div>
					</div>

					{/* Right Side - Testimonial Slider */}
					<div className="col-md-6" style={{ backgroundColor: "#025E6B", borderRadius: "29px", padding: "20px" }}>
						<div className="swiper aximo-testimonial-slider">
							<Swiper {...swiperSettings} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
								{testimonialsData.map((testimonial) => (
									<SwiperSlide key={testimonial.id}>
										<TestimonialCard testimonial={testimonial} />
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
