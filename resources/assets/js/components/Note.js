import React from 'react'

class ActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.clickCoverSwitch = this.clickCoverSwitch.bind(this);
    this.sortRowsBy = this.sortRowsBy.bind(this);  
  }

  clickCoverSwitch(){
    this.props.onCovering(
      this.checkedCoverAll.checked,
    );
  }

  sortRowsBy(sortBy) {
    this.props.onSorting(
      sortBy,
    );
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
                <a className="waves-attach waves-effect" onClick={this.sortRowsBy.bind(this, "FTN")} href="javascript:void(0)">From The Newst</a>
              </li>
              <li>
                <a className="waves-attach waves-effect" onClick={this.sortRowsBy.bind(this, "FTO")} href="javascript:void(0)">From The Oldest (Default)</a>
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

class WordRow extends React.Component {
  constructor(props) {
    super(props);
    this.flipRow = this.flipRow.bind(this);
  }

  flipRow(id){
    if($(".cover_"+id).hasClass("hide-word")){
      $(".cover_"+id ).removeClass( "hide-word" );
    }else{
      $(".cover_"+id ).addClass( "hide-word" );
    }
  }

  render() {
    var classes = 'cover_'+this.props.word.id;
    if(this.props.coverAll){
      classes += " hide-word";
    }

    return (
      <tr onClick={this.flipRow.bind(this, this.props.word.id)}>
        <td>{this.props.word.word}</td>
        <td className={classes}>{this.props.word.pronunciation}</td>
        <td className={classes}>{this.props.word.type}</td>
        <td className={classes}>{this.props.word.meaning}</td>
        <td className={classes}>{this.props.word.example}</td>
      </tr>
      );
  }
}

class Table extends React.Component {
  render() {
    var rows = [];

    if(this.props.sortBy === "FTN"){
      this.props.words.sort(function(a, b){
        return b.id - a.id;
      });
    }else if(this.props.sortBy === "FTO"){
      this.props.words.sort(function(a, b){
        return a.id - b.id;
      });
    }else if(this.props.sortBy === "FATZ"){
      this.props.words.sort(function(a, b){
        return a.word > b.word;
      });
    }else if(this.props.sortBy === "FZTA"){
      this.props.words.sort(function(a, b){
        return b.word > a.word;
      });
    }else if(this.props.sortBy === "SHFL"){
      var last = this.props.words.length;
      var temp, i;
      while (last) {
        i = Math.floor(Math.random() * last--);
        temp = this.props.words[last];
        this.props.words[last] = this.props.words[i];
        this.props.words[i] = temp;
      }
    }

    this.props.words.forEach((word) =>{
      rows.push(<WordRow key={word.id} word={word} coverAll={this.props.coverAll} />);
    });

    return (
      <div  className="table-responsive">
        <table className="table">
          <thead>
          <tr>
            <th className="word-table-header word">Word/Phrase</th>
            <th className="word-table-header pronunciation">Pronunciation</th>
            <th className="word-table-header type">Type</th>
            <th className="word-table-header meaning">Meaning</th>
            <th className="word-table-header example">Example</th>
          </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
      );
  }
}

/*
  1. Change the state of Table form ActionBar
  2. How to re-render the rows 

  1.
  You cannot change the state of one component from another component. 
  The best you can do is have both of them being children of a parent component, 
  and then pass parameters as a prop. You can then use componentWillReceiveProps(nextProps) to intercept 
  new props coming in (if you want to then modify a state based on that).
  http://stackoverflow.com/questions/38253053/react-update-component-state-from-another-component

  2.
  Check the renderRobotMasters() https://github.com/JoseGonzalez321/react-mega-man-robot-masters/blob/master/src/components/Script.jsx
  RobotMasters - https://github.com/JoseGonzalez321/react-mega-man-robot-masters/blob/master/src/components/RobotMaster.jsx
  Sort button is - https://github.com/JoseGonzalez321/react-mega-man-robot-masters/blob/master/src/Buttons/SortButton.jsx
  Sort button is using Toggle - https://github.com/JoseGonzalez321/react-mega-man-robot-masters/blob/master/src/Buttons/Toggle.jsx


  State is similar to props, but it is private and fully controlled by the component.
  https://facebook.github.io/react/docs/state-and-lifecycle.html
  State is reserved only for interactivity, that is, data that changes over time.
  https://facebook.github.io/react/docs/thinking-in-react.html

  How to determine where to put state
  (https://facebook.github.io/react/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live)
  1.Identify every component that renders something based on that state.
  2.Find a common owner component (a single component above all the components that need the state in the hierarchy).
  3.Either the common owner or another component higher up in the hierarchy should own the state.

  Refer to this
  https://facebook.github.io/react/docs/thinking-in-react.html#step-5-add-inverse-data-flow
  Check the example file too  
*/

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      sortBy: "FTN",
      coverAll: true,
    }
    this.handleSorting = this.handleSorting.bind(this);
    this.handleCovering = this.handleCovering.bind(this);    
  }

  componentDidMount() {
    this.fetchWords();
  }

  fetchWords() {
    fetch('/words').then((response) => {
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
          sortBy={this.state.sortBy} 
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