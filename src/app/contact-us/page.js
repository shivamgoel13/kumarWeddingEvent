import LeadForm from '@/components/LeadForm'

function page() {
  return (
    <>
    <div className="contactUsMainBannner">
            <img src="images/cotactUsMainBanner.png" className="contactUsMainBg img-responsive" width="100" height="776"/>
            <div className="bannerContent">
                <figure>
                    <img src="images/CROWN.png"/>
                </figure>
                <h5>Kumar Weeding  Events</h5>
                <h1>Contact Us</h1>
                <h3>Your Dream Wedding Starts Here !</h3>
            </div>
        </div>
        <div className="container">
            <div className="adressCardBox">
                
                        <div className="adressCard">
                            <figure>
                                <img src="images/map_pin_destination_location_adress_street.svg"/>
                            </figure>
                            <h3>Address</h3>
                            <p>SHOP NO. 903/5 sector-5 vaishali Near Ramprastha Green society Gaziabaad U. P. -201019</p>
                        </div>
                        <div className="adressCard">
                            <figure>
                                <img src="images/phone-call (1).svg" className="img-responsive"/>
                            </figure>
                            <h3>Phone</h3>
                            <p>+91-7011192555</p>
                        </div>
                        <div className="adressCard">
                            <figure>
                                <img src="images/email.svg" className="img-responsive"/>
                            </figure>
                            <h3>email</h3>
                            <p>shadispecialbykumar@gmail.com</p>
                        </div>
                
            </div>
        </div>
        <div className="mapox">
            <figure>
                <img src="images/kumarOfficeLocation.png" className="img-responsive"/>
            </figure>
        </div>
        </>
  )
}

export default page