import React from 'react'
import "../styles/leftSideStyle.css"
const RightSide = (props) => {
  return (
    <div  className=''>
        
    <div   style={{cursor: "pointer"}} className='d-flex item-left align-items-center rounded me-5'>
    <img
            src={props.peopleData.imageUrl}
            class="rounded-circle ms-2"
            height="37"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <p style={{whiteSpace: "pre"}} className='pt-2 ps-2 fw-bold'>{props.peopleData.titleName}</p>
    </div>
</div>
  )
}

export default RightSide