import React from 'react'
import ActionBar from './ActionBar';
import Table from './Table';

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

  componentDidMount() {
    this.fetchWords();
  }

  fetchWords() {
    fetch('/api/words').then((response) => {
      response.json().then((jsonResponse) => {
        this.setState({
          words: jsonResponse
        });
      })
    });
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
          words={this.state.words} 
          sortBy={this.state.sortBy} 
          coverAll={this.state.coverAll}
        />
      </div>
      );
  }
}