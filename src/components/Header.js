import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <header>
        <div className="leftLogo">
            <img src="images/logo.PNG" alt="Logo" />
        </div>
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
    </header>
  )
}

export default Header