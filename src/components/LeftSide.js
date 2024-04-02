import React from 'react'
import "../styles/leftSideStyle.css"

const LeftSide = (props) => {
    
  return (
    <div className=''>
        
        <div   style={{cursor: "pointer"}} className='  mt-2   d-flex item-left rounded '>
        <img  
                src={props.optionData.imageUrl}
                class=" m-2 ms-3 murecho"
                height="37"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              <p style={{whiteSpace: "pre"}} className='fw-bold pt-3 ps-1'>{props.optionData.titleName}</p>
        </div>
    </div>
  )
}

export default LeftSide