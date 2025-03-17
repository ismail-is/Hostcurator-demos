import Image from "next/image";

function Test({ testimonial: { author, designation, title, description, img, color, star } }) {
	return (
		<div className="aximo-testimonial-slider-column" style={{ backgroundColor: color, padding: '55px', borderRadius: '29px' }}>
			<div className="aximo-testimonial-slider-data" style={{ marginBottom: '20px' }}>
				<h3 style={{ fontSize: '45px', lineHeight: '60px', color: 'white' }}>{title} <img src={star} alt="Rating Stars" /></h3>
				
				<p>{description}</p>
                
                
                <h2 style={{fontSize:'24px'}}>
					 
					<span style={{color:'black',
    backgroundColor:'#FDB920',
    border: '2px solid #000000 ',
    borderRadius:' 269px',
    padding:' 10px 10px 10px 10px',
	textTransform:'uppercase',
    fontWeight:'bolder'
	}} > HIRE A HOSTCURATOR</span>
						
					</h2>
			</div>
			<div className="aximo-testimonial-slider-wrap" style={{ marginBottom: '20px' }}>
				<div className="aximo-testimonial-slider-thumb">
					{/* Uncomment the line below if you need to display the author's image */}
					{/* <Image src={img} alt={title} sizes="100vw" /> */}
				</div>
			</div>
		</div>
	);
}

export default Test;
