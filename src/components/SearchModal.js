import Modal from 'react-bootstrap/Modal';
import "../styles/searchModalStyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
const SearchModal = ({showModal , handleCloseForm }) => {
   
   const handleCloseFormFunction = () => {
    handleCloseForm (false)
 
   }
   
  return (
    <Modal   animation={false}  style={{marginTop:"-53px",width: "350px"}} className='d-flex'  show={showModal} onHide={handleCloseFormFunction}>
    <div closeButton={false}  className='d-flex p-2 '>
    <a  class="navbar-brand" href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
            height="43"
            alt="facebook logo"
            loading="lazy"
          />
        </a>   
        <div className=" d-flex align-items-center ms-1">
      <FontAwesomeIcon className="position-absolute  text-muted  ps-3" icon={faSearch}/>
            <input
                   autoFocus
                   type="text"
                   placeholder="Search Facebook" 
                   aria-label="search text"
                   class="rounded-pill form-control border-none outline-none" 
                   style={{backgroundColor:"#E2E8F0",paddingLeft: "40px"}}
            />
          </div>
          </div>
      <Modal.Title className="d-flex justify-content-between mx-3 p-0">
            <p style={{fontSize:"20px"}} className=' fw-bold'>Recent</p>
            <a className='' style={{fontSize:"15px",textDecorationLine:"none"}} href="">Edit</a>
      </Modal.Title>
   
      <div className='d-flex justify-content-between align-items-center p-1 info-hover mb-2 mx-2 rounded '>
        <div className='d-flex  align-items-center'>
    <img
               style={{cursor: "pointer"}}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EGbXT7eLJ2nK6ezGoDqCWc9CUabqCp2TnYbPtRK8Bg&s"
                  class="rounded-circle"
                  height="35"
                  alt=""
                  loading="lazy"
                />
                <p clas style={{fontSize:"14px"}} className='ps-3 fw-bold  mb-0'>
                  Jonh Cena
                  <li className='text-primary '><span className='text-muted fw-light' style={{fontSize:"13px"}}>2 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-2"
                    icon={faXmark}
                  />
                  
        </div>
        <div className='d-flex justify-content-between align-items-center p-1 info-hover mb-2 mx-2 rounded '>
        <div className='d-flex  align-items-center'>
    <img
               style={{cursor: "pointer"}}
                  src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e8224f4f999aad1326f43373a2a7d781"
                  class="rounded-circle"
                  height="35"
                  alt=""
                  loading="lazy"
                />
                <p clas style={{fontSize:"14px"}} className='ps-3 fw-bold  mb-0'>
                  Travis Scott
                  <li className='text-primary '><span className='text-muted fw-light' style={{fontSize:"13px"}}>3 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-2"
                    icon={faXmark}
                  />
                  
        </div>
        <div className='d-flex justify-content-between align-items-center p-1 info-hover mb-2 mx-2 rounded '>
        <div className='d-flex  align-items-center'>
    <img
               style={{cursor: "pointer"}}
                  src="https://i.quotev.com/n3ce37u5aaaa.jpg"
                  class="rounded-circle"
                  height="35"
                  alt=""
                  loading="lazy"
                />
                <p clas style={{fontSize:"14px"}} className='ps-3 fw-bold  mb-0'>
                  Tonny Shark
                  <li className='text-primary '><span className='text-muted fw-light' style={{fontSize:"13px"}}>1 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-2"
                    icon={faXmark}
                  />
                  
        </div>
        <div className='d-flex justify-content-between align-items-center p-1 info-hover mb-2 mx-2 rounded '>
        <div className='d-flex  align-items-center'>
    <img
               style={{cursor: "pointer"}}
                  src="https://assets-prd.ignimgs.com/2024/02/22/keanu-button-1708614107039.jpg?width=250&auto=webp"
                  class="rounded-circle"
                  height="35"
                  alt=""
                  loading="lazy"
                />
                <p clas style={{fontSize:"14px"}} className='ps-3 fw-bold  mb-0'>
                  Jonh Wick
                  <li className='text-primary '><span className='text-muted fw-light' style={{fontSize:"13px"}}>10 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-2"
                    icon={faXmark}
                  />
                  
        </div>
        <div className='d-flex justify-content-between align-items-center p-1 info-hover mb-2 mx-2 rounded '>
        <div className='d-flex  align-items-center'>
    <img
               style={{cursor: "pointer"}}
                  src="https://pbs.twimg.com/profile_images/887503129633337344/7qJqEm-j_400x400.jpg"
                  class="rounded-circle"
                  height="35"
                  alt=""
                  loading="lazy"
                />
                <p clas style={{fontSize:"14px"}} className='ps-3 fw-bold  mb-0'>
                  Tom Holland
                  <li className='text-primary '><span className='text-muted fw-light' style={{fontSize:"13px"}}>2 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-2"
                    icon={faXmark}
                  />
                  
        </div>
        <div className='d-flex justify-content-between align-items-center p-1 info-hover mb-2 mx-2 rounded '>
        <div className='d-flex  align-items-center'>
    <img
               style={{cursor: "pointer"}}
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ae/VannDa.jpg"
                  class="rounded-circle"
                  height="35"
                  alt=""
                  loading="lazy"
                />
                <p clas style={{fontSize:"14px"}} className='ps-3 fw-bold  mb-0'>
                  Vannda
                  <li className='text-primary '><span className='text-muted fw-light' style={{fontSize:"13px"}}>2 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-2"
                    icon={faXmark}
                  />
                  
        </div>
  </Modal>

  );
}

export default SearchModal;