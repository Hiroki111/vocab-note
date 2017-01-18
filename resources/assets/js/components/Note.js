import React from 'react'

const uncoverButton = {
    position: 'relative',
};

class ActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverSwitch: false,
      value: 1
    };
    this.clickCoverSwitch = this.clickCoverSwitch.bind(this);
    this.sortRows = this.sortRows.bind(this);    
  }

  clickCoverSwitch(){
    if(this.state.coverSwitch){
        $('[class^="cover_"]').removeClass( "hide-word" );
      }else{
        $('[class^="cover_"]').addClass( "hide-word" );
    }
    this.setState((prevState) => ({ coverSwitch: !prevState.coverSwitch}));    
  }

  sortRows(condition){
    //this.setState({value: event.target.value});
    console.log(condition);
  }

  render() {
    return (
      <div id="action-bar" className="row">
        <div className="checkbox switch dropdown-wrap">
          <label>
            <input onClick={this.clickCoverSwitch} defaultChecked={this.state.coverSwitch} className="access-hide" type="checkbox" id="cover-switch">
            </input>
            <span style={uncoverButton} className="switch-toggle"></span>Cover All {this.state.coverSwitch}
          </label>
          
          <div className="dropdown dropdown-inline">
            <a className="btn btn-flat dropdown-toggle-btn waves-attach waves-effect" data-toggle="dropdown" aria-expanded="true">Sort
              <span className="icon margin-left-sm">keyboard_arrow_down</span>
            </a>
            <ul className="dropdown-menu nav">
              <li>
                <a className="waves-attach waves-effect" value={1} onClick={this.sortRows.bind(this, "FTN")} href="javascript:void(0)">From The Newst (Default)</a>
              </li>
              <li>
                <a className="waves-attach waves-effect" value={2} onClick={this.sortRows.bind(this, "FTO")} href="javascript:void(0)">From The Oldest</a>
              </li>
              <li>
                <a className="waves-attach waves-effect" value={3} onClick={this.sortRows.bind(this, "FATZ")} href="javascript:void(0)">From A to Z</a>
              </li>
              <li>
                <a className="waves-attach waves-effect" value={4} onClick={this.sortRows.bind(this, "FZTA")} href="javascript:void(0)">From Z to A</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: {}
        }
        this.flipRow = this.flipRow.bind(this);
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

    flipRow(id){
      if($(".cover_"+id).hasClass("hide-word")){
        $(".cover_"+id ).removeClass( "hide-word" );
      }else{
        $(".cover_"+id ).addClass( "hide-word" );
      }
    }

    /*
    <input class="filter" type="radio" value="open">Eligible</input>

    document.querySelectorAll(".filter").forEach(function(item) {
      item.addEventListener("click", filterStudents);
    });
    function filterStudents() {
      window.location = window.location.pathname + "?status="+this.value;
    }
    */

    render() {
      var rows = [];
      for (var i = 0; i < this.state.words.length; i++) {
        rows.push(<tr onClick={this.flipRow.bind(this, this.state.words[i].id)} key={this.state.words[i].id}>
                    <td>{this.state.words[i].word}</td>
                    <td className={'cover_'+this.state.words[i].id, 'another-Class'} className="another-Class">{this.state.words[i].pronunciation}</td>
                    <td className={'cover_'+this.state.words[i].id}>{this.state.words[i].type}</td>
                    <td className={'cover_'+this.state.words[i].id}>{this.state.words[i].meaning}</td>
                    <td className={'cover_'+this.state.words[i].id}>{this.state.words[i].example}</td>
                  </tr>);
      }

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

export default class Note extends React.Component {
    render() {
        return (
            <div className="card-inner margin-bottom-no">
              <ActionBar />
              <Table />
          </div>
            );
    }
}