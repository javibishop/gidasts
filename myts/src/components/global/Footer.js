import React, { Component } from 'react';
import './css/Footer.css';
import PropTypes from  'prop-types';

class Footer extends Component {
  static propTypes  = {
    title : PropTypes.string
  }
  render() {
    console.log('render footer')
    const { title = 'TS2017' } = this.props;  
    return (
      <div className="Footer">
          <h1>{title}</h1>
      </div>
    );
  }
}

export default Footer;
