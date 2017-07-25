import React from 'react';
import {
  connect
}
from 'react-redux';
import ActionBar from './ActionBar';
import Table from './Table';
import * as wordAction from '../actions/wordActions';

@connect((store) => {
  return {
    words: store.word.words,
    sortBy: store.word.sortBy,
  }
})
export default class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(wordAction.fetchWords());
  }

  render() {
    return (
      <div className="card-inner margin-bottom-no">
        <ActionBar />
        <Table 
          words={this.props.words} 
          sortBy={this.props.sortBy} 
        />
      </div>
    );
  }
}