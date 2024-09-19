function Services({setShowPopup}) {  
  return (
    <>
    <div className="homeServicesBanner">
      <img src="images/homeServicesBanner.png" className="homeservicesBg img-responsive" width="100" height="776"/>
      <div className="bannerContent">
          <figure>
              <img src="images/CROWN.png"/>
          </figure>
          <h5>Country's Best Luxury</h5>
          <h1>Services</h1>
          <h3>Looking For A Wedding Planner?</h3>
          <button className="btn btn-primary getCallack" onClick={()=>{setShowPopup((state) => !state)}}>Get A Call Back</button>
      </div>
  </div>
    </>
  )
}

export default Services