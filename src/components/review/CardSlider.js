import styled from "styled-components";
import { COLOR } from "../../styles/color";
import Slider from "react-slick";

export const CardSlider = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <StCardSlider>
      <SliderContainer {...settings}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </SliderContainer>
    </StCardSlider>
  );
};

const StCardSlider = styled.div`
  display: flex;
  width: 100%;
  /* overflow: hidden; */
`;
const SliderContainer = styled(Slider)`
  display: flex;
  width: 100%;
  height: 100%;
  .slick-slide {
    position: relative;
    /* display: inline-block; */
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .slick-list {
    //slide screen
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .slick-track {
    display: flex;
    height: 100%;
    gap: 2rem;
  }
`;
const Item = styled.div`
  width: 10rem;
  height: 10rem;
  /* border: 0.1rem solid red; */
  border-radius: 2rem;
  background-color: ${COLOR.MAIN_HOVER};
`;
