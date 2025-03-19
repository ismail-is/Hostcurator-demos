"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ContactThumb from "../../public/images/contact/contact-thumb.png";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="section aximo-section-padding" style={{backgroundColor:'black'}}>
			<div className="container">
			<div className="aximo-pricing-title col-lg-12" style={{marginTop:'-60px',backgroundColor:'#7947DD',padding:'25px',borderTopLeftRadius:'30px',borderTopRightRadius:'30px'}}>
					<h2 style={{fontSize:'34px',color:'white'}}>
					HIRE A
					<span style={{color:' #1A0641',
    backgroundColor:'#FFDDDD',
    border: '2px solid #000000 ',
    borderRadius:' 269px',
    padding:' 0px 10px 0px 10px',
	textTransform:'uppercase',
	marginLeft:'10px'}} > Hostcurator</span>
						{/* <span className="aximo-title-animation">
							ready packages
							<span className="aximo-title-icon">
								<Image src={StarImg} alt="star" />
							</span>
						</span> */}
					</h2>
				</div>


				<div className="container">
				<div className="row" style={{backgroundColor:'#7947DD',marginTop:'-42px',borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px'}}>
					<div className="col-lg-6 order-lg-2">
					<h4 style={{textAlign:'center',margin:'10px',color:'white'}}>Let’s talk about project</h4>
					<div className="aximo-main-form" style={{border:'none'}}>
    <form onSubmit={handleSubmit(submitForm)}>
        <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ flex: 1 }}>
                <Field label="Name" error={errors.name}>
                    <input
                        {...register("name", { required: "Name is required." })}
                        type="text"
                        name="name"
                        id="name"
						placeholder="|"
                    />
                </Field>
            </div>
            <div style={{ flex: 1 }}>
                <Field label="Email " error={errors.email}>
                    <input
                        {...register("email", { required: "Email is required." })}
                        type="email"
                        name="email"
                        id="email"
							placeholder="|"
                    />
                </Field>
            </div>
        </div>
        <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
            <div style={{ flex: 1 }}>
                <Field label="Phone " error={errors.phone}>
                    <input
                        {...register("phone", { required: "Phone is required." })}
                        type="text"
                        name="phone"
                        id="phone"
							placeholder="|"
                    />
                </Field>
            </div>
            <div style={{ flex: 1 }}>
                <Field label="Select a service">
                    <input type="text" name="subject" id="subject" placeholder="Select" />
                </Field>
            </div>
        </div>
        <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
            <div style={{ flex: 1 }}>
                <Field label="Budget " error={errors.phone}>
                    <input
                        {...register("phone", { required: "Phone is required." })}
                        type="text"
                        name="phone"
                        id="phone"
							placeholder="$"
                    />
                </Field>
            </div>
            <div style={{ flex: 1 }}>
                <Field label="How soon you want to start?" >
                    <input type="text" name="subject" id="subject" placeholder="|" />
                </Field>
            </div>
        </div>
        {/* <div style={{ marginTop: "15px" }}>
            <label>Write your message here...</label>
            <textarea name="textarea" style={{ width: "100%", height: "100px" }}></textarea>
        </div> */}
       <h2 style={{fontSize:'24px'}}>
					 
					<span style={{color:'black	',
    backgroundColor:'#FDB920',
    border: '2px solid #000000 ',
    borderRadius:' 269px',
    padding:' 12px',
	textTransform:'uppercase',
	marginLeft:'10px'}} > SUBMIT</span></h2>
    </form>
