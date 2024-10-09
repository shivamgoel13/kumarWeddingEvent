'use client'
import Banner from "@/components/Banner";
import Planner from "@/components/Planner";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Popup from "@/components/Popup";
import { useState } from "react";
export default function Home() {
    const [showPopup, setShowPopup] = useState(false)
  return (
    <>
    {showPopup && <Popup setShowPopup={setShowPopup}/>}
        <Banner/>
        <div className="container">
            <div className="exclusiveWeddingPlanner">
                <div className="leftBox">
                    <figure>
                        <img  src="images/exclusivePlannerLeftImg.png"/>
                    </figure>
                </div>
                <div className="rightBox">
                    <h2><small>Your  Exclusive</small><strong>Weeding Planners</strong></h2>
                    <p>
                        Let our exclusive wedding planners bring your dream day to life with personalized, flawless execution. From elegant decor to seamless coordination, we handle every detail, so you can focus on making memories. Trust us to craft a celebration that reflects your unique love story.</p>
                </div>
            </div>
        </div>
        <Planner setShowPopup={setShowPopup}/>
        <div className="container">
            <div className="selectOurWeedingDestination">
                <div className="leftImgWeedingDestination">
                    <figure>
                        <img src="images/weedigDestination.png" className="img-responsive"/>
                    </figure>
                </div>
                <div className="rightWeedingDestination">
                    <h2><small>Your  Exclusive</small><strong>Weeding Planners</strong></h2>
                    <p>Discover the perfect wedding destination tailored to your dreams! From breathtaking beaches to enchanting venues, create unforgettable memories in a stunning location. Start planning the celebration of a lifetime today!</p>
                    <button className="btn btn-primary knowmore" onClick={()=>setShowPopup((state)=>!state)}>Know More</button>
                </div>
            </div>
        </div>
        <Services setShowPopup={setShowPopup}/>
        <Gallery/>
    </>
  )
}
