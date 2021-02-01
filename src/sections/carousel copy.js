import React from "react";
import { Box, Container } from "theme-ui";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import img1 from "assets/Tokopedia - Banner - Big Toys Sale-min.png";
import img2 from "assets/banner-image-1-1.png";
import img3 from "assets/banner-image-1-1.png";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => {
  return (
    <Box sx={styles.carousel} id="carousel">
      <Container sx={styles.container}>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={true} // should stop playing on user interaction
          interval={4000}
        >
          <div data-src={img1}>
            <p>I want to see what you got.</p>
          </div>
          <div data-src={img2}>
            <p>The answer is -- Don't think about it.</p>
          </div>
          <div data-src={img3}>
            <p>Sometimes science is more art than science.</p>
          </div>
        </AutoplaySlider>
      </Container>
    </Box>
  );
};

export default Carousel;

const styles = {
  carousel: {
    pt: ["10px", null, null, null, "50px", "100px"],
    pb: ["30px", null, null, null, "40px", null, "0"],
    backgroundColor: "#F6F8FB",
    // overflow: "visible",
    // height: ["30px", null, null, null, "40px", null, "0"],
  },
  container: {
    width: ["1391px", "1392px", "1393px", "1394px", "1395px", "1396px", "1397px"],
  }
};
