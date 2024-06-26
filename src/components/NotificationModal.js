import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'react-bootstrap'
import { faComment, faEllipsis, faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import "../styles/chatModalStyle.css"

const NotificationModal = ({showNotificationModal,handleCloseForm}) => {
    const handleCloseNotificationForm = () => {
      handleCloseForm(false)
    };
  return (
    <dir>
    <Modal className='sticy-top'  show={showNotificationModal} 
        onHide={handleCloseNotificationForm}
    animation={false} >
      <div closeButton={false} className="d-flex justify-content-between rounded mx-3 p-0">
        <Modal.Title className='p-1' style={{  fontWeight: "bold" }}>Notifications</Modal.Title>
        <a className='p-2' style={{ fontSize: "15px", textDecorationLine: "none" }} href="">
            <div> <FontAwesomeIcon
                    className="text-muted"
                    icon={faEllipsis}
                    
                  />
                  </div>
        </a>
      </div>
      <Modal.Body className='p-2'>
    <div className=''>
        <button className='btn btn-primary rounded-pill'>All</button>
        <button className='btn rounded-pill'>Unread</button>
    </div>
    <div className='d-flex justify-content-between pt-3 ps-2 '> 
        <p>New</p>
        <a style={{textDecorationLine:"none"}} href="#">See all</a>
    </div>
        <div className=' info-hover rounded ps-1 pt-2 '>
          <div className='d-flex position-relative'>
            <img
              style={{ cursor: "pointer" }}
              src="https://lh3.googleusercontent.com/BWoZ2a1rLr0GwAQOMDv_wSiAVOIfojPVy1dk6g_5slxviqSFL5YZ-oiuk5lqDmxzZUGmCCusH5gNGgY=w544-h544-p-l90-rj"
              className="rounded-circle"
              height="60"
              alt=""
              loading="lazy"
            />
             <div
                style={{ height: "28px", width: "28px" ,left:"40px",top:"30px" }}
                className="reaction-noti position-absolute "
              >
                <FontAwesomeIcon style={{fontSize:"14px"}} icon={faThumbsUp} color='white' />
              </div>
            <p style={{ fontSize: "14px" ,}} className='ps-3 fw-bold mb-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /><span className='text-primary fw-light'>18 minutes ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1 '>
          <div className='d-flex position-relative'>
            <img
              style={{ cursor: "pointer" }}
              src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg"
              className="rounded-circle"
              height="60"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
             <div
                style={{ height: "28px", width: "28px" ,left:"40px",top:"30px" }}
                className="reaction-noti position-absolute bg-danger "
              >
                <FontAwesomeIcon style={{fontSize:"14px"}} icon={faHeart} color='white' />
              </div>
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labor..
              <br /><span className='text-primary fw-light '>20 minutes ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1 '>
          <div className='d-flex position-relative'>
            <img
              style={{ cursor: "pointer" }}
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height="60"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
             <div
                style={{ height: "28px", width: "28px" ,left:"40px",top:"30px" }}
                className="reaction-noti position-absolute bg-danger "
              >
                <FontAwesomeIcon style={{fontSize:"14px"}} icon={faHeart} color='white' />
              </div>
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
              Lorem ipsum dolor sit amet consectetur, 

              <br /><span className='text-primary fw-light '>20 minutes ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1'>
          <div className='d-flex position-relative'>
            <img
              style={{ cursor: "pointer" }}
              src="https://yt3.googleusercontent.com/ewO7LMUeJpy38BpkjvQO4xxnbuII82Q-L8wjjs7eSapyxXh3BbqLOrICpmT2i2SbsQsl0Kh5=s900-c-k-c0x00ffffff-no-rj"
              className="rounded-circle"
              height="60"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            
            <div
                style={{ height: "28px", width: "28px" ,left:"40px",top:"30px" }}
                className="reaction-noti position-absolute bg-success "
              >
                <FontAwesomeIcon style={{fontSize:"14px"}} icon={faComment} color='white' />
              </div>
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br /><span className='text-primary fw-light '>32 minutes ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1'>
          <div className='d-flex position-relative'>
            <img
              style={{ cursor: "pointer" }}
              src="https://m.media-amazon.com/images/I/91BazzuLE+L._UF1000,1000_QL80_.jpg"
              className="rounded-circle"
              height="60"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <div
                style={{ height: "28px", width: "28px" ,left:"40px",top:"30px" }}
                className="reaction-noti position-absolute bg-success "
              >
                <FontAwesomeIcon style={{fontSize:"14px"}} icon={faComment} color='white' />
              </div>
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br /><span className='text-primary fw-light '>38 minutes ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1'>
          <div className='d-flex position-relative'>
            <img
              style={{ cursor: "pointer" }}
              src="https://cdns-images.dzcdn.net/images/artist/06ef1107ffce5f68734ebf9690d50d6a/500x500.jpg"
              className='rounded-circle'
              height="60"
              alt=""
              loading="lazy"
            />
             <div
                style={{ height: "28px", width: "28px" ,left:"40px",top:"30px" }}
                className="reaction-noti position-absolute "
              >
                <FontAwesomeIcon style={{fontSize:"14px"}} icon={faThumbsUp} color='white' />
              </div>
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <br /><span className='text-primary fw-light '>5 hours ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1'>
          <div className='d-flex'>
            <img
            className='rounded-circle'
              style={{ cursor: "pointer" }}
              src="https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds"
              height="60"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /><span className='text-primary fw-light '>20 hours ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds"
              className="rounded-circle"
              height="62"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <br /><span className='text-primary fw-light '>a day ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg"
              className="rounded-circle"
              height="63"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br /><span className='text-primary fw-light '>2 day ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height="63"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
             
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br /><span className='text-primary fw-light '>5 days ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://avatarfiles.alphacoders.com/370/370978.jpeg"
              className="rounded-circle"
              height="63"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br /><span className='text-primary fw-light '> 1 weak  ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://majorspoilers.com/wp-content/uploads/2012/06/JohnCena-THUMB.jpg"
              className="rounded-circle"
              height="63"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br /><span className='text-primary fw-light '>1 weak ago</span>
            </p>
          </div>
        </div>
        <div className='info-hover rounded ps-1 pt-2 mt-1'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhQqtpC9ar9LqFYuZF20Rp7woONwIGOJY4AXo-lizLA&s"
              className="rounded-circle"
              height="63"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold mb-1'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br /><span className='text-primary fw-light '>2 weaks ago</span>
            </p>
          </div>
        </div>
      </Modal.Body>
     
    </Modal>

    </dir>

  )
}

export default NotificationModal