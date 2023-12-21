import React from 'react';

const Section = () => {
  return (
    <div className='section'>
      <div className='inner-section'>
        <div className='section-text'>
          <h5>"For Photo Enthusiasts by Picture Pioneers"</h5>
          <h1>Your precious moments are taken care of by our skilled photographers, who capture the essence of your desires without hassle</h1>
          <p>Photographers at our service are very efficient, performing their duties with utmost care, proficiency, and mastery, ensuring the best at every single click</p>
          <div className='button'><a href="/">Explore Now</a></div>
        </div>
        <div className='section-images'>
          <img src="dslr.png" alt="DSLR Camera" />
        </div>
      </div>
      <div className='card-section'>
        <div className='cards'>
          <div className='card'>
            <img src="reg.png" alt="Regular Photoshoot" />
            <h1>Regular Photoshoot</h1>
            <p>Capture all your basic moments like Personal photo, Family photo, Small events, and many more.</p>
            <a href="/">learn &rarr;</a>
          </div>
          <div className='card'>
            <img src="pre.png" alt="Premium Photoshoot" />
            <h1>Premium Photoshoot</h1>
            <p>Capture all your wonderful moments like Weddings, Big events, Business/Corporate events, and many more.</p>
            <a href="/">learn &rarr;</a>
          </div>
          <div className='card'>
            <img src="spec.png" alt="Special Photoshoot" />
            <h1>Special Photoshoot</h1>
            <p>Capture your unique moments like Styling/Fashion photo, Scenic photo, Aerial photos, Underwater photos, and many.</p>
            <a href="/">learn &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
