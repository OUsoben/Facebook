import React from "react";
import "../styles/homeStyle.css";
import LeftSide from "../components/LeftSide";
import {
  faAngleDown,
  faCamera,
  faComment,
  faEarthAmericas,
  faEllipsis,
  faFaceSmile,
  faFileCirclePlus,
  faHeart,
  faImage,
  faPlus,
  faSearch,
  faShare,
  faThumbsUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownLeftSide from "../components/DownLeftSide";
import RightSide from "../components/RightSide";
const Homepage = () => {
  let options = [
    {
      imageUrl:
        "https://icons.veryicon.com/png/128/business/vscode-program-item-icon/npm-6.png",
      titleName: " Friends",
    },
    {
      imageUrl:
        "https://png.pngitem.com/pimgs/s/2-25088_transparent-facebook-png-transparente-group-icon-circle-png.png",
      titleName: " Groups",
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/1345/1345071.png",
      titleName: " Memories",
    },
    {
      imageUrl:
        "https://images.vexels.com/media/users/3/223055/isolated/lists/eb3fcec56c95c2eb7ded9201e51550a2-bookmark-icon-flat.png",
      titleName: " Saved ",
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2036/2036448.png",
      titleName: " Video",
    },
  ];
  let OrderOtions = [
    {
      imageUrl:
        "https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/356825302_3533867803538096_4945128752249389424_n.jpg?stp=c25.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFSiqH5NdGaSX4m89lT-9o-LNs6lVkkOwQs2zqVWSQ7BE-VDM72gDuMpdRBiiUXncDfw1V3lJADgm0SJ6mtigEB&_nc_ohc=HKvXPIzferYAX95R0VD&_nc_ht=scontent.fpnh11-1.fna&oh=00_AfDUuxsFZmPSVMiY37HKsdHcEH8mIqCiOpxf6qALDjHaFw&oe=65FB55F2",
      titleName: "IT & Media Cambodia",
    },
    {
      imageUrl:
        "https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/313027222_223894613322327_3395568170130132142_n.jpg?stp=c4.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG78q-LsKlKT2y0l799jvlSPC2NzgsMm2M8LY3OCwybY3eAVMzx0vk83PDtHhlVFNUrNYbGaICydXR9LNz-YUOL&_nc_ohc=kgjxREv2mSMAX8hx5na&_nc_ht=scontent.fpnh11-1.fna&oh=00_AfDWleFEs_gstdbzZlk5C6qCZNTm83adX3R4K7_3J2RQWg&oe=65FB11DD",
      titleName: "IT Job in Cambodia",
    },
    {
      imageUrl:
        "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/36319086_645507579117063_3493789190435373056_n.jpg?stp=c8.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF6Vc3ia2lQ5CZZ_ONPeuMR8XS9pDBNxunxdL2kME3G6a1eR6MYjI0SQWKWvRa7UAeI0NRuxf2a2tGBW3ukLqVD&_nc_ohc=9dt3fml_j_wAX9vWfb4&_nc_ht=scontent.fpnh11-2.fna&oh=00_AfD4nZxBRJR3vEPiCg5Eakb9aW5Kv_-ODLIDw4lNW9sEkg&oe=661E119C",
      titleName: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ ",
    },
    {
      imageUrl:
        "https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/131692348_3550755238353879_2998477720949305725_n.jpg?stp=c31.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF9bDZHBGpyj4DLHt1XLPBbenW2kwIVSLV6dbaTAhVItb5gY5N_ep9h7YRy62_MRr95iYnXcibXSdvRxFNTPX-b&_nc_ohc=W2VSdb1ICDUAX9eDBY2&_nc_ht=scontent.fpnh11-2.fna&oh=00_AfAYL6kAV-vznTifQQqLSrT_RbKsv5VKS0JJ2P3wtsVtdw&oe=661E2A3A",
      titleName: "ចំណេះដឹងអាយធី IT",
    },
    {
      imageUrl:
        "https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.18169-9/1483207_10150001784124944_240076833_n.png?stp=cp0_dst-png_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFL9ZHYv59zMlYFrIUBPNLZQif8GfH4WC9CJ_wZ8fhYL7YrrK1IN-gmcJ2YjxfU5F7lmy2Afje1o_ndVe2W9IS8&_nc_ohc=mb962GCDQUUAX9JBTxy&_nc_ht=scontent.fpnh11-1.fna&oh=00_AfAFeBzOMuo829aZkJObph4KVLTVBFqIMTFeBT8tZJypsw&oe=661DFEC7",
      titleName: "IT Job Cambodia",
    },
    {
      imageUrl:
        "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/306194586_10223953689621793_5755057819744060505_n.jpg?stp=c19.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGF6kZquFusWQGB62Ss8G8_g1nCESYx8eGDWcIRJjHx4ZQ2MgDeRBdAlKYAznZvLcTPL2zMIXIzpQMWDu930oew&_nc_ohc=ch57UYJg628AX8Dh6rF&_nc_ht=scontent.fpnh11-2.fna&oh=00_AfDxG3N_Xfo5CnM8FM-T8E4wBWbMbAgxvjWgQKcMo3mkYA&oe=65FB428D",
      titleName: "Python Group",
    },
  ];
  let peopleContact = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
      titleName: "Jonh Doe",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i_qZtrjSgoPCyIOywhlX8MKOzRIaQbKU0A&usqp=CAU",
      titleName: "Chan Sombo",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20Y8ey-KpwhT6yewd8Q3TxGyozYQp45iADA&usqp=CAU",
      titleName: "Bopha votey",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjv0kzDXwrFz-SXbMVFoC08jznxYbtlGXhw&usqp=CAU",
      titleName: "Serey rothana",
    },
    {
      imageUrl:
        "https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg",
      titleName: "Elon Mask",
    },
    {
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",
      titleName: "Mark zuckerberg",
    },
    {
      imageUrl:
        "https://assets.entrepreneur.com/content/3x2/2000/1680813141-GettyImages-850154658copy.jpg?format=pjeg&auto=webp&crop=1:1",
      titleName: "Biil Gate",
    },
    {
      imageUrl:
        "https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg",
      titleName: "Jeff Bezos",
    },
  ];
  let peopleConversation = [
    {
      imageUrl:
        "https://cdns-images.dzcdn.net/images/artist/06ef1107ffce5f68734ebf9690d50d6a/500x500.jpg",
      titleName: "vannda",
    },
    {
      imageUrl:
        "https://yt3.googleusercontent.com/ewO7LMUeJpy38BpkjvQO4xxnbuII82Q-L8wjjs7eSapyxXh3BbqLOrICpmT2i2SbsQsl0Kh5=s900-c-k-c0x00ffffff-no-rj",
      titleName: "G-Davith",
    },
    {
      imageUrl:
        "https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e8224f4f999aad1326f43373a2a7d781",
      titleName: "Travis Scoot",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/BWoZ2a1rLr0GwAQOMDv_wSiAVOIfojPVy1dk6g_5slxviqSFL5YZ-oiuk5lqDmxzZUGmCCusH5gNGgY=w544-h544-p-l90-rj",
      titleName: "Chris Brown",
    },
    {
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds",
      titleName: "Kanye west",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/91BazzuLE+L._UF1000,1000_QL80_.jpg",
      titleName: "SZA",
    },
    {
      imageUrl:
        "https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-1/189080926_309898550588275_8264110849064117025_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lhzFYm0aW40AX_yIl7U&_nc_ht=scontent.fpnh11-1.fna&oh=00_AfCWEznio11HtzIHGRGFmjTn_TjCap3sOsx0XRZ_e8aoFg&oe=661FB500",
      titleName: "Keshi",
    },
    
  ];
  return (
    <div className="row me-0">
      {/* left side */}
      <section className="col-xl-2 d-none d-xxl-block">
        <div style={{ cursor: "pointer" }} className="d-flex mt-4 ps-3">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle  murecho"
            height="40"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <p className="pt-2 ps-2 fw-bold">Ou Soben</p>
        </div>

        <div className="">
          {options.map((Data, index) => {
            return (
              <div key={index} className="">
                <LeftSide optionData={Data} />
              </div>
            );
          })}
          <div className="d-flex">
            {" "}
            <button
              style={{ height: "40px", width: "40px" }}
              className="step ms-3 mt-2"
            >
              <FontAwesomeIcon
                style={{ fontSize: "17px" }}
                icon={faAngleDown}
              />
            </button>
            <p className="pt-3 ps-2 fw-bold">See more</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between ">
            <p className="ms-2">Your shortcuts</p>
            <a
              style={{ textDecorationLine: "none", cursor: "pointer" }}
              className=""
            >
              Edit
            </a>
          </div>
        </div>
        <div className="">
          {OrderOtions.map((Data, index) => {
            return (
              <div key={index} className="">
                <DownLeftSide optionData={Data} />
              </div>
            );
          })}
          <div className="d-flex">
            {" "}
            <button
              style={{ height: "40px", width: "40px" }}
              className="step ms-3 mt-2"
            >
              <FontAwesomeIcon
                style={{ fontSize: "17px" }}
                icon={faAngleDown}
              />
            </button>
            <p className="pt-3 ps-2 fw-bold">See more</p>
          </div>
        </div>
        <div className="p-3">
          <a style={{ fontSize: "small" }} className="text-dark" href="">
            Privacy
          </a>
          <a style={{ fontSize: "small" }} className="text-dark ps-2" href="">
            Team
          </a>
          <a style={{ fontSize: "small" }} className="text-dark ps-2" href="">
            Advetising
          </a>
          <a style={{ fontSize: "small" }} className="text-dark ps-2" href="">
            Ad
          </a>
          <br />
          <a style={{ fontSize: "small" }} className="text-dark" href="">
            Choice
          </a>
          <a style={{ fontSize: "small" }} className="text-dark ps-2" href="">
            Cookies
          </a>
          <a style={{ fontSize: "small" }} className="text-dark ps-2" href="">
            More
          </a>
          <a
            style={{ fontSize: "small", textDecorationLine: "none" }}
            className="text-dark ps-2"
            href=""
          >
            Meta @2024
          </a>
        </div>
      </section>

      {/* middle side */}
      <div className="col-xl-8 mt-3  flex-colomn my-5">
        <section className=" d-flex justify-content-center  ">
          <div style={{ width: "600px" }} className="mt-2 gap-1 d-flex">
            <div
              style={{ height: "230px", width: "150px", cursor: "pointer" }}
              className=" bg-white storyImage"
            >
              <img
                className="img-fluid rounded-top"
                src=" https://i.pinimg.com/564x/d6/87/5a/d6875aed055c4b8433349b89a8370a65.jpg"
                alt=""
              />
              <button
                style={{ height: "35px", width: "35px", cursor: "pointer" }}
                class=" iconStory"
              >
                <FontAwesomeIcon className="text-white" icon={faPlus} />
              </button>
            </div>
            <div
              style={{ height: "230px", width: "150px", cursor: "pointer" }}
              className="storyImage2"
            >
              <img
                src="https://lh3.googleusercontent.com/BWoZ2a1rLr0GwAQOMDv_wSiAVOIfojPVy1dk6g_5slxviqSFL5YZ-oiuk5lqDmxzZUGmCCusH5gNGgY=w544-h544-p-l90-rj"
                class="circle  ms-2 mt-2 murecho"
                height="40"
                alt=""
                loading="lazy"
              />
            </div>
            <div
              style={{ height: "230px", width: "150px", cursor: "pointer" }}
              className="storyImage3"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20Y8ey-KpwhT6yewd8Q3TxGyozYQp45iADA&usqp=CAU"
                class="circle ms-2 mt-2 murecho"
                height="40"
                alt=""
                loading="lazy"
              />
            </div>
            <div
              style={{ height: "230px", width: "150px", cursor: "pointer" }}
              className="storyImage4"
            >
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/618e7d9fdfe79744d793c0c6/0x0.jpg?format=jpg&crop=966,966,x489,y121,safe&height=416&width=416&fit=bounds"
                class="circle ms-2 mt-2 murecho"
                height="40"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <div className="  d-flex justify-content-center mt-4">
          <div style={{ width: "600px" }} className="bg-white rounded border">
            <div className=" d-flex p-2 gap-2 ">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle ms-2 murecho"
                height="40"
                alt=""
                loading="lazy"
              />
              <input
                className="container bg-graylight me-3 rounded-pill form-control"
                type="text"
                style={{ cursor: "pointer" }}
                placeholder="What's on you mind,Soben?"
              />
            </div>
            <hr className="mx-4" />
            <div className="d-flex justify-content-around p-1">
              <button className=" fw-light text-muted btn">
                <FontAwesomeIcon className="" icon={faCamera} color="red" />

                <span className="ps-2"> Live Video </span>
              </button>
              <button className="btn">
                {" "}
                <FontAwesomeIcon
                  className=" "
                  size=""
                  icon={faImage}
                  color="green"
                />
                <span className="ps-2">Photo/video</span>
              </button>

              <button className="btn">
                <FontAwesomeIcon
                  className=""
                  icon={faFaceSmile}
                  color="orange"
                />{" "}
                <span className="ps-2">Feeling/activity</span>{" "}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center mt-3 ">
            <div
              style={{ width: "600px" }}
              className="bg-white rounded border"
            >
              <div className="ps-3 pt-3 d-flex justify-content-between">
                <div className="d-flex">
                  <img
                    src="https://www.acledasecurities.com.kh/as/assets/layout/logo1.png"
                    class="  murecho"
                    height="44"
                    alt=""
                    loading="lazy"
                  />
                  <p className="fw-bolder ps-3">
                    ACLEDA​​ Bank Plc. <br />
                    <span
                      style={{ fontSize: "13px" }}
                      className="text-muted fw-light"
                    >
                      1d .<FontAwesomeIcon icon={faEarthAmericas} />
                    </span>
                  </p>
                </div>
                <a style={{ textDecorationLine: "none" }} href="#">
                  <FontAwesomeIcon
                    className="text-dark fs-4 me-3"
                    icon={faEllipsis}
                  />
                  <FontAwesomeIcon
                    className="text-dark me-3 fs-4"
                    icon={faXmark}
                  />
                </a>
              </div>
              <div className="">
                <p className="ps-2">
                  ជម្រាបជូនអតិថិជនជាទីគោរព ថ្មីៗនេះមានការផ្ញើសារក្លែងបន្លំ
                  ទៅក្នុងទូរសព្ទ (SMS) ឬអុីម៉ែល
                  ដើម្បីប៉ុនប៉ងចូលយកព័ត៌មានគណនីរបស់លោកអ្នក។
                  ដូច្នេះប្រសិនបើលោកអ្នក
                  បានទទួលការស្នើសុំជាបន្ទាន់នូវព័ត៌មានផ្ទាល់ខ្លួន
                  ដើម្បីចូលទៅកាន់គណនីធនាគារ ការស្នើសុំលេខអត្តសញ្ញាណ
                  ឬក៏ដើម្បីបញ្ជាក់នូវព័ត៌មានគណនីធនាគាររបស់លោកអ្នក
                  សូមកុំចុចទៅលើតំណភ្ជាប់ (Link) ដែលទទួលបាននោះ ឬកុំឆ្លើយតប
                  និងផ្ដល់នូវព័ត៌មានផ្ទាល់ខ្លួន ឬព័ត៌មានគណនី ជាដាច់ខាត។{" "}
                  <span className="fw-bold">...see more</span>{" "}
                </p>
                <img
                  style={{ width: "100%" }}
                  className="img-fluid contentImage"
                  src="https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/431014812_815269727305900_5211268723449408080_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsuEYKoayCfEpDkJw7gRGsiGpVmxMsAHaIalWbEywAdm4rRWHAZeAz78NfmDSfxr2q9s4tPxKKXTD2XE1rJJoR&_nc_ohc=Hd2ZdlJYUTcAX_CS5gm&_nc_ht=scontent.fpnh11-2.fna&oh=00_AfA7iZ6J0suF2EiApFKVv9dptdODanpkn8XgZZZsIbL9-Q&oe=65FCF2C7"
                  alt=""
                />
                <div className="pt-2 ps-2 d-flex">
                  <button
                    style={{ height: "20px", width: "20px" }}
                    class=" iconReact "
                  >
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                  <button
                    style={{ height: "20px", width: "20px", cursor: "pointer" }}
                    class=" iconReact bg-danger"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <a
                    style={{ textDecorationLine: "none", cursor: "pointer" }}
                    className="ps-2 text-dark"
                  >
                    2.1k
                  </a>
                  <a
                    style={{ textDecorationLine: "none", cursor: "pointer" }}
                    className="ps-2 text-dark ms-auto me-2"
                  >
                    144 comments 2.2k share
                  </a>
                </div>
                <hr className="mx- my-1" />
                <div className="d-flex ">
                  <button className="btn   container ">
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faThumbsUp} />{" "}
                    </span>
                    Like
                  </button>
                  <button className="btn container px-5 ">
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faComment} />{" "}
                    </span>
                    Comments
                  </button>
                  <button className="btn  container   ">
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faShare} />{" "}
                    </span>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center mt-3 ">
            <div
              style={{ width: "600px", }}
              className="bg-white rounded border"
            >
              <div className="ps-3 pt-3 d-flex justify-content-between">
                <div className="d-flex">
                  <img
                    src="https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-1/369252135_344749128083057_6557489608635682665_n.png?stp=dst-png_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFOuxw3bvqBW1ca161KdI3zRRnBb74gppVFGcFvviCmlZ87EVPuz07RvVNOel44xGqpEy3c8fe-UXQRwJcOjRAY&_nc_ohc=K-0CtBlzs4sAX-c9B3Q&_nc_ht=scontent.fpnh11-2.fna&oh=00_AfAfb8HXW_S_50EmjyuWvMmcfdAT_1zwAoIGvj5HMakkSA&oe=65FD1E06"
                    class=" circle border-primary murecho"
                    height="44"
                    alt=""
                    loading="lazy"
                  />
                  <p className="fw-bolder ps-3">
                    Decathlon Cambodia <br />
                    <span
                      style={{ fontSize: "13px" }}
                      className="text-muted fw-light"
                    >
                      3d .<FontAwesomeIcon icon={faEarthAmericas} />
                    </span>
                  </p>
                </div>
                <a style={{ textDecorationLine: "none" }} href="#">
                  <FontAwesomeIcon
                    className="text-dark fs-4 me-3"
                    icon={faEllipsis}
                  />
                  <FontAwesomeIcon
                    className="text-dark me-3 fs-4"
                    icon={faXmark}
                  />
                </a>
              </div>
               <div className="">
                <p className="ps-2">
                  កំពុងតែស្វែងរកស្បែកជើងរត់ដែលមានគុណភាពល្អនិងមានការផ្តល់ជូននៅការធានាម៉ែនទេ?
                  នៅ Decathlon
                  យើងមានជម្រើសស្បែកជើងកីឡាជាច្រើនសម្រាប់បងប្អូនជ្រើសរើស🏃។
                  ជាពិេសេសគឺមានការផ្តល់ជូនការធានាទៅលើកាវ (របក​ឬរបើកកាវ)
                  និងថ្នេរទៀតផងសម្រាប់ស្បែកជើងរត់🏃។ <br />
                  Ref: <br />
                  <a href="">#decathloncambodia #runningshoes #warranty</a>
                </p>
    
                <div
                  style={{ width: "100%", height: "600px" }}
                  className=" d-flex gap-1 flex-column flex-wrap"
                >
                
                <div
                    style={{ width: "50%", height: "100%" }}
                    className="postImage5"
                  >
                  </div> 
                  <div
                    style={{ width: "49%", height: "198px" }}
                    className="postImage6"
                  ></div>
                  <div
                    style={{ width: "49%", height: "198px" }}
                    className="postImage7"
                  ></div>
                  <div
                    style={{ width: "49%", height: "196px" }}
                    className="postImage8"
                  ></div>
                </div>
                <div className="pt-2 ps-2 d-flex">
                  <button
                    style={{ height: "20px", width: "20px" }}
                    class=" iconReact "
                  >
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                  <button
                    style={{ height: "20px", width: "20px", cursor: "pointer" }}
                    class=" iconReact bg-danger"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <a
                    style={{ textDecorationLine: "none", cursor: "pointer" }}
                    className="ps-2 text-dark"
                  >
                    182
                  </a>
                  <a
                    style={{ textDecorationLine: "none", cursor: "pointer" }}
                    className="ps-2 text-dark ms-auto me-2"
                  >
                    27 comments 19k share
                  </a>
                </div>
                <hr className="mx- my-1" />
                <div className="d-flex ">
                  <button className="btn   container ">
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faThumbsUp} />{" "}
                    </span>
                    Like
                  </button>
                  <button className="btn container px-5 ">
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faComment} />{" "}
                    </span>
                    Comments
                  </button>
                  <button className="btn  container   ">
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faShare} />{" "}
                    </span>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center mt-3 ">
            <div
              style={{ width: "600px" }}
              className=" rounded border bg-white"
            >
              <div className="ps-3 pt-3 d-flex justify-content-between">
                <div className="d-flex">
                  <img
                    src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-1/353819637_580393880900158_5343069299590131672_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEL5n7IMng_4fthLMSO4wUzxaTCcwF2fxTFpMJzAXZ_FL01jq2aLCLvXpoZ-GR9GL2sPKgLYmsJp5OunR2RZg29&_nc_ohc=ghmBpssq7SkAX-9bE72&_nc_ht=scontent.fpnh11-1.fna&oh=00_AfAKclLI8hRel_wVpxYXLv_cBHssjlQ5OQ_yFy8KYWtUbw&oe=65FD3414"
                    class="rounded-circle  murecho"
                    height="44"
                    alt=""
                    loading="lazy"
                  />
                  <p className="fw-bolder ps-3">
                    Metfone <br />
                    <span
                      style={{ fontSize: "13px" }}
                      className="text-muted fw-light"
                    >
                      Sponsored .<FontAwesomeIcon icon={faEarthAmericas} />
                    </span>
                  </p>
                </div>
                <a style={{ textDecorationLine: "none" }} href="#">
                  <FontAwesomeIcon
                    className="text-dark fs-4 me-3"
                    icon={faEllipsis}
                  />
                  <FontAwesomeIcon
                    className="text-dark me-3 fs-4"
                    icon={faXmark}
                  />
                </a>
              </div>
              <div className="">
                <p className="ps-2">
                  ធ្វើអ្វីក៏មិនទាក់ មិនរអាក់រអួលដែរ​ ជាមួយអ៉ីនធឺណិត Wi-Fi
                  ល្បឿនលឿនលើសពីទ្វេដង របស់ Metfone ចំណាយត្រឹមតែ៖ ᯤ $15/ខែ
                  (ទទួលបានល្បឿនអ៉ីនធឺណិត 50Mbps) ᯤ $18/ខែ (ទទួលបានល្បឿនអ៉ីនធឺណិត
                  60Mbps) ᯤ $25/ខែ (ទទួលបានល្បឿនអ៉ីនធឺណិត 85Mbps) ᯤ $35/ខែ
                  (ទទួលបានល្បឿនអ៉ីនធឺណិត 120Mbps) 🚨 បញ្ជាក់៖ 🤙🏻 អតិថិជនចាស់
                  ឬអតិថិជនដែលកំពុងប្រើប្រាស់ក៏ទទួលបានការតំឡើងល្បឿនអ៉ីនធឺណិត Wifi
                  ដូចគ្នា!
                  <span className="fw-bold"> ...see more</span>{" "}
                </p>
                <div
                  style={{ width: "100%", height: "600px" }}
                  className=" d-flex flex-wrap gap-1"
                >
                  <div
                    style={{ width: "49%", height: "50%" }}
                    className="postImage"
                  >
                  </div>
                  <div
                    style={{ width: "50%", height: "50%" }}
                    className="postImage2"
                  ></div>
                  <div
                    style={{ width: "49%", height: "50%" }}
                    className="postImage3"
                  ></div>
                  <div
                    style={{ width: "50%", height: "50%" }}
                    className="postImage4"
                  ></div>
                </div>
                <div className="pt-2 ps-2 d-flex">
                  <button
                    style={{ height: "20px", width: "20px" }}
                    class=" iconReact "
                  >
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                  <button
                    style={{ height: "20px", width: "20px", cursor: "pointer" }}
                    class=" iconReact bg-danger"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <a
                    style={{ textDecorationLine: "none", cursor: "pointer" }}
                    className="ps-2 text-dark"
                  >
                    3.6k
                  </a>
                  <a
                    style={{ textDecorationLine: "none", cursor: "pointer" }}
                    className="ps-2 text-dark ms-auto me-2"
                  >
                    44 comments 91k share
                  </a>
                </div>
                <hr className="mx- my-1" />
                <div className="d-flex ">
                  <button className="btn   container ">
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faThumbsUp} />{" "}
                    </span>
                    Like
                  </button>
                  <button className="btn container px-5 ">
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faComment} />{" "}
                    </span>
                    Comments
                  </button>
                  <button className="btn  container   ">
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faShare} />{" "}
                    </span>
                    Share
                  </button>
                </div> 
              </div> 
            </div>  
          </div>
        </div>
      </div>

      {/* right side */}
      <section style={{overflow: "auto",height:"900px"}} className="  col-xl-2 d-none d-xl-block ">
        <div className="d-flex justify-content-between mt-3">
          <p>Your Pages and profiles</p>
          <a style={{ textDecorationLine: "none" }} href="#">
            Edit
          </a>
        </div>
        <div style={{ cursor: "pointer" }} className="d-flex">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle  murecho"
            height="40"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <p className="pt-2 ps-2 fw-bold">Ou Soben</p>
        </div>
        <div className="d-flex  ">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-announcement-2235195-1872851.png?f=webp"
            class="  murecho"
            height="30"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <p className="ps-3">Switch to Page</p>
        </div>
        <div className="d-flex ">
          <FontAwesomeIcon
            style={{ fontSize: "23px" }}
            icon={faFileCirclePlus}
          />
          <p className="ps-4">Create promotion</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p>Contacts</p>
          <a style={{ textDecorationLine: "none" }} href="#">
            <FontAwesomeIcon className="text-dark  pe-3" icon={faSearch} />
            <span>
              <FontAwesomeIcon className="text-dark" icon={faEllipsis} />
            </span>
          </a>
        </div>
        <div className="mt-1">
          {peopleContact.map((people, index) => {
            return <RightSide peopleData={people} />;
          })}
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p>Conversation</p>
        </div>
        <div className="">
          {peopleConversation.map((people, index) => {
            return <RightSide peopleData={people} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
