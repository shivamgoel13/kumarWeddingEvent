import React from 'react'
import Link from 'next/link'
function Gallery() {
  return (
    <div className="gallerySection">
        <div className="container">
            <h2>Our Gallery</h2>
            <figure>
              <Link href="/gallery">
                <img src="images/homeGallery.png" className="img-responsive" alt="Gallery" />
              </Link>
            </figure>
        </div>
    </div>
  )
}

export default Gallery