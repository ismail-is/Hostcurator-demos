"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialImg from "../../../public/images/v5/testimonial1.png";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		author: "William Jack",
		designation: "Creative Director",
		title: "They exceeded our expectations",
		description:
			"As a startup, you need to find a good marketing partner who can help you connect to the right people. They advertise that they can help our company to increase your sales by up to 78% -- they exceeded our expectations.",
		img: TestimonialImg,
	},
	{
		id: crypto.randomUUID(),
		author: "William Jack",
		designation: "Creative Director",
		title: "They exceeded our expectations",
		description:
			"As a startup, you need to find a good marketing partner who can help you connect to the right people. They advertise that they can help our company to increase your sales by up to 78% -- they exceeded our expectations.",
		img: TestimonialImg,
	},
	{
		id: crypto.randomUUID(),
		author: "William Jack",
		designation: "Creative Director",
		title: "They exceeded our expectations",
		description:
			"As a startup, you need to find a good marketing partner who can help you connect to the right people. They advertise that they can help our company to increase your sales by up to 78% -- they exceeded our expectations.",
		img: TestimonialImg,
	},
];

const swiperSettings = {
	slidesPerView: 1,
	pagination: {
		clickable: true,
	},
	modules: [Pagination],
};

function Testimonialss() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row align-items-center">
					{/* Left Side - Image */}
					

					{/* Right Side - Testimonial Slider */}
					<div className="col-md-6" style={{backgroundColor:'#025E6B',borderRadius:'29px',padding:'20px'}}>
						<div className="swiper aximo-testimonial-slider"  >
							<Swiper {...swiperSettings} >
								{testimonialsData.map((testimonial) => (
									<SwiperSlide key={testimonial.id} >
										<TestimonialCard testimonial={testimonial} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
					<div className="col-md-6 text-center">
						<div className="aximo-testimonial-slider-thumb">
							<img
								src="https://dev.hostcurator.com/wp-content/themes/Hostcurator/theme_assets/images/ReviewSection.png"
								alt="img"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonialss;
