import React from 'react'

function Planner({setShowPopup}) {
  return (
    <div className="granndWeedinngPlanner">
        <img src="images/grandPlannerBBannerImag.png" className=" grandPlannerBg img-responsive"/>
        <div className="grandPlannerContentBox">
            <div className="container">
                <div className="grandPlannerContent">

                <h3>We Plan Wedding's That Are Grand</h3>
                <p> we specialize in crafting unforgettable weddings with elegance and precision. From luxurious venues to personalized details, we ensure every aspect of your big day is perfectly planned. Let us transform your vision into a grand celebration of love!</p>
                <button className="btn btn-primary getCallack" onClick={() => setShowPopup((state) => !state)}>Get a Callback</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Planner