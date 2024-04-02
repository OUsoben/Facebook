import React from 'react'
import "../styles/leftSideStyle.css"
const DownLeftSide = (props) => {
  return (
    <div className=''>
        
    <div   style={{cursor: "pointer"}} className='d-flex rounded  item-left'>
    <img
            src={props.optionData.imageUrl}
            class=" rounded m-2  murecho"
            height="37"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <p style={{whiteSpace: "pre"}} className=' ps-2 pt-3 fw-bold'>{props.optionData.titleName}</p>
    </div>
</div>
  )
}

export default DownLeftSide