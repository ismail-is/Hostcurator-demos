import Image from "next/image";

function TestimonialCard({ testimonial: { author, designation, title, description, img } }) {
	return (
		<div className="aximo-testimonial-slider-column" style={{backgroundColor:'#025E6B',padding:'55px',borderRadius:'29px'}}>
			
			<div className="aximo-testimonial-slider-data" style={{marginBottom:'20px'}}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className="aximo-testimonial-slider-wrap" style={{marginBottom:'20px'}}>
				<div className="aximo-testimonial-slider-thumb">
					{/* <Image src={img} alt={title} sizes="100vw" /> */}
				</div>
				
			</div>
		</div>
	);
}

export default TestimonialCard;
