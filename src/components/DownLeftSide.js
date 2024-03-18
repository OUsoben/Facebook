import React from 'react'

const DownLeftSide = (props) => {
  return (
    <div className=''>
        
    <div   style={{cursor: "pointer"}} className=' ps-3 mt-2  d-flex roubde'>
    <img
            src={props.optionData.imageUrl}
            class=" rounded  murecho"
            height="37"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <p style={{whiteSpace: "pre"}} className='pt-2 ps-2 fw-bold'>{props.optionData.titleName}</p>
    </div>
</div>
  )
}

export default DownLeftSide