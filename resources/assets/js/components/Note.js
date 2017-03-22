import React from 'react';
import {connect} from 'react-redux';
import ActionBar from './ActionBar';
import Table from './Table';
import * as wordAction from '../actions/wordActions';

@connect((store) => {
  return {
    words:store.word.words,
    sortBy: store.word.sortBy,
    coverAll: store.word.coverAll,
  }
})
export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      sortBy: "FTN",
      coverAll: false,
    }
    this.handleSorting = this.handleSorting.bind(this);
    this.handleCovering = this.handleCovering.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(wordAction.fetchWords());
  }

  handleCovering(checkedCoverAll){
    this.setState({
      coverAll:checkedCoverAll
    });
  }  

  handleSorting(sortBy){
    this.setState({
      sortBy:sortBy
    });
  }

  render() {
    return (
      <div className="card-inner margin-bottom-no">
      
        <ActionBar 
          onSorting={this.handleSorting}
          onCovering={this.handleCovering}
          coverAll={this.state.coverAll}
        />
        <Table 
          words={this.props.words} 
          sortBy={this.state.sortBy} 
          coverAll={this.state.coverAll}
        />
      </div>
      );
  }
}