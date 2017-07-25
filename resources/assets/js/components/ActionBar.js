import React from 'react';
import {
  connect
}
from 'react-redux';
import * as wordAction from '../actions/wordActions';
import * as coverAction from '../actions/coverActions';

@connect((store) => {
  return {
    coverAll: store.cover.coverAll,
  }
})
export default class ActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.clickCoverSwitch = this.clickCoverSwitch.bind(this);
    this.sortRowsBy = this.sortRowsBy.bind(this);
  }

  clickCoverSwitch() {
    this.props.dispatch(coverAction.clickCoverSwitch(this.checkedCoverAll.checked));
  }

  sortRowsBy(order) {
    this.props.dispatch(wordAction.sortWords(order));
  }

  render() {
    return (
      <div id="action-bar" className="row">
        <div className="checkbox switch dropdown-wrap">
          <label>
            <input onClick={this.clickCoverSwitch} defaultChecked={this.props.coverAll} ref={(input) => this.checkedCoverAll = input} className="access-hide" type="checkbox" id="cover-switch">
            </input>
            <span className="switch-toggle uncover-button"></span>COVER ALL {this.props.coverAll}
          </label>
          
          <div className="dropdown dropdown-inline">
            <a className="btn btn-flat dropdown-toggle-btn waves-attach waves-effect" data-toggle="dropdown" aria-expanded="true">Sort
              <span className="icon margin-left-sm">keyboard_arrow_down</span>
            </a>
            <ul className="dropdown-menu nav">
              <li>
                <a className="waves-attach waves-effect" onClick={this.sortRowsBy.bind(this, "FN")} href="javascript:void(0)">From The Newst</a>
              </li>
              <li>
                <a className="waves-attach waves-effect" onClick={this.sortRowsBy.bind(this, "FO")} href="javascript:void(0)">From The Oldest (Default)</a>
              </li>
              <li>
                <a className="waves-attach waves-effect" onClick={this.sortRowsBy.bind(this, "FATZ")} href="javascript:void(0)">From A to Z</a>
              </li>
              <li>
                <a className="waves-attach waves-effect" onClick={this.sortRowsBy.bind(this, "FZTA")} href="javascript:void(0)">From Z to A</a>
              </li>
              <li>
                <a className="waves-attach waves-effect" onClick={this.sortRowsBy.bind(this, "SHFL")} href="javascript:void(0)">Shuffle</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}