</div>

					</div>



					<div className="col-lg-6">
						<h4 style={{textAlign:'center',margin:'10px',color:'white'}}>We love listen to your requirements</h4>
						<div className="aximo-main-form" style={{backgroundColor:'#FFDDDD'}}>
							<div style={{display:'flex'}}><img src='https://dev.hostcurator.com/wp-content/themes/Hostcurator/theme_assets/images/avatar-img.png' style={{border:'3px solid black',borderRadius:'50%',height:'100px',width:'100px'}}/>
							<h6 style={{margin:'10px 0 0 10px'}}>Nisamudeen Plackal</h6>
							</div>
							<div class="d-flex justify-content-between custom-justify-content-between align-items-center custom-display-block-screen" style={{marginTop:"6px"}}>
                                                <div class="stats" style={{border:'2px solid black',borderRadius:'27px'}}>
                                                    <button class="btn contact-form-contact-button" style={{border:'2px black'}}>
                                                        {/* <img src="hhttps://dev.hostcurator.com/wp-content/themes/Hostcurator/theme_assets/images/social-icons/contact-via-whatsapp.svg" class="contact-via-icons me-2"/>     */}
                                                        Call us
                                                    </button>
                                                </div>
                                                <div class="stats" style={{border:'2px solid black',borderRadius:'27px'}}>
                                                    <button class="btn contact-form-contact-button">
                                                        {/* <img src="https://dev.hostcurator.com/wp-content/themes/Hostcurator/theme_assets/images/social-icons/contact-via-skype.svg" class="contact-via-icons me-2"/>     */}
                                                        Skype us
                                                    </button>
                                                </div>
                                                <div class="stats" style={{border:'2px solid black',borderRadius:'27px'}}>
                                                    <button class="btn contact-form-contact-button">
                                                        {/* <img src="	https://dev.hostcurator.com/wp-content/themes/Hostcurator/theme_assets/images/social-icons/contact-via-email.svg" class="contact-via-icons me-2"/>     */}
                                                        Mail us
                                                    </button>
                                                </div>                                   
                                            </div>

										
							{/* <form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field">
									<Field label="Your Name" error={errors.name}>
										<input
											{...register("name", { required: "Name is required." })}
											type="name"
											name="name"
											id="name"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter email address" error={errors.email}>
										<input
											{...register("email", { required: "Email is required." })}
											type="email"
											name="email"
											id="email"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter Phone Number" error={errors.phone}>
										<input
											{...register("phone", { required: "Phone is required." })}
											type="phone"
											name="phone"
											id="phone"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<label>Write your message here...</label>
									<textarea name="textarea"></textarea>
								</div>
								<button id="aximo-main-btn" type="submit">
									Send Message
								</button>
							</form> */}
						</div>
						<div class="row justify-content-center mt-4 custom-hide-show-ul-list">
                            <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-8">                           
                                <div class="container d-flex justify-content-start align-items-center h-100">
                                    <ul class="contact-card-list list-unstyled">
                                        <li style={{color:"white"}}><i class="bi bi-circle-fill"></i><span style={{
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '8px',
  width: '8px',
  backgroundColor: '#FDB920',
  borderRadius: '50%',
  padding: '5px',
  color: 'white',
  fontSize: '7px',
 margin:'0 8px 0 0'
}}>
 
</span>
Phone call assistance
</li>
<li style={{color:"white"}}><i class="bi bi-circle-fill"></i><span style={{
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '8px',
  width: '8px',
  backgroundColor: '#FDB920',
  borderRadius: '50%',
  padding: '5px',
  color: 'white',
  fontSize: '7px',
 margin:'0 8px 0 0'
}}>
 
</span>
Project consultation
</li>     
<li style={{color:"white"}}><i class="bi bi-circle-fill"></i><span style={{
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '8px',
  width: '8px',
  backgroundColor: '#FDB920',
  borderRadius: '50%',
  padding: '5px',
  color: 'white',
  fontSize: '7px',
 margin:'0 8px 0 0'
}}>
 
</span>
Project estimation
</li>      
<li style={{color:"white"}}><i class="bi bi-circle-fill"></i><span style={{
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '8px',
  width: '8px',
  backgroundColor: '#FDB920',
  borderRadius: '50%',
  padding: '5px',
  color: 'white',
  fontSize: '7px',
 margin:'0 8px 0 0'
}}>
 
</span>
Solution demo
</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
				</div>










				{/* <div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="aximo-contact-thumb ">
							<Image src={ContactThumb} alt="Contact Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="aximo-main-form">
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field">
									<Field label="Your Name" error={errors.name}>
										<input
											{...register("name", { required: "Name is required." })}
											type="name"
											name="name"
											id="name"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter email address" error={errors.email}>
										<input
											{...register("email", { required: "Email is required." })}
											type="email"
											name="email"
											id="email"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter Phone Number" error={errors.phone}>
										<input
											{...register("phone", { required: "Phone is required." })}
											type="phone"
											name="phone"
											id="phone"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<label>Write your message here...</label>
									<textarea name="textarea"></textarea>
								</div>
								<button id="aximo-main-btn" type="submit">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default ContactForm;
