import React from 'react'

function Banner() {
  return (
    <div className="homeMainBanner">
      <img src="images/homeMainBanner.png" className="homeMainBg img-responsive" width="100" height="776"/>
      <div className="bannerContent">
          <figure>
              <img src="images/crown.png"/>
          </figure>
          <h5>Country's Best Luxury</h5>
          <h1>Wedding</h1>
          <h3>Planners & Event Organizers!</h3>
      </div>
    </div>
  )
}

export default Banner