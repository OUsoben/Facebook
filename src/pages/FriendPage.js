import React from 'react'
import "../styles/friendStyle.css"
import { faAngleRight, faCakeCandles, faGear, faUser, faUserCheck, faUserGroup, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FriendPage = () => {
  return (
    <div className='row me-0'>

    {/* left side bar  */}
        <section style={{width:"370px",height:"100%"}} className="left-shadow col-xl-2 bg-white 
        d-flex flex-column  position-fixed pe-0">
          <div className="d-flex justify-content-between pt-3 p-2"> 
              <h5 className='fw-bold text-dark p-1'>Friends </h5>

              <div
                style={{ height: "35px", width: "35px" }}
                className="list-style"
              >
                <FontAwesomeIcon icon={faGear} className="fs-5" />
              </div>
            </div>
            <div className="d-flex  align-items-center rounded mx-2 bg-gray">
            <div
                style={{ height: "35px", width: "35px" }}
                className="list-style bg-primary ms-2"
              >
                <FontAwesomeIcon style={{fontSize:"15px"}} icon={faUserGroup} className="  text-white " />
              </div>
              <p className='fw-bold ps-2 pt-3'>Home</p>
             
              </div> 
              <div className="d-flex align-items-center rounded mx-2 info-hover">
                
            <div
                style={{ height: "35px", width: "35px" }}
                className="list-style ms-2"
              >
                <FontAwesomeIcon style={{fontSize:"20px"}} icon={faUser} className="" />
              </div>
              <p className='fw-bold ps-2 pt-3'>Friends Requests </p>
              <FontAwesomeIcon className='ms-auto me-2 fs-4 text-muted' icon={faAngleRight} />
              </div> 
              <div className="d-flex align-items-center rounded mx-2 info-hover">
                
                <div
                    style={{ height: "35px", width: "35px" }}
                    className="list-style ms-2"
                  >
                    <FontAwesomeIcon style={{fontSize:"17px"}} icon={faUserPlus} className="" />
                  </div>
                  <p className='fw-bolder ps-2 pt-3'>Suggestions </p>
                  <FontAwesomeIcon className='ms-auto me-2 fs-4 text-muted' icon={faAngleRight} />
                  </div>
                  <div className="d-flex align-items-center rounded mx-2 info-hover">
                
                <div
                    style={{ height: "35px", width: "35px" }}
                    className="list-style ms-2"
                  >
                    <FontAwesomeIcon style={{fontSize:"17px"}} icon={faUserCheck} className="" />
                  </div>
                  <p className='fw-bold ps-2 pt-3'>All Friends</p>
                  <FontAwesomeIcon className='ms-auto me-2 fs-4 text-muted' icon={faAngleRight} />
                  </div>
                  <div className="d-flex align-items-center rounded mx-2 info-hover">
                
                <div
                    style={{ height: "35px", width: "35px" }}
                    className="list-style ms-2"
                  >
                    <FontAwesomeIcon style={{fontSize:"18px"}} icon={faCakeCandles} className="" />
                  </div>
                  <p className='fw-bold ps-2 pt-3'>Birthdays </p>
             
                  </div>
                  <div className="d-flex align-items-center rounded mx-2 info-hover">
                
                <div
                    style={{ height: "35px", width: "35px" }}
                    className="list-style ms-2"
                  >
                    <FontAwesomeIcon style={{fontSize:"18px"}} icon={faUsers} className="" />
                  </div>
                  <p className='fw-bold ps-2 pt-3'>Custom Lists</p>
                  <FontAwesomeIcon className='ms-auto me-2 fs-4 text-muted' icon={faAngleRight} />
                  </div>   
        </section>

        {/*  friend's  content */}
      <section style={{height:"100%"}} className="col-xxl-9 bg-warning">


      </section>
    </div>
  )
}

export default FriendPage