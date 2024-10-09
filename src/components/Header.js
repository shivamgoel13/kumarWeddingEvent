import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <header>           
        <nav>
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
        </nav>
        <div class="headerLogoBox">
            <div class="leftLogo">
            <img src="/images/logo.png"/>
            </div>
        </div>
        <div class="headerSocialBox">
        <ul class="headerSocialBox">
            <li>
                <a href="https://www.facebook.com/share/p2zWJCQk9np5iaYz/?mibextid=LQQJ4d">
                <figure>
                    <img src="/images/facebook.png"/>
                </figure>
                </a>
            </li>
            <li>
                <a href="https://youtube.com/@shadispecialbykumar?si=vyRZBMqiQc3KrEKv">
                <figure>
                    <img src="/images/youtube.png"/>
                </figure>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/kumar_wedding_events/profilecard/?igsh=amszYnhzaHF5cW5h">
                <figure>
                    <img src="/images/insta.png"/>
                </figure>
                </a>
            </li>
        </ul>
        </div>
    </header>
  )
}

export default Header