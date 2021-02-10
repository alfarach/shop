import React, { useRef } from 'react';
import { Box, Container } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Swiper from 'react-id-swiper';
import SwiperCore, { Navigation } from 'swiper';

import ProductCard from 'components/product-card';
// import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import featureImage1 from 'assets/tutorial-1-1.png';
import featureImage2 from 'assets/tutorial-1-2.png';
import featureImage3 from 'assets/tutorial-1-3.png';
import illustration from 'assets/images/subscribe-bg.png';
// import { withRouter } from 'next/router';

const FeatureData = [
  {
    image: featureImage1,
    title: 'Fisher Price - Push Walker',
    comments: '22 Comments',
    path: '/',
    price: 320000,
    discount: 5,
  },
  {
    image: featureImage2,
    title: 'Fisher Price - Rocker Bouncher metal test untuk kata panjang',
    comments: '15 Comments',
    path: '/',
    price: 450000,
    discount: 0,
  },
  {
    image: featureImage3,
    title:
      'ELC - Piano',
    comments: '12 Comments',
    path: '/',
    price: 25000,
    discount: 0,
  },
  {
    image: featureImage1,
    title: 'Fisher Price - Play Gym',
    comments: '22 Comments',
    path: '/',
    price: 32000,
    discount: 20,
  },
  {
    image: featureImage2,
    title: 'Hot Wheels - Double Loop Dash',
    comments: '15 Comments',
    path: '/',
    price: 250000,
    discount: 30,
  },
  {
    image: featureImage3,
    title:
      'Emco - Briks',
    comments: '12 Comments',
    path: '/',
    price: 25000,
    discount: 10,
  },
  {
    image: featureImage1,
    title: 'Sarung - BHS Classics',
    comments: '22 Comments',
    path: '/',
    price: 450000,
    discount: 10,
  },
  {
    image: featureImage2,
    title: 'Kacamata - Anti Blue Ray',
    comments: '15 Comments',
    path: '/',
    price: 15000,
    discount: 20,
  },
];

const Feature = () => {
  const ref = useRef(null);
  // const goNext = () => {
  //   if (ref.current !== null && ref.current.swiper !== null) {
  //     ref.current.swiper.slideNext();
  //   }
  // };

  // const goPrev = () => {
  //   if (ref.current !== null && ref.current.swiper !== null) {
  //     ref.current.swiper.slidePrev();
  //   }
  // };
  const params = {
    effect: 'fade',
    loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      376: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
    },
  };
  SwiperCore.use([Navigation]);
  return (
    <Box sx={styles.features} id="products">
      <Container sx={styles.container}>
        <BlockTitle
          // slogan="Baby Toys"
          title="Baby Toys"
          styles={styles.blockTitle}
        />
        {/* <Box sx={styles.carouselBtns}>
          <button aria-label="left btn" onClick={goPrev}>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={goNext} aria-label="right btn">
            <FaLongArrowAltRight />
          </button>
        </Box> */}
        <Swiper {...params}>
          {FeatureData.map((feature, index) => (
            <div className="swiper-slider" key={`feature-card-key${index}`}>
              <ProductCard
                image={feature.image}
                title={feature.title}
                path={feature.path}
                price={feature.price}
                discount={feature.discount}
                finalprice={feature.price - (feature.price * (feature.discount/100))}
              />
            </div>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Feature;

const styles = {
  container: {
    display: "block",
    alignItems: "center",
    width: [null, null, null, null, null, null, "1390px"],
    "@media screen and (max-width: 960px)": {
      justifyContent: "space-between",
    },
  },
  Swipper:{
    '.swiper-button-prev':{
      color: 'white',
    }
  },
  blockTitle: {
    textAlign: 'left',
  },
  features: {
    background: [
      'none',
      null,
      null,
      `#F8F0EA url(${illustration}) no-repeat center bottom / contain`,
    ],
    pt: ['80px', null, null, null, null, null, '0px'],
    // pb: ['80px', null, null, null, '170px'],
    // pt: ['80px', null, null, null, null, null, '0'],
    pb: ['80px', null, null, null, '10px'],
    backgroundColor: '#F8FAFC',
    '.swiper-slider': {
      overflowY: 'visible',
      overflowX: 'visible',
    },
  },
  carouselBtns: {
    // display: ['flex', null, null, null, null, 'block'],
    justifyContent: 'center',
    alignItems: 'center',
    button: {
      border: 'none ',
      outline: 'none',
      backgroundColor: 'transparent',
      fontSize: [4, null, 6, null, 7],
      color: '#000',
      width: 'auto',
      padding: [0],
      margin: '0 5px',
      mt: '50px',
      transition: '300ms',
      '&:hover, &:active, &:focus': {
        color: 'primary',
      },
    },
  },
};
