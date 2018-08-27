import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';
import {Link} from 'react-router-dom'
import PropTypes from  'prop-types';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    console.log('render header')
    console.log(this.props);
    const {title, items} = this.props;

    return (
      <div className="Header">
        <header className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h1 className="Header-title">{title}</h1>
          <ul className="Menu">
            {items && items.map((item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
