import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideContent from "./SlideContent";
import dummyLicense from "../../dummy/dummyLicense.json";

const Slide = () =>{
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50rem",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="container">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <style>{cssstyle}</style>
      <Slider {...settings}>
        {dummyLicense.dummyLicense.map((it)=>{
          return(
            <div key={it.license}>
              <SlideContent data={it}/>
              <button>Review and Submit</button>
            </div>
          );
        })
        }
      </Slider>
    </div>
  );
};

export default Slide;

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0rem 0rem 4rem 4rem;
  width: 90rem;
}

.slick-next:before, .slick-prev:before {
    color: #000;
}
.center .slick-center h3 {
    color: #ff0000;
    opacity: 1;
    width: 35rem;
    height: 40rem;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
}
.center h3 {
    transition: all .3s ease;
}
`;
