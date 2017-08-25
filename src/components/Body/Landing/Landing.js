import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './../Header/Header.js';
import Home from './../../Pages/Home/Home.js';
import Break from './../Break/Break.js';
import Footer from './../Footer/Footer.js';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('LAUNCH SUCCESS!');
  }

  render() {
    return (
      <main>
        <Header/>

          <Home/>
            <Break/>

        <Footer/>
      </main>
    )
  }
}

// <Button value="Submit" className="btn1" onClick={ () => this.handleClick()}/>

export default connect((state) => {
  return {
    props: state.state
  }
}, {})(Landing);