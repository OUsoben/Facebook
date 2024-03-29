import React from 'react';
import { Modal } from 'react-bootstrap';
import "../styles/chatModalStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalHeader } from 'react-bootstrap';
import { faEllipsis, faMaximize, faPenToSquare, faSearch } from '@fortawesome/free-solid-svg-icons';

const ChatModal = ({ showChatModal ,handleChatCloseForm}) => {
    const handleCloseChat = ()=>{
        handleChatCloseForm(false);
    }
  return (
    <Modal className='sticy-top' style={{height:"900px"}} size='' animation={false} onHide={handleCloseChat} show={showChatModal}>
      <div closeButton={false} className="d-flex justify-content-between rounded mx-3 p-0">
        <Modal.Title className='p-1' style={{  fontWeight: "bold" }}>Chats</Modal.Title>
        <a className='p-2' style={{ fontSize: "18px", textDecorationLine: "none" }} href="">
            <div> <FontAwesomeIcon
                    className="text-muted"
                    icon={faEllipsis}
                    
                  />
                  <FontAwesomeIcon className='text-muted ms-3' icon={faMaximize} />
                  <FontAwesomeIcon className='text-muted ms-3' icon={faPenToSquare} />
                  </div>
       
        </a>
        

      </div>
      <Modal.Body>
      <div className="position-relative d-flex align-items-center ">
<FontAwesomeIcon className="position-absolute  text-muted  ps-3 " icon={faSearch}/>
      <input type="text"
             placeholder="Search Facebook"
             aria-label="search text"
             class="rounded-pill form-control " 
             style={{backgroundColor:"#E2E8F0",paddingLeft: "40px"}}
      />       

    </div>
    <div className='m-2'>
        <button className='btn btn-primary rounded-pill'>Inbox</button>
        <button className='btn rounded-pill'>Communities</button>
    </div>
        <div className='rounded-buttom d-flex justify-content-between ms-3 p-0 mt-3'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-1/189080926_309898550588275_8264110849064117025_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lhzFYm0aW40AX_yIl7U&_nc_ht=scontent.fpnh11-1.fna&oh=00_AfCWEznio11HtzIHGRGFmjTn_TjCap3sOsx0XRZ_e8aoFg&oe=661FB500"
              className="rounded-circle"
              height="50"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold'>
              Keshi
              <br /><span className='text-muted fw-light'>Lorem ipsum, dolor sit amet... </span>
            </p>
          </div>
        </div>
        <div className='rounded-buttom d-flex justify-content-between ms-3 p-0 mt-3'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg"
              className="rounded-circle"
              height="50"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold'>
            Doe John
              <br /><span className='text-muted fw-light'>Lorem ipsum, dolor sit amet... </span>
            </p>
          </div>
        </div>
        <div className='rounded-buttom d-flex justify-content-between ms-3 p-0 mt-3'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i_qZtrjSgoPCyIOywhlX8MKOzRIaQbKU0A&usqp=CAU"
              className="rounded-circle"
              height="50"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold'>
              Chan Sombo
              <br /><span className='text-muted fw-light'>Lorem ipsum, dolor sit amet... </span>
            </p>
          </div>
        </div>
        <div className='rounded-buttom d-flex justify-content-between ms-3 p-0 mt-3'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://yt3.googleusercontent.com/ewO7LMUeJpy38BpkjvQO4xxnbuII82Q-L8wjjs7eSapyxXh3BbqLOrICpmT2i2SbsQsl0Kh5=s900-c-k-c0x00ffffff-no-rj"
              className="rounded-circle"
              height="50"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold'>
              G-David
              <br /><span className='text-muted fw-light'>Lorem ipsum, dolor sit amet... </span>
            </p>
          </div>
        </div>
        <div className='rounded-buttom d-flex justify-content-between ms-3 p-0 mt-3'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e8224f4f999aad1326f43373a2a7d781"
              className="rounded-circle"
              height="50"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold'>
              Travis Scott
              <br /><span className='text-muted fw-light'>Lorem ipsum, dolor sit amet... </span>
            </p>
          </div>
        </div>
        <div className='rounded-buttom d-flex justify-content-between ms-3 p-0 mt-3'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://cdns-images.dzcdn.net/images/artist/06ef1107ffce5f68734ebf9690d50d6a/500x500.jpg"
              className='rounded-circle'
              height="50"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold'>
              Vannda-វណ្ណដា
              <br /><span className='text-muted fw-light'>Lorem ipsum, dolor sit amet... </span>
            </p>
          </div>
        </div>
        <div className='rounded-buttom d-flex justify-content-between ms-3 p-0 mt-3'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjv0kzDXwrFz-SXbMVFoC08jznxYbtlGXhw&usqp=CAU"
              className="rounded-circle"
              height="50"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold'>
              Chan Rothana
              <br /><span className='text-muted fw-light'>Lorem ipsum, dolor sit amet... </span>
            </p>
          </div>
        </div>
        <div className='rounded-buttom d-flex justify-content-between ms-3 p-0 mt-3'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds"
              className="rounded-circle"
              height="50"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold'>
            Mark zuckerberg
              <br /><span className='text-muted fw-light'>Lorem ipsum, dolor sit amet... </span>
            </p>
          </div>
        </div>
        <div className='rounded-buttom d-flex justify-content-between ms-3 p-0 mt-3'>
          <div className='d-flex'>
            <img
              style={{ cursor: "pointer" }}
              src="https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg"
              className="rounded-circle"
              height="50"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className='ps-3 fw-bold'>
             Jeff Bazos
              <br /><span className='text-muted fw-light'>Lorem ipsum, dolor sit amet... </span>
            </p>
          </div>
        </div>
        
      </Modal.Body>
     
    </Modal>

  );
}

export default ChatModal;
