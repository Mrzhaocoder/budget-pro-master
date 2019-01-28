import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './layout/header';
import Footer from './layout/footer';
import Content from './layout/content';

class LayOut extends Component {
  render() {
    return (
      <Provider store={store}>
        <div
          style={{
            backgroundColor: '#fafafa',
          }}
        >
          <Header />
          <Content />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default LayOut;
