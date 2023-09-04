import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideContent from "./SlideContent";
import styled from "styled-components";
import axios from "axios";

const Slide = () => {
  const [data, setData] = useState([]);
  const [pickLi, setPickLi] = useState("");

  // const onClick = () => {
  //   console.log("in Slide: ", pickLi);
  // };
  useEffect(() => {
    let completed = false;

    async function get() {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/file/license`
      );
      if (!completed) {
        setData(result.data);
        console.log(result.data);
      }
    }
    get();
    return () => {
      completed = true;
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    draggable: false,
    className: "center",
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
        {data.map((it) => {
          return (
            <div key={it.license}>
              <SlideContent data={it} pickLi={pickLi} setPickLi={setPickLi}/>
            </div>
          );
        })}
      </StyledSlider>
    </div>
  );
};

export default Slide;

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
    height: 90%;
    /* justify-content: center;
    align-items: center; */
    display: flex;
    /* background-color: pink; */
  }

  .slick-center {
    div .StSlide {
      border: 2px solid #7da9db;
    }
  }
  


  .slick-slide div {
    //슬라이더  컨텐츠(안에 있는 컨텐츠들 싹 다 바꿔 얘가 아주 절대적이야)
    /* display: flex; */
    height: 100%;
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
