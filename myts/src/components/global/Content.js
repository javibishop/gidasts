import React, { Component } from 'react';
import PropTypes from  'prop-types';

import './css/Content.css';

class Content extends Component {

  static propTypes = {
    body: PropTypes.object.isRequired
  } 

  render() {
    const {body} = this.props;

    return (
      <div className="Content">
          {body}
      </div>
    );
  }
}
export default Content;
/*
class Content extends Component {
  constructor(){
    super();
    this.state = {
      count:0
    };
    this.handleAddClick = this.handleAddClick.bind(this);
  }
  componentDidMount() {
    this.setState({
      count: 1
    });
  }

  handleAddClick(e){
    if(e.target.id === "add"){
      this.setState({
        count: this.state.count + 1
      });
    }
    console.log("click add");
  }
  render() {
    console.log('render content')
    return (
      <div className="Content">
          <h1>{this.state.count}</h1>
          <button id="add" onClick={this.handleAddClick}>+</button> 
      </div>
    );
  }
}
*/

