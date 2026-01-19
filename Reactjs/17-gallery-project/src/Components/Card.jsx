import React from 'react'

const Card = (props) => {
  return (
    <div>
       <a href={props.elem.url} target='_blank'>
        <div className='h-64 w-64 overflow-hidden font-bold bg-gray-900 rounded m-1'>
          <img src={props.elem.download_url} className='h-full object-cover w-full'/>
        </div>
          <h3>{props.elem.author}</h3>
      </a>
    </div>
  )
}

export default Card