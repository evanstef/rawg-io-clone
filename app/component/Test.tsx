import React from "react";
import Slider from "react-slick";

function Fade() {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg" />
        </div>
        <div>
          <img src="https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg" />
        </div>
        <div>
          <img src="https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
