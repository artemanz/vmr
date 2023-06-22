import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "./Block23Slide.scss";
import Block2 from "../../components/Block2/Block2";
import Block34 from "../../components/Block34/Block34";

const responsive = {
    0: { items2: 1 },
  };
  
const items5 = [
  <Block34  className="item5 item31" data-value="1"/>,
    <Block2  className="item5" data-value="2"/>
  ];



const Block23Slide = () => {
  return (
    <div>
      <AliceCarousel
        disableButtonsControls=" false"
        infinite="true"
        mouseTracking
        items={items5}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default Block23Slide;
