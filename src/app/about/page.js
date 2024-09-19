"use client"
import Popup from '@/components/Popup'
import { useState } from 'react'
function page() {
    const [showPopup, setShowPopup] = useState(false)

  return (
    <>
    {showPopup && <Popup setShowPopup={setShowPopup}/>}
    <div className="aboutMainBanner">
        <img src="images/aboutUsMainBanner.png" className="homeMainBg img-responsive" width="100" height="776"/>
        <div className="bannerContent">
            <figure>
                <img src="images/crown.png"/>
            </figure>
            <h5>Country's Best Luxury</h5>
            <h1>Wedding</h1>
            <h3>Your Dream Wedding Starts Here !</h3>
        </div>
    </div>
    <div className="lookingForPerfection">
        <div className="container">
            <div className="lookigForPerfectionContentBox">
            <h4>Looking for Perfection?</h4>
            <h1>We Are Here To Help You!</h1>
            <p> we believe every couple deserves a wedding that’s as flawless as their love story. Our expert team specializes in crafting personalized, unforgettable events that reflect your unique vision. From intimate ceremonies to grand celebrations, we handle every detail with precision and care—ensuring your big day is nothing short of perfection.</p>
            <button className="btn btn-primary getCallBack" onClick={()=>{setShowPopup((state) => !state)}}>Get a call Back</button>
            </div>
        </div>
    </div>
    <div  className="eventsNailedBox">
        <div className="container">
            <div className="eventailedContentMainBox">
                <div className="leftBox">
                    <figure>
                        <img src="images/eventsNailedLeft.png" className="img-responsive"/>
                    </figure>
                </div>
                <div className="rightBox">
                    <div className="eventNailedContentBox">
                        <div className="noOfEventNailedox">
                            <strong>594</strong>
                            <div className="n0OfeventNailed">Events Nailed</div>
                        </div>
                        <div  className="weedingDestination">
                            <strong>94</strong>
                            <div  className="destination">Exclusive Destinations</div>
                            
                        </div>
                        
                    </div>
                    <figure>
                        <img src="images/eventsNailedRight.png" className="img-responsive"/>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page