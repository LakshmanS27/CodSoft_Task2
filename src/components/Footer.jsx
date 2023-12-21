import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='bulb'>
            <div className='pic'>
                <img src="phone.png" alt="" />
                <h1>Contact US</h1>
            </div>
            <div className='footer-text'>
                <p>Phone:+91 2345-6789</p>
                <p>Email: contact@lensblissphotography.com</p>
                <p href="/">Join us and make your momemts turn into colorful memories</p>
            </div>
        </div>
        <div className='newsletter'>
            <div className='news-left'>
                <h4>Subscribe</h4>
                <h1>Subscribe To Get Latest <br />Update From Us</h1>
                <span className='curve'><img src="curve.png" alt="" /></span>
            </div>
            <div className='news-right'>
                <p>To get regular updates, offers and informations register with us using your mail id </p>
                <form action="">
                    <input type="email" name='email' />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='footer-menu'>
            <h1>LBP</h1>
            <ul className='footer-inner-nav'>
            <li><a href="#services">Services</a></li>
                    <li><a href="#packages">Packages</a></li>
                    <li><a href="#work">Our Work</a></li>
                    <li><a href="#socials">Socials</a></li>
            </ul>
        </div>
        <hr />
        <div>
            <p className='text-center'>&#169; Copyright 2023-2030    | All Right Reserved |</p>
        </div>
    </div>
  )
}

export default Footer