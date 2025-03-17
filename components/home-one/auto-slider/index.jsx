"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Star3Img from "../../../public/images/allimg/logo/purple-star.svg";
import Start5Img from "../../../public/images/allimg/logo/star.svg";

const sliderData = [
	{
		id: crypto.randomUUID(),
		title: "INNOVATIVE",
		img: Start5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "COLLABORATIVE",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "TRANSPARENT",
		img: Start5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "INNOVATIVE",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "COLLABORATIVE",
		img: Start5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "TRANSPARENT",
		img: Star3Img,
	},
	
	
];

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView: "auto",
	allowTouchMove: false,
	modules: [Autoplay],
};

function AutoSlider() {
	return (
		<div className="aximo-auto-slider-section">
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-auto-slider-item">
									<h3>{item.title}</h3>
									<Image src={item.img} alt={item.title} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default AutoSlider;
