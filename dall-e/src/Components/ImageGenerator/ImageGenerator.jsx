import React from 'react'
import './ImageGenerator.css'
import Default_image from '../Assets/default_image.svg'

export const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
    <div className='header'>
        Ai image <span>generator</span>
    </div>
    <div className="img-loading">
        <div className="image">
            <img src={Default_image}/>
        </div>
    </div>
    <div className="search-box">
        <input type='text' className='search-input' placeholder='Describe what you want to see'/>
        <div className="generate-btn">generate</div>
    </div>
    </div>

  )
}
