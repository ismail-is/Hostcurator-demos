import Image from "next/image";
import Link from "next/link";
import ArrowRightImg from "../../../public/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon,color } }) {
	return (
		<div className="aximo-iconbox-wrap">
			{/* <div className="aximo-iconbox-icon">
				<i className={`${icon}`}></i>
			</div> */}
			<div className="aximo-iconbox-data">
				<h3 style={{marginBottom:'45px',fontSize:'20px'}}>{title}</h3>
				<div style={{ 
    position: 'absolute', 
    borderRadius: '56%', 
    width: '90px', 
    height: '90px', 
    backgroundColor: color, 
    zIndex: '-1' ,
	marginTop:'-45px'
	
}}></div> 
				<p style={{fontSize:'16px',	fontFamily: 'var(--font-syne)',fontWeight:300}}>{description}</p>
				{/* <Link href="/single-service" className="aximo-icon">
					<Image src={ArrowRightImg} alt="arrow right" />
				</Link> */}
			</div>
		</div>
	);
}

export default ServiceCard;
