import Image from "next/image";

function TestimonialCard({ testimonial: { author, designation, title, description, img } }) {
	return (
		<div className="aximo-testimonial-slider-column" style={{backgroundColor:'#025E6B',padding:'10px',borderRadius:'29px'}}>
			
			<div className="aximo-testimonial-slider-data" style={{marginBottom:'20px'}}>
			<h5 style={{color:'white'}}>EXCELLENT rating</h5>
			<h6 style={{color:'white'}}>Based on 42 reviews</h6>
			<div className="flex justify-between items-center w-full" style={{display:'flex',justifyContent:'space-between'}}>
  <img
    src="https://cdn.trustindex.io/assets/platform/Google/logo-dark.svg"
    style={{
      maxWidth: "120px",
      maxHeight: "28px"
    }}
    alt="Google Logo"
  />
  <div className="flex space-x-1">
    <Image
      src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
      alt="Google Star"
      width={17}
      height={17}
      loading="lazy"
    />
    <Image
      src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
      alt="Google Star"
      width={17}
      height={17}
      loading="lazy"
    />
    <Image
      src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
      alt="Google Star"
      width={17}
      height={17}
      loading="lazy"
    />
    <Image
      src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
      alt="Google Star"
      width={17}
      height={17}
      loading="lazy"
    />
    <Image
      src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
      alt="Google Star"
      width={17}
      height={17}
      loading="lazy"
    />
  </div>
</div>

			
				<h3 style={{color:'white'}}>{title}</h3>
				<h6 style={{color:'white',fontFamily:'sans-serif'}}>{description}</h6>
				<div className="aximo-testimonial-slider-wrap"  style={{marginTop:'10px'}}>
				<div className="aximo-testimonial-slider-thumb" style={{display:'flex',gap:"20px"}}> 
					<img	src="https://lh3.googleusercontent.com/a-/ALV-UjWA7PUVWx3qFFpsQDmlp0TGz8nQLhzZZGL6KniIXEhej8OxJhIP=w80-h80-c-rp-mo-ba4-br100" style={{height:'15%',width:"15%"}}/>
					<h6 style={{color:'white'}}>K P <br/><span style={{fontSize:'14px'}}>2024-04-22</span></h6>
					
				</div>
				
			</div>
			</div>
			{/* <div className="aximo-testimonial-slider-wrap" >
				<div className="aximo-testimonial-slider-thumb">
					<img	src="https://lh3.googleusercontent.com/a-/ALV-UjWA7PUVWx3qFFpsQDmlp0TGz8nQLhzZZGL6KniIXEhej8OxJhIP=w80-h80-c-rp-mo-ba4-br100"/>
					<h3>K P</h3>
				</div>
				
			</div> */}
		</div>
	);
}

export default TestimonialCard;
