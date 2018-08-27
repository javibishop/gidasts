import React, { Component } from 'react';
import PropTypes from  'prop-types';

import '../global/css/App.css';

import Header from '../global/Header'
import Content from '../global/Content'
import Footer from '../global/Footer'

import data from '../data/menu'

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  } 
  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Header title='TS' items={data}/>
        <Content body={children} />
        <Footer title='TS &copy; 2017' />
      </div>
    );
  }
}

export default App;
