import React, { Component } from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import Content from './layout/content';
// import Content from './layout/content';

class LayOut extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#fafafa',
        }}
      >
        <Header />
        {/*  <Content /> */}
        <Content />
        <Footer />
      </div>
    );
  }
}

export default LayOut;
