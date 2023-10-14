import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import SlideContent from "./SlideContent";

//Slide: Component for Implementing the License Page using the React Slick
const Slide = () => {
  //using recoil to add slide content in Slide component
  const [data, setData] = useState([]);
  useEffect(() => {
    let completed = false;

    async function get() {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/file/license`,
        { withCredentials: true },
      );
      if (!completed) {
        setData(result.data);
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
    <StSlide>
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
      <StyledSlider {...settings}>
        {data.map((it) => {
          return (
            <div key={it.license}>
              <SlideContent data={it} />
            </div>
          );
        })}
      </StyledSlider>
    </StSlide>
  );
};

export default Slide;

const StSlide = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledSlider = styled(Slider)`
  display: flex;
  width: 100%;
  height: 100%;
  .slick-list {
    //slide screen
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-center {
    div .StSlide {
      border: 2px solid #7da9db;
    }
  }

  .slick-slide div {
    height: 100%;
  }

  .slick-next {
    right: 0;
  }

  .slick-prev {
    left: 0;
  }

  .slick-next:before,
  .slick-prev:before {
    color: #888;
  }
`;
