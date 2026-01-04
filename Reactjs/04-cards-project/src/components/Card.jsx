import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
  return (
    <div className="card">
    <div>
    <div className="top">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" alt="a" />
      <button>Save <Bookmark size={12} /></button>
    </div>
    <div className="center">
      <h3>Amazon <span>5 Days ago</span></h3>
      <h2>Senior UI/UX Designer</h2>
      <div className='tag'>
          <h4>Part-time</h4>
          <h4>Senior-level</h4>
      </div>
    </div>
    </div>
    <div className="bottom">
      <div>
        <h3>$120/hr</h3>
        <p>San Francisco</p>
      </div>
      <button>Apply Now</button>
    </div>
  </div>
  )
}

export default Card