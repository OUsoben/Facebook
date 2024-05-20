import React from "react";
import { Modal } from "react-bootstrap";
import "../styles/chatModalStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalHeader } from "react-bootstrap";
import {
  faEllipsis,
  faMaximize,
  faPenToSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const ChatModal = ({ showChatModal, handleChatCloseForm }) => {
  const handleCloseChat = () => {
    handleChatCloseForm(false);
  };
  return (
    <>
      <Modal
        style={{ height: "1000px" }}
        animation={false}
        onHide={handleCloseChat}
        show={showChatModal}
      >
        <div
          closeButton={false}
          className="d-flex justify-content-between rounded mx-3 p-0"
        >
          <Modal.Title className="p-1" style={{ fontWeight: "bold" }}>
            Chats
          </Modal.Title>
          <a
            className="p-2"
            style={{ fontSize: "18px", textDecorationLine: "none" }}
            href=""
          >
            <div>
              {" "}
              <FontAwesomeIcon className="text-muted" icon={faEllipsis} />
              <FontAwesomeIcon className="text-muted ms-3" icon={faMaximize} />
              <FontAwesomeIcon
                className="text-muted ms-3"
                icon={faPenToSquare}
              />
            </div>
          </a>
        </div>
        <Modal.Body className="p-2">
          <div className="position-relative d-flex align-items-center ">
            <FontAwesomeIcon
              className="position-absolute  text-muted  ps-3 "
              icon={faSearch}
            />
            <input
         
              type="text"
              placeholder="Search Facebook"
              aria-label="search text"
              class="rounded-pill form-control "
              style={{ backgroundColor: "#E2E8F0", paddingLeft: "40px" }}
            />
          </div>
          <div className="m-2">
            <button className="btn btn-primary rounded-pill">Inbox</button>
            <button className="btn rounded-pill">Communities</button>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EGbXT7eLJ2nK6ezGoDqCWc9CUabqCp2TnYbPtRK8Bg&s"
                className="rounded-circle"
                height="55"
                alt="Keshi"
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Jonh Cena
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg"
                className="rounded-circle"
                height="55"
                alt=""
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Doe John
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i_qZtrjSgoPCyIOywhlX8MKOzRIaQbKU0A&usqp=CAU"
                className="rounded-circle"
                height="55"
                alt=""
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Chan Sombo
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://yt3.googleusercontent.com/ewO7LMUeJpy38BpkjvQO4xxnbuII82Q-L8wjjs7eSapyxXh3BbqLOrICpmT2i2SbsQsl0Kh5=s900-c-k-c0x00ffffff-no-rj"
                className="rounded-circle"
                height="55"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                G-David
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e8224f4f999aad1326f43373a2a7d781"
                className="rounded-circle"
                height="55"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Travis Scott
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://cdns-images.dzcdn.net/images/artist/06ef1107ffce5f68734ebf9690d50d6a/500x500.jpg"
                className="rounded-circle"
                height="55"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Vannda-វណ្ណដា
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjv0kzDXwrFz-SXbMVFoC08jznxYbtlGXhw&usqp=CAU"
                className="rounded-circle"
                height="55"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Chan Rothana
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds"
                className="rounded-circle"
                height="55"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Mark zuckerberg
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg"
                className="rounded-circle"
                height="55"
                alt=""
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Jeff Bazos
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg"
                className="rounded-circle"
                height="55"
                alt=""
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Jonh Doe
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20Y8ey-KpwhT6yewd8Q3TxGyozYQp45iADA&usqp=CAU"
                className="rounded-circle"
                height="55"
                alt=""
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Bopha Votey
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://www.stevehaagsports.com/img-get2/I0000kqopAS3vJlA/fit=/fill=250x250/g=G0000QkMaQlphUaY/I0000kqopAS3vJlA.jpg"
                className="rounded-circle"
                height="55"
                alt=""
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Ready Orton
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://i.pinimg.com/564x/51/9f/cd/519fcd8569cdabf3c283102805b9aa4b.jpg"
                className="rounded-circle"
                height="55"
                alt=""
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
                Leo Messi
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded  p-2 mt-1 info-hover">
            <div className="d-flex">
              <img
                style={{ cursor: "pointer" }}
                src="https://i.pinimg.com/474x/47/5f/f1/475ff19d64a2de3a1fa418795d40ec3b.jpg"
                className="rounded-circle"
                height="55"
                alt=""
                loading="lazy"
              />
              <p style={{ fontSize: "14px" }} className="ps-3 fw-bold">
              Cristiano Ronaldo
                <br />
                <span className="text-muted fw-light">
                  Lorem ipsum, dolor sit amet...{" "}
                </span>
              </p>
            </div>
          </div>
        </Modal.Body>
        <div
          style={{ width: "358px", bottom: "2px", }}
          className="border bg-white position-fixed rounded-bottom text-center p-2"
        >
          <a className="link-primary" style={{textDecorationLine:"none"}} href="">See all in Messenger</a>
        </div>
      </Modal>
    </>
  );
};

export default ChatModal;
