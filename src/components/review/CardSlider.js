import styled from "styled-components";
import { COLOR } from "../../styles/color";
import Slider from "react-slick";
import icons from "./ItemIcons";
import { fontSize, style } from "@mui/system";

export const CardSlider = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <StCardSlider>
      <SliderContainer {...settings}>
        {icons.map((it) => (
          <CardItem key={it}>{it}</CardItem>
        ))}
      </SliderContainer>
    </StCardSlider>
  );
};

const StCardSlider = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
`;
const SliderContainer = styled(Slider)`
  display: flex;
  width: 100%;
  height: 100%;
  .slick-slide {
    display: flex;
    //slide content
    position: relative;
    /* display: inline-block; */
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 1.2rem;
    background-color: ${COLOR.MAIN_HOVER};
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

const CardItem = styled.div`
  width: 10rem;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
