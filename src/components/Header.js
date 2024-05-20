import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faGamepad,
  faGrip,
  faHome,
  faSearch,
  faStore,
  faTv,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/headerStyle.css";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import SearchModal from "./SearchModal";
import { useState } from "react";
import ChatModal from "./ChatModal";
import NotificationModal from "./NotificationModal";
import AccountModel from "./AccountModel";
function Header() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  const handleNotificationCloseModal = () => {
    setShowNotificationModal(false);
  };
  const handleChatCloseModal = () => {
    setShowChatModal(false);
  };
  const handleCloseModal = () => {
    setShowSearchModal(false);
  };
  const handleCloseFormAccount = () => {
    setShowAccountModal(false);
  };

  let searchItems = [];
  return (
    //  Navbar

    <nav class="navbar navbar-expand-lg navbar-light bg-white border p-0 sticky-top">
      <div class="container-fluid">
        {/* Navbar brand */}
        <a style={{ marginRight: "5px" }} class="navbar-brand" href="/">
          <img
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
            height="43"
            alt="facebook logo"
            loading="lazy"
          />
        </a>
        <div className="me-md-auto ">
          <button
            style={{ height: "40px", width: "40px" }}
            data-mdb-collapse-init
            class="navbar-toggler step tooltext "
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setShowSearchModal(true);
            }}
          >
            <span className="text">Search</span>{" "}
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "17px" }} />
          </button>

          <form
            actio
            className="collapse navbar-collapse  "
            id="navbarSupportedContent  "
          >
            <div className="position-relative d-flex align-items-center ">
              <FontAwesomeIcon
                className="position-absolute  text-muted  ps-3"
                icon={faSearch}
              />
              <input
                
                type="text"
                placeholder="Search Facebook"
                aria-label="search text"
                class="rounded-pill form-control "
                style={{ backgroundColor: "#E2E8F0", paddingLeft: "40px" }}
                onClick={() => {
                  setShowSearchModal(true);
                }}
                
              />

              <SearchModal
                showModal={showSearchModal}
                handleCloseForm={handleCloseModal}
              />

              <ChatModal
                showChatModal={showChatModal}
                handleChatCloseForm={handleChatCloseModal}
              />

              <NotificationModal
                showNotificationModal={showNotificationModal}
                handleCloseForm={handleNotificationCloseModal}
              />

              <AccountModel
                showAccountModal={showAccountModal}
                handleCloseModal={handleCloseFormAccount}
              />
            </div>
          </form>
        </div>
        <div className="me-auto ms-3">
          <button
            data-mdb-collapse-init
            class="navbar-toggler tooltext"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text">More</span> <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          style={{ marginRight: "140px" }}
          className="collapse navbar-collapse "
          id="navbarSupportedContent"
        >
          <div className=" gap-1 d-flex mx-auto ">
            {/* Home*/}
            <NavLink
              to={"/"}
              className="btn px-5 py-2 fs-5 Nav_Link border-0 Nav_Link1 tooltext"
            >
              <span className="text">Home</span>
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
            {/*Friends */}
            <NavLink
              to={"/friends"}
              className="btn px-5 py-2 fs-5 Nav_Link border-0 tooltext"
            >
              <span className="text">Friends</span>{" "}
              <FontAwesomeIcon icon={faUserGroup} />
            </NavLink>
            {/* Video */}
            <NavLink
              to={"/videos"}
              className="btn px-5 py-2 fs-5 Nav_Link border-0 tooltext"
            >
              <span className="text">Video</span>{" "}
              <FontAwesomeIcon icon={faTv} />
            </NavLink>
            <NavLink
              to={"/marketplace"}
              className="btn px-5 py-2 fs-5 Nav_Link border-0 Nav_Link1 tooltext "
            >
              <span className="text">Marketplace</span>{" "}
              <FontAwesomeIcon icon={faStore} />
            </NavLink>
            <NavLink
              to={"/gaming"}
              className="btn px-5 py-2 fs-5 Nav_Link border-0 tooltext"
              onClick={() => {}}
            >
              <span className="text">Gaming</span>{" "}
              <FontAwesomeIcon icon={faGamepad} />
            </NavLink>
          </div>
        </div>

        <div class="d-flex align-items-center gap-2">
          {/* Menu */}
          <button
            style={{ height: "40px", width: "40px" }}
            className="step tooltext mt-1"
          >
            <span className="text">Menu</span>{" "}
            <FontAwesomeIcon icon={faGrip} className="fs-5" />
          </button>
          {/* Messenger */}
          <button
            style={{ height: "40px", width: "40px" }}
            class=" step tooltext "
            onClick={() => {
              setShowChatModal(true);
            }}
          >
            <span className="text mt-1">Messenger</span>{" "}
            <FontAwesomeIcon icon={faFacebookMessenger} className="fs-5 " />
          </button>

          {/* <!-- Notifications --> */}

          <button
            style={{ height: "40px", width: "40px" }}
            class=" step tooltext"
            onClick={() => {
              setShowNotificationModal(true);
            }}
          >
            <span className="text mt-1">Notifications</span>{" "}
            <FontAwesomeIcon icon={faBell} />
          </button>

          {/* <!-- Avatar --> */}
          <div class="dropdown tooltext">
            <span className="text mt-1">Account</span>
            <img
              onClick={() => {
                setShowAccountModal(true);
              }}
              style={{ cursor: "pointer" }}
              src="https://meetcontent.com/wp-content/images/mc_1stperson_250.jpg"
              class="rounded-circle"
              height="40"
              alt=""
              loading="lazy"l
            />
          </div>
        </div>
      </div>

      {/* <!-- Right elements --> */}

      {/* <!-- Container wrapper --> */}
    </nav>
  );
}

export default Header;
