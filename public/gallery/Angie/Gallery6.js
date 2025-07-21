import { Link } from "react-router-dom";
import React, { useState } from "react";
import BGImg6 from "../../assets/img/bg/marble.jpg";
import FsLightbox from "fslightbox-react";
import Img1 from "../../assets/img/gallery/Angie/6.jpg";
import Img2 from "../../assets/img/gallery/Angie/7.jpg";
import Img3 from "../../assets/img/gallery/Angie/8.jpg";
import Img4 from "../../assets/img/gallery/Angie/9.jpg";
import Img5 from "../../assets/img/gallery/Angie/10.jpg";
import Img6 from "../../assets/img/gallery/Angie/11.jpg";
import Img7 from "../../assets/img/gallery/Angie/12.jpg";
import Img8 from "../../assets/img/gallery/Angie/13.jpg";
import Img9 from "../../assets/img/gallery/Angie/14.jpg"
import Img10 from "../../assets/img/gallery/Angie/15.jpg";
import Img11 from "../../assets/img/gallery/Angie/18.jpg";
import Img12 from "../../assets/img/gallery/Angie/27.jpg";
import Img13 from "../../assets/img/gallery/Angie/28.jpg";
import Img14 from "../../assets/img/gallery/Angie/29.jpg";
import Img15 from "../../assets/img/gallery/Angie/30.jpg";
import Img16 from "../../assets/img/gallery/Angie/31.jpg";
import Img17 from "../../assets/img/gallery/Angie/32.jpg";
import Img18 from "../../assets/img/gallery/Angie/33.jpg";
import Img19 from "../../assets/img/gallery/Angie/34.jpg";
// import Img19 from "../../assets/img/gallery/Trisha/j.jpeg";
// import Img16 from "../../assets/img/gallery/img-3214.png";
// import Img17 from "../../assets/img/gallery/img-3215.png";
// import Img18 from "../../assets/img/gallery/img-3218.png";
// import Img19 from "../../assets/img/gallery/img-3309-2.png";
// import Img20 from "../../assets/img/gallery/img-3366.png";
// import Img21 from "../../assets/img/gallery/img-3504.png";
// import Img22 from "../../assets/img/gallery/img-4292.png";
// import Img23 from "../../assets/img/gallery/img-9085.jpg";

const Gallery = () => {
  const [toggler, setToggler] = useState(false);
  const [activeImage, setActiveImage] = useState();
  const [images, setImages] = useState([
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
    Img19
  ]);

  return (
    <>
      {/* <section
        id="work"
        className="pt-120 pb-110 full-screen-gallary"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${BGImg6})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-40 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>Our Gallery</h5>
                <h2>See Our Portfolio</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="masonry-gallery-huge portfolio ">
                <div
                  className="grid col4"
                  style={{ position: "relative", height: "762.75px" }}
                >
                  <div
                    className="grid-item hover-zoomin banking"
                    style={{ position: "absolute", left: "0%", top: "0px" }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(1);
                        }}
                      >
                        <img src={Img1} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin financial"
                    style={{
                      position: "absolute",
                      left: "24.9804%",
                      top: "0px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(2);
                        }}
                      >
                        <img src={Img2} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin financial"
                    style={{
                      position: "absolute",
                      left: "49.9607%",
                      top: "0px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(3);
                        }}
                      >
                        <img src={Img3} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin insurance"
                    style={{
                      position: "absolute",
                      left: "74.9411%",
                      top: "0px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(4);
                        }}
                      >
                        <img src={Img4} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin banking insurance"
                    style={{ position: "absolute", left: "0%", top: "351px" }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(5);
                        }}
                      >
                        <img src={Img5} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin financial"
                    style={{
                      position: "absolute",
                      left: "74.9411%",
                      top: "351px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(6);
                        }}
                      >
                        <img src={Img6} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin financial"
                    style={{
                      position: "absolute",
                      left: "49.9607%",
                      top: "381px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(7);
                        }}
                      >
                        <img src={Img7} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                  <div
                    className="grid-item hover-zoomin financial"
                    style={{
                      position: "absolute",
                      left: "24.9804%",
                      top: "441px",
                    }}
                  >
                    <Link to="#" className="popup-image">
                      <figure
                        className="gallery-image"
                        onClick={() => {
                          setToggler(!toggler);
                          setActiveImage(9);
                        }}
                      >
                        <img src={Img9} alt="img" className="img" />
                      </figure>
                    </Link>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="team-area fix p-relative pt-180 pb-90"
        // style={{ backgroundImage: `url(${BGImg6})` }}
      >                      
      

       <h1 style={{textAlign:"center"}}>Angie's Gallery</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <figure>
                <img src={Img1} alt="" />
              </figure>
            </div>

            <div className="col-lg-4">
              <figure>
                <img src={Img2} alt="" />
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
                <img src={Img3} alt="" />
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
                <img src={Img4} alt="" />
              </figure>
            </div>

            <div className="col-lg-4">
              <figure>
                <img src={Img5}  alt="" />
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
              <img src={Img6} alt="" />
              </figure>
            </div>
            <div className="col-lg-4">
              <figure><img src={Img7} alt="" /></figure>
              
            </div>
            <div className="col-lg-4">
              <figure><img src={Img8} alt="" /></figure>
            </div>
            
            <div className="col-lg-4">
              <figure><img src={Img9} alt="" /></figure>
            </div>
            <div className="col-lg-4">
              <figure><img src={Img10} alt="" /></figure>
            </div>
            <div className="col-lg-4">
              <figure><img src={Img11} alt="" /></figure>
            </div>
            <div className="col-lg-4">
              <figure><img src={Img12} alt="" /></figure>
            </div>
            <div className="col-lg-4">
              <figure><img src={Img13} alt="" /></figure>
            </div>
            <div className="col-lg-4">
              <figure><img src={Img14} alt="" /></figure>
            </div>
            <div className="col-lg-4">
              <figure><img src={Img15} alt="" /></figure>
            </div>
            <div className="col-lg-4">
              <figure><img src={Img16} alt="" /></figure>
            </div>
            <div className="col-lg-4">
              <figure><img src={Img17} alt="" /></figure>
            </div>
            <div className="col-lg-4">
              <figure><img src={Img18} alt="" /></figure>
            </div>
            <div className="col-lg-4">
              <figure><img src={Img19} alt="" /></figure>
            </div>
            
          </div>
        </div>
      </section>
      <FsLightbox toggler={toggler} sources={images} slide={activeImage} />
    </>
  );
};

export default Gallery;