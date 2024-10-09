import React from 'react'

function Banner() {
  return (
    <div class="homeMainBanner">
      <div class="homeVideoBox">
        <video width="100%" height="100%" autoplay controls>
            <source src="/images/homeBanner.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}

export default Banner