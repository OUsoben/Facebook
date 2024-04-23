import React from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/accountModalStyle.css";
import { faAngleRight, faCircleInfo, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion, faMoon } from "@fortawesome/free-regular-svg-icons";
const AccountModel = ({ showAccountModal, handleCloseModal }) => {
  const handleCloseFormAccount = () => {
    handleCloseModal(false);
  };
  return (
    <div>
      <Modal
        className="sticy-top"
        show={showAccountModal}
        onHide={handleCloseFormAccount}
        animation={false}
      >
        <div
          closeButton={false}
          className="d-flex justify-content-between rounded mx-3 p-0"
        >
          <div className="rounded account-card p-1 mt-3 ">
            <div
              style={{ width: "300px" }}
              className="d-flex align-items-center  rounded  ps-2 info-hover "
            >
              <img
                style={{ cursor: "pointer" }}
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="35"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              <p className="pt-3 pb-0 ps-2 fw-bolder ">Ou soben</p>
            </div>
            <hr className="mx-2" />
            <p className="text-primary rounded info-hover p-2 mb-0">
              See all profiles
            </p>
          </div>
        </div>
        <Modal.Body className="p-2 mt-2">
          <div className="d-flex justify-content-between  info-hover rounded align-items-center ">
            <div className="d-flex align-items-center ms-2 ">
              <div
                style={{ height: "35px", width: "35px" }}
                className="list-style"
              >
                <FontAwesomeIcon icon={faGear} className="fs-5" />
              </div>
              <p className="pt-3 ms-2" style={{fontSize:"14px"}}>Settings & privacy</p>
            </div>
            <FontAwesomeIcon className="me-2 fs-4" style={{fontWeight:"lighter"}} icon={faAngleRight}   />
          </div>
          <div className="d-flex justify-content-between  info-hover rounded align-items-center mt-1 ">
            <div className="d-flex align-items-center ms-2 ">
              <div
                style={{ height: "35px", width: "35px" }}
                className="list-style"
              >
                <FontAwesomeIcon icon={faCircleQuestion} className="fs-5" />
              </div>
              <p className="pt-3 ms-2" style={{fontSize:"14px"}}>Help & support</p>
            </div>
            <FontAwesomeIcon className="me-2 fs-4" style={{fontWeight:"lighter"}} icon={faAngleRight}   />
          </div>
          <div className="d-flex justify-content-between  info-hover rounded align-items-center mt-1 ">
            <div className="d-flex align-items-center ms-2 ">
              <div
                style={{ height: "35px", width: "35px" }}
                className="list-style"
              >
                <FontAwesomeIcon icon={faMoon} className="fs-4" />
              </div>
              <p className="pt-3 ms-2" style={{fontSize:"14px"}}>Display & accessibility</p>
            </div>
            <FontAwesomeIcon className="me-2 fs-4" style={{fontWeight:"lighter"}} icon={faAngleRight}   />
          </div>
           <div className="d-flex  info-hover rounded align-items-center mt-1 ">
          <div className="d-flex align-items-center ms-2 ">
              <div
                style={{ height: "35px", width: "35px" }}
                className="list-style"
              >
                <FontAwesomeIcon icon={faCircleInfo} className="fs-5" />
              </div>
              <p className="pt-3 ms-2" style={{fontSize:"14px"}}>Give Feedback</p>
            </div>
            </div>
            <div className="d-flex  info-hover rounded align-items-center mt-1 ">
            <div className="d-flex align-items-center ms-2 info-hover">
              <div
                style={{ height: "35px", width: "35px" }}
                className="list-style"
              >
                <FontAwesomeIcon icon={faRightFromBracket} className="fs-5" />
              </div>
              <p className="pt-3 ms-2" style={{fontSize:"14px"}}>Log Out</p>
            </div>
            </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AccountModel;
