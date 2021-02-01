import React from 'react';
import { Slider, ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
// import Carousel from 'sections/carousel';
import Services from 'sections/services';
// import Testimonials from 'sections/testimonials';
// import CustomerSupport from 'sections/customer-support';
import Feature from 'sections/feature';
// import VideoOne from 'sections/video-one';
import CallToAction from 'sections/call-to-action';
// import BoostAgencies from 'sections/boost-agencies';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/blog';
import Products from 'sections/products';

import WorkFlow from 'sections/workflow';
// import Promo from 'sections/promo';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="ALFARACH - Menjual berbagai macam barang branded 100% authentic, dengan harga murah" />
          {/* <Promo /> */}
          {/* <Carousel /> */}
          <Banner />   
          <Products />             
          <Blog />    
          <WorkFlow />
          <Services />
          {/* <BoostAgencies />
          <VideoOne />
          <Testimonials />
          <CustomerSupport /> */}
          <Feature />
          <CallToAction />
          <SubscribeUs />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
