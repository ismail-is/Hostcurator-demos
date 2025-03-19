import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import Teams from "@/components/home-one/teams";
import Testimonial from "@/components/home-one/testimonial";
import WhyChooseUs from "@/components/home-one/why-choose-us";
import BrandLogo from "@/components/home-two/brand-logo";
import PricingPlan from "@/components/pricing/PricingPlan";
import Blogs from "@/components/home-six/blogs";
import Testimonials from "@/components/home-five/testimonials";
// Teams images
import Team1Img from "@/public/images/team/team1.png";
import Team2Img from "@/public/images/team/team2.png";
import Team3Img from "@/public/images/team/team3.png";
import Team4Img from "@/public/images/team/team4.png";
import TestimonialsCard from "@/components/home-four/testimonials/TestimonialsCard";
import Testimonialss from "@/components/home-five/testimonials";
import Testimonialss1 from "@/components/home-five/testimonials/index1";
import OurParthner from "@/components/home-one/ourParthner";
import ContactForm from "@/components/contact/ContactForm";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description:
			"Ensure smooth hosting performance with expert support. From setup to troubleshooting, we’ve got you covered",
		icon: "icon-design-tools",
		color:'#FFDDDD',
	},
	{
		id: crypto.randomUUID(),
		title: "Server Management",
		description:
			"Optimize server performance and reliability with comprehensive management solutions.",
		icon: "icon-branding",
		color:'#E7DEF9',
	},
	{
		id: crypto.randomUUID(),
		title: "DevOps Solutions",
		description:
			"Streamline development and operations workflows for faster software delivery.",
		icon: "icon-web",
		color:'#FFDDDD',
	},
	{
		id: crypto.randomUUID(),
		title: "App Development",
		description:
			"Transform ideas into powerful web applications with custom development services.",
		icon: "icon-design-thinking",
		color:'#E7DEF9',
	},
	{
		id: crypto.randomUUID(),
		title: "CMS Development",
		description:
			"Empower your website with a flexible and user-friendly content management system.",
		icon: "icon-design-thinking",
		color:'#FFDDDD',
	},
	{
		id: crypto.randomUUID(),
		title: "SEO Services",
		description:
			"Enhance online visibility and drive organic traffic with comprehensive SEO services.",
		icon: "icon-design-thinking",
		color:'#E7DEF9',
	},
	{
		id: crypto.randomUUID(),
		title: "Dedicated support",
		description:
			"Dedicated Support ensures expert guidance and tailored solutions to meet your needs effectively.",
		icon: "icon-design-thinking",
		color:'#FFDDDD',
	},
	{
		id: crypto.randomUUID(),
		title: "Web Hosting Support",
		description:
			"Web hosting support refers to the services and assistance provided by a web hosting provider to ensure customers' websites run smoothly and remain accessible to users.",
		icon: "icon-design-thinking",
		color:'#E7DEF9',
	},
];
const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Andrew Mark",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];
export default function HomeOne() {
	return (
		<>
			{/* <Hero /> */}
			{/* <Blogs /> */}
{/* <Testimonialss1/> */}
			{/* <Projects /> */}
			<Services services={servicesData} />
			<AutoSlider />
			<PricingPlan />
			<ContactForm />
			<OurParthner/>
			<BrandLogo />
			<Testimonialss/>
			{/* <div style={{backgroundColor:'black',margin:"0,20px,0,30px"}}>
			<img src="https://dev.hostcurator.com/wp-content/themes/Hostcurator/theme_assets/images/BottomLogo.png"/>
			</div> */}
			<TestimonialsCard/>
			{/* <About />
			<Projects />
			<WhyChooseUs />
			<Testimonial /> */}
			{/* <AutoSlider /> */}
			{/* <Teams teams={teamsData} /> */}
		</>
	);
}
