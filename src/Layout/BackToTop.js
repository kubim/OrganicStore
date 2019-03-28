import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import addjs from '../jslib/jslib';
class BackToTop extends Component {
  render() {
    return (
      <div className="btn-back-to-top bg0-hov" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <span className="lnr lnr-chevron-up" />
        </span>
      </div>
    );
  }
}
export default BackToTop