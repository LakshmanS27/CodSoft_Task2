import React from 'react'
import {FcApproval} from "react-icons/fc"

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='testimonial-text'>
            <h3>Testimonials</h3>
            <h1>People love Lens & Bliss</h1>
            <p>Discover what our clients are raving about. Chosen by over 1900 satisfied customers, LBP is the go-to photography studio for capturing timeless moments with style and precision.</p>
            <a href="/">Read all 2,570 reviews</a>
        </div>
        <div className='testimonial-cards'>
            <div className='card'>
                <img src="charles.jpg" alt="" />
                <p>Fantastic experience with LBP! Professional, creative, and the photos turned out amazing. Highly recommend!.</p>
                <div className='icons'>
                    <a href="/">@charles</a>
                    <FcApproval size={18} className='icon' />
                </div>
            </div>
            <div className='card'>
                <img src="brooke.jpg" alt="" />
                <p>Impressed by the talent at Lens and Bliss. Our family photos look fantastic, and the process was easy and enjoyable. Thank you!</p>
                <div className='icons'>
                    <a href="/">@brooke</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='card'>
                <img src="albert.jpg" alt="" />
                <p>Headshots done right! Thanks to LBP for a quick and professional session. Love the results!</p>
                <div className='icons'>
                    <a href="/">@albert</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='card'>
                <img src="christopher.jpg" alt="" />
                <p>Memorable wedding photos from LBP. Talented team, captured every special moment. Highly satisfied!</p>
                <div className='icons'>
                    <a href="/">@christopher</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials