import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate ()
  return (
  
    <div>
    <div style={{height:"900px"}} className='d-flex flex-column justify-content-center align-items-center'>
         <img style={{width: "6%"}} className='img-fluid' src="https://www.facebook.com/images/comet/empty_states_icons/permissions/permissions_dark_mode.svg" alt="Error image" />
        <p className='fw-bold text-muted pt-4 '>This content isn't available right now</p>
        <p className='text-center '>When this happens, it's usually because the owner only <br /> shared it with a small group of people, changed who can <br /> see it or it's been deleted.</p>
        
        <button className='btn btn-primary px-4 py-2'
              onClick={()=>{
                navigate("/")
              }}
        >Go to News Feed</button>
        <a style={{textDecorationLine:"none",cursor:"pointer"}} className='text-primary fw-bold mt-3 '
                onClick={()=>{
                  navigate("/")
                }}
        >Go back</a>
        <a  style={{textDecorationLine:"none",cursor:"pointer"}} className='fw-bold text-primary mt-2'>Visit Help Center</a>
    </div>
    </div>
  )
}

export default NotFoundPage