import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideContent from "./SlideContent";
import dummyLicense from "../../dummy/dummyLicense.json";
import styled from "styled-components";

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

.container{
  width: 95%;
  height: 100%;
}

.slick-next:before, .slick-prev:before {
    color: #555;
}
`;
