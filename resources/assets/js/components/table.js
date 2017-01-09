import React from 'react'

const divStyle = {
  display: 'inline',
};


class ActionBar extends React.Component {
  render() {
    return (
      <div id="action-bar" className="row">
        <a className="btn btn-flat waves-attach">Display/Hide  Explanations</a>
        <div style={divStyle} className="dropdown-wrap">
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

class WordRow extends React.Component {
  render() {
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
              <tr>
                <td>pronunciation</td>
                <td>prəˌnʌnsɪˈeɪʃ(ə)n</td>
                <td>noun - C/U</td>
                <td>the way in which a word is pronounced.</td>
                <td>I haven't learned proper pronunciation of French words.</td>
              </tr>
            </tbody>
          </table>
      </div>
      );
  }
}

class Table extends React.Component {
  render() {
    return (
      <div className="card-inner margin-bottom-no">
        <ActionBar />
        <WordRow />
      </div>
      );
  }
}

export default Table;