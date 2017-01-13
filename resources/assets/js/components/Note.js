import React from 'react'

const uncoverButton = {
    position: 'relative',
};


class ActionBar extends React.Component {
  render() {
    return (
      <div id="action-bar" className="row">
        <div className="checkbox switch dropdown-wrap">
          <label>
            <input className="access-hide" type="checkbox">
            </input>
            <span style={uncoverButton} className="switch-toggle"></span>Uncover All
          </label>
          
          <div className="dropdown dropdown-inline">
            <a className="btn btn-flat dropdown-toggle-btn waves-attach waves-effect" data-toggle="dropdown" aria-expanded="true">Sort
              <span className="icon margin-left-sm">keyboard_arrow_down</span>
            </a>
            <ul className="dropdown-menu nav">
              <li>
                <a className="waves-attach waves-effect" href="javascript:void(0)">From The Newst (Default)</a>
              </li>
              <li>
                <a className="waves-attach waves-effect" href="javascript:void(0)">From The Oldest</a>
              </li>
              <li>
                <a className="waves-attach waves-effect" href="javascript:void(0)">From A to Z</a>
              </li>
              <li>
                <a className="waves-attach waves-effect" href="javascript:void(0)">From Z to A</a>
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

    fetchWords() {
        fetch('/words').then((response) => {
            response.json().then((jsonResponse) => {
                this.setState({
                    words: jsonResponse
                });
            })
        });
    }

    componentDidMount() {
        this.fetchWords();
    }

    flipRow(id){
      console.log(id+" clicked");
      var status  = $(".cover_"+id).is(":visible");

      console.log(status);
      $( ".cover_"+id ).toggle( !status );
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
                    <td className={'cover_'+this.state.words[i].id}>{this.state.words[i].pronunciation}</td>
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
                    <th>Word/Phrase</th>
                    <th>Pronunciation</th>
                    <th>Type</th>
                    <th>Meaning</th>
                    <th>Example</th>
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