import Modal from 'react-bootstrap/Modal';
import "../styles/searchModalStyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
const SearchModal = ({showModal , handleCloseForm }) => {
   
   const handleCloseFormFunction = () => {
    handleCloseForm (false)
 
   }
  return (
    <Modal   animation={false} style={{marginTop:"-50px",width: "360px"}}  show={showModal} onHide={handleCloseFormFunction}>
    <div closeButton={false}  className='d-flex p-2'>
    <a  class="navbar-brand" href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
            height="43"
            alt="facebook logo"
            loading="lazy"
          />
        </a>   
        <div className="position-relative d-flex align-items-center ms-2">
      <FontAwesomeIcon className="position-absolute  text-muted  ps-3" icon={faSearch}/>
            <input type="text"
                   placeholder="Search Facebook"
                   aria-label="search text"
                   class="rounded-pill form-control " 
                   style={{backgroundColor:"#E2E8F0",paddingLeft: "40px"}}
            />
          </div>
          </div>
      <Modal.Title className="d-flex justify-content-between mx-3 p-0">
            <p style={{fontSize:"15px"}} className=' fw-bold'>Recent</p>
            <a style={{fontSize:"15px",textDecorationLine:"none"}} href="">Edit</a>
      </Modal.Title>
   
      <div className='rounded-buttom d-flex justify-content-between ms-3 p-0'>
        <div className='d-flex'>
    <img
               style={{cursor: "pointer"}}
                src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-1/189080926_309898550588275_8264110849064117025_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lhzFYm0aW40AX_yIl7U&_nc_ht=scontent.fpnh11-1.fna&oh=00_AfCWEznio11HtzIHGRGFmjTn_TjCap3sOsx0XRZ_e8aoFg&oe=661FB500"
                class="rounded-circle"
                height="40"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
               <p style={{fontSize:"14px"}} className='ps-3'>
                Keshi
                <li className='text-primary'><span className='text-muted' style={{fontSize:"13px"}}>2 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-4 fs-5 mt-1"
                    icon={faXmark}
                  />
                  
          </div>
          
    <div className='rounded-buttom d-flex justify-content-between ms-3 p-0'>
        <div className='d-flex'>
    <img
               style={{cursor: "pointer"}}
                src="https://m.media-amazon.com/images/I/91BazzuLE+L._UF1000,1000_QL80_.jpg"
                class="rounded-circle"
                height="40"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
               <p style={{fontSize:"14px"}} className='ps-3'>
                SZA
                <li className='text-primary'><span className='text-muted' style={{fontSize:"13px"}}>2 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-4 fs-5 mt-1"
                    icon={faXmark}
                  />
                  
          </div>
          
    <div className='rounded-buttom d-flex justify-content-between ms-3 p-0'>
        <div className='d-flex'>
    <img
               style={{cursor: "pointer"}}
                src="https://lh3.googleusercontent.com/BWoZ2a1rLr0GwAQOMDv_wSiAVOIfojPVy1dk6g_5slxviqSFL5YZ-oiuk5lqDmxzZUGmCCusH5gNGgY=w544-h544-p-l90-rj"
                class="rounded-circle"
                height="40"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
               <p style={{fontSize:"14px"}} className='ps-3'>
                Chris Brown
                <li className='text-primary'><span className='text-muted' style={{fontSize:"13px"}}>2 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-4 fs-5 mt-1"
                    icon={faXmark}
                  />
                  
          </div>
          
    <div className='rounded-buttom d-flex justify-content-between ms-3 p-0'>
        <div className='d-flex'>
    <img
               style={{cursor: "pointer"}}
                src="https://cdns-images.dzcdn.net/images/artist/06ef1107ffce5f68734ebf9690d50d6a/500x500.jpg"
                class="rounded-circle"
                height="40"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
               <p style={{fontSize:"14px"}} className='ps-3'>
                Vannda
                <li className='text-primary'><span className='text-muted' style={{fontSize:"13px"}}>2 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-4 fs-5 mt-1"
                    icon={faXmark}
                  />
                  
          </div>
          
    <div className='rounded-buttom d-flex justify-content-between ms-3 p-0'>
        <div className='d-flex'>
    <img
               style={{cursor: "pointer"}}
                src="https://assets.entrepreneur.com/content/3x2/2000/1680813141-GettyImages-850154658copy.jpg?format=pjeg&auto=webp&crop=1:1"
                class="rounded-circle"
                height="40"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
               <p style={{fontSize:"14px"}} className='ps-3'>
                Bill Gate
                <li className='text-primary'><span className='text-muted' style={{fontSize:"13px"}}>2 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-4 fs-5 mt-1"
                    icon={faXmark}
                  />
                  
          </div>
    <div className='rounded-buttom d-flex justify-content-between ms-3 p-0'>
        <div className='d-flex'>
    <img
               style={{cursor: "pointer"}}
                src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e8224f4f999aad1326f43373a2a7d781"
                class="rounded-circle"
                height="40"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
               <p style={{fontSize:"14px"}} className='ps-3'>
                Travis Scott
                <li className='text-primary'><span className='text-muted' style={{fontSize:"13px"}}>2 new</span>
                </li>
                </p>   
                           
               </div>
               
             <FontAwesomeIcon
                    className="text-muted me-4 fs-5 mt-1"
                    icon={faXmark}
                  />
                  
          </div>
  </Modal>

  );
}

export default SearchModal;