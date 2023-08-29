import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideContent from "./SlideContent";
import dummyLicense from "../../dummy/dummyLicense.json";
import styled from "styled-components";

const Slide = () => {
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    centerMode: true,
    slidesToShow: 2,
    speed: 500,
  };
  return (
    <div className="container">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <style>{cssstyle}</style>
      <StyledSlider {...settings}>
        {dummyLicense.dummyLicense.map((it) => {
          return (
            <div key={it.license}>
              <SlideContent data={it} />
            </div>
          );
        })}
      </StyledSlider>
    </div>
  );
};

export default Slide;

const ContentBox = styled.div`
  /* background-color: coral; */
  width: 50%;
  height: 100%;
  /* border: 5px solid blue; */
  display: flex;
`;

const StyledSlider = styled(Slider)`
  /* background-color: green; */
  width: 100%;
  height: 100%;
  display: flex;
  /* min-width:50rem; */

  .slick-list {
    //슬라이드 스크린
    width: 90%;
    height: 100%;
    margin: 0 auto;
    /* border: 1px solid black; */
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .slick-track {
    height: 100%;
    /* justify-content: center;
    align-items: center; */
    display: flex;
    /* background-color: pink; */
    /* border: 5px solid black; */
  }

  
  .slick-center {
    display: flex;
    justify-content: center;
  }

  .slick-slide div {
    //슬라이더  컨텐츠(안에 있는 컨텐츠들 싹 다 바꿔 얘가 아주 절대적이야)
    /* display: flex; */
    height: 100%;
  }

  .slick-slide {
    /* border: 1px solid red; */

  }
  .slick-next {
    right: 0;
  }
  
  .slick-prev {
    left: 0;
  }
`;
const cssstyle = `
.container{
  display:flex;
  justify-content:center;
  // background-color: blue;
  width: 100%;
  height: 90%;
}

.slick-next:before, .slick-prev:before {
    color: #888;
}
`;
