'use client'
import { useState } from "react"
import Popup from "@/components/Popup"
function services() {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <>
        {showPopup && <Popup setShowPopup={setShowPopup}/>}
    <div className="servicesMainBanner">
            <img src="images/servicesMainBanner.png" className="servicesMainBg img-responsive" width="100" height="776"/>
            <div className="bannerContent">
                <figure>
                    <img src="images/CROWN.png"/>
                </figure>
                <h5>Country's Best Luxury</h5>
                <h1>Wedding</h1>
                <h3>Your Dream Wedding Starts Here !</h3>
            </div>
    </div>
    <div className="servingBest">
        <div className="container">
            <div className="servingBestBox">
                <div className="leftBox">
                    <figure>
                        <img src="images/servingBest.png" className="img-responsive"/>
                    </figure>
                </div>
                <div className="rightBox">
                    <h1>Serving The Best</h1>
                    <p>we specialize in turning your dream wedding into a reality. With unmatched attention to detail, personalized planning, and flawless execution, we ensure your big day is nothing short of perfect. From stunning venue setups and elegant decor to seamless coordination and exquisite catering, our dedicated team works closely with you to create a celebration that reflects your unique love story. Whether it's a grand affair or an intimate ceremony, we deliver exceptional service, creativity, and professionalism—making your wedding day unforgettable for you and your guests.</p>
                    <button className="btn btn-primary  getCallBack" onClick={()=>{setShowPopup((state) => !state)}}>Get a Call Back</button>
                </div>
            </div>
        </div>
    </div>
    <div className="ourServices">
        <div className="container">
            <div className="ourServicesCardox">
                <div className="servicesCard">
                    <figure>
                        <img src="images/video.svg" className="img-responsive"/>
                    </figure>
                    <h2>Photography</h2>
                    <p>we capture life's most beautiful moments with creativity and precision. From weddings and events to portraits and commercial shoots, our expert photographers blend artistry with technical skill to deliver stunning, timeless images. Let us help you preserve memories that last a lifetime.</p>
                </div>
                <div className="servicesCard">
                    <figure>
                        <img src="images/food-delivery.svg" className="img-responsive"/>
                    </figure>
                    <h2>Catering</h2>
                    <p>we provide exceptional catering for all occasions, offering delicious, beautifully presented dishes crafted from the freshest ingredients. From intimate gatherings to large celebrations, our diverse menu and professional service ensure a memorable dining experience for you and your guests.</p>
                </div>
                <div className="servicesCard">
                    <figure>
                        <img src="images/makeup.svg" className="img-responsive"/>
                    </figure>
                    <h2>Bridal Makeup</h2>
                    <p>we specialize in creating flawless, radiant bridal looks that enhance your natural beauty. Our expert makeup artists work closely with you to craft a look that perfectly complements your style and vision, ensuring you feel confident and stunning on your special day.</p>
                </div>
            </div>
            <button className="btn btn-primary knowMore" onClick={()=>{setShowPopup((state) => !state)}}>Know More</button>
                
            </div>
    </div>
    <div className="homeServicesBanner">
        <img src="images/weDoBest.png" className="homeservicesBg img-responsive" width="100" height="776"/>
        <div className="container">
        <div className="bannerContent">
            
            <h1>Want Your Wedding To Be Perfect And Memorable?</h1>
            <p>we offer complete wedding planning and coordination that turns your vision into reality. From stunning decor and flawless catering to professional photography and personalized touches, our dedicated team ensures every detail is handled with care. Whether you're dreaming of an intimate ceremony or a grand celebration, we bring your unique love story to life, creating a day filled with joy, elegance, and lasting memories.</p>
            <button className="btn btn-primary getCallack" onClick={()=>{setShowPopup((state) => !state)}}>Get A Callback</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default services