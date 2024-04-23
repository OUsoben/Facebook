import React from 'react'
import "../styles/leftSideStyle.css"

const LeftSide = (props) => {
    
  return (
    <div className=''>
        
        <div   style={{cursor: "pointer"}} className='   d-flex item-left align-items-center  rounded '>
        <img  
                src={props.optionData.imageUrl}
                class=" ms-2 murecho"
                height="30"
                alt=""
                loading="lazy"
              />
              <p style={{whiteSpace: "pre",paddingTop:""}} className='fw-bold  ps-2 pt-3'>{props.optionData.titleName}</p>
        </div>
    </div>
  )
}

export default LeftSide