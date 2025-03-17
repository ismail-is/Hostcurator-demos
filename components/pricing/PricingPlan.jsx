"use client";
import Image from "next/image";
import { useState } from "react";
import StarImg from "../../public/images/v1/star2.png";
import FadeInStagger from "../animation/FadeInStagger";
import PricingCard from "./PricingCard";
const pricingPlanData = [
	{
		id: crypto.randomUUID(),
		title: "Server Management and Monitoring Services",
		small:'No limit on the number of servers supported. You get expert unlimited server support within minutes – 24/7.',
		price: [
			{ id: 1, value: 39 },
			{
				id: 2,
				value: 399,
			},
		],
		description: "No limit on the number of servers supported. You get expert unlimited server support within minutes – 24/7.",
		features: [
			"Support for one server",
			"24/7 server monitoring & rescue",
			"15 mins response to alerts",
			"15 mins response to alerts",
			"Initial system tuning & hardening",
			"Regular server updates",
			"Initial system tuning & hardening",
			"Regular server updates",
		],
		highlighted: false,
	},
	{
		id: crypto.randomUUID(),
		title: "Limitless Server Management*",
		price: [
			{ id: 1, value: 89 },
			{
				id: 2,
				value: 599,
			},
		],
		description: "No limit on the number of servers supported. You get expert unlimited server support within minutes – 24/7.",
		features: [
			"Support for one server",
			"24/7 server monitoring & rescue",
			"15 mins response to alerts",
			"15 mins response to alerts",
			"Initial system tuning & hardening",
			"Regular server updates",
			"Initial system tuning & hardening",
			"Regular server updates",
			
		],
		highlighted: true,
	},
	{
		id: crypto.randomUUID(),
		title: "24 * 7 Server Management",
		price: [
			{ id: 1, value: 39 },
			{
				id: 2,
				value: 399,
			},
		],
		description: "No limit on the number of servers supported. You get expert unlimited server support within minutes – 24/7.",
		features: [
			"Support for one server",
			"24/7 server monitoring & rescue",
			"15 mins response to alerts",
			"15 mins response to alerts",
			"Initial system tuning & hardening",
			"Regular server updates",
			"Initial system tuning & hardening",
			"Regular server updates",
		],
		highlighted: false,
	},
];
function PricingPlan() {
	const frequencies = [
		{ id: 1, label: "Annually" },
		{ id: 2, label: "Monthly" },
	];

	const [frequency, setFrequency] = useState(frequencies[0]);

	function handleChange(e) {
		if (e.target.checked) {
			setFrequency(frequencies[1]);
		} else {
			setFrequency(frequencies[0]);
		}
	}

	return (
		<div  className="section aximo-section-padding3" style={{backgroundColor:'black'}}>

	
		<div className="section aximo-section-padding4" style={{backgroundColor:'#FFDEDD',margin:'0 40px 10px 40px',borderRadius:'20px',paddingBottom:'20px'}}>
			<div className="container">
				<div className="aximo-pricing-title" style={{marginTop:'-60px'}}>
					<h2 style={{fontSize:'34px'}}>
					 PRICE
					<span style={{color:' #FFFFFF',
    backgroundColor:'#7947DD',
    border: '2px solid #000000 ',
    borderRadius:' 269px',
    padding:' 0px 10px 0px 10px',
	textTransform:'uppercase',
	marginLeft:'10px'}} > PLANS</span>
						{/* <span className="aximo-title-animation">
							ready packages
							<span className="aximo-title-icon">
								<Image src={StarImg} alt="star" />
							</span>
						</span> */}
					</h2>
				</div>
				{/* <div className="pricing-btn">
					<label>Billed monthly</label>
					<div className="toggle-btn">
						<input
							className="form-check-input btn-toggle price-deck-trigger"
							type="checkbox"
							onChange={handleChange}
						/>
					</div>
					<label>Billed annually</label>
				</div> */}
				<div className="row" id="table-price-value" >
					{pricingPlanData.map((plan, index) => (
						<FadeInStagger className="col-xl-4 col-md-6" key={plan.id} index={index}>
							<PricingCard plan={plan} frequency={frequency} />
							<PricingCard plan={plan} frequency={frequency} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
		</div>
	);
}
export default PricingPlan;
