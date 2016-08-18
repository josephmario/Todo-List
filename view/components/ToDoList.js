import React, {Component} from 'react';
import Header from './Navigation';
import Body from './Body';
import Footer from './Footer';
import { Link } from 'react-router';


export default class Home extends React.Component {
  render()
  {
    return (
      <div className="container">
        <Header />
        <Body />
        <Footer />
        {this.props.children}
      </div>
    );
  }
}
