import React from 'react'

const Container = () => {
  return (
    <div>
        <div className='container'>
            <div className='text'>
                <h3>Blissful Experience</h3>
                <h1>Photographic Expertise and Imaging Proficiency</h1>
                <p>"LBP, where moments become masterpieces. Elevate your memories with our expert photography services. Capturing life's essence, frame by frame."</p>
                <div className='button'><a href="/">Explore Now &#8599;</a></div>
            </div>
            <div className='image'>
                <img src="LensBliss.png" alt="" />
            </div>
        </div>
        <div className='partners'>
            <span><img src="sony.png" alt="" /></span>
            <span><img src="canon.png" alt="" /></span>
            <span><img src="nikon.png" alt="" /></span>
            <span><img src="fuji.png" alt="" /></span>
        </div>
    </div>
  )
}

export default Container