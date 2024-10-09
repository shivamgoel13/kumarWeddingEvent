import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer>
        <div class="container">
            <div class="footerContentBox">
                <div class="footerLinkBox">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>                
                </div>
                <div class="footerLinkBox">
                    <h3>How To Reach Us</h3>
                    <ul>
                        <li>
                            <figure>
                                <img src="/images/email.png"/>
                            </figure>
                            <span>shadispecialbykumar@gmail.com</span>
                        </li>
                        <li>
                            <figure>
                                <img src="/images/phone-call (1).png"/>
                            </figure>
                            <span>+91 7011192555</span>
                        </li>
                    </ul>
                </div>
                <div class="footerLinkBox">
                    <h3>Follow Us :</h3>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/kumar_wedding_events/profilecard/?igsh=amszYnhzaHF5cW5h">
                            <figure>
                                <img src="/images/insta.png"/>
                            </figure>
                            <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/share/p2zWJCQk9np5iaYz/?mibextid=LQQJ4d">
                            <figure>
                                <img src="/images/facebook.png"/>
                            </figure>
                            <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/@shadispecialbykumar?si=vyRZBMqiQc3KrEKv">
                            <figure>
                                <img src="/images/youtube.png"/>
                            </figure>
                            <span>Youtube</span>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  </footer>

  )
}

export default Footer