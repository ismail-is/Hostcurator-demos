"use client";
import Image from "next/image";
import Brand1Img from "../../../public/images/clients/1.png";
import Brand2Img from "../../../public/images/clients/2.png";
import Brand3Img from "../../../public/images/clients/3.png";
import Brand4Img from "../../../public/images/clients/4.png";


const sliderData = [
	{ id: crypto.randomUUID(), img: Brand1Img },
	{ id: crypto.randomUUID(), img: Brand2Img },
	{ id: crypto.randomUUID(), img: Brand3Img },
	{ id: crypto.randomUUID(), img: Brand4Img },
];

function BrandLogo() {
	return (
		<div className="container-fluid mb-2" style={{ backgroundColor: '#FFDEDD', borderRadius: '40px' }}>
			<div className="row mx-4 px-3 custom-mx-4-screen px-custom-0rem">
				<div className="container-fluid peach-container-box all-corners-rounded py-5">
					<div className="row px-5 align-items-center text-center px-custom-0rem">
						{sliderData.map((item) => (
							<div key={item.id} className="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 py-4">
								<Image src={item.img} alt="brand logo" tyle={{height:'100%'}} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default BrandLogo;