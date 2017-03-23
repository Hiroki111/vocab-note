import React from 'react'
import WordRow from './WordRow';

export default class Table extends React.Component {
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
        if(a.word.toLowerCase() < b.word.toLowerCase()) return -1;
        if(a.word.toLowerCase() > b.word.toLowerCase()) return 1;
        return 0;
      });
    }else if(this.props.sortBy === "FZTA"){
      this.props.words.sort(function(a, b){
        if(a.word.toLowerCase() > b.word.toLowerCase()) return -1;
        if(a.word.toLowerCase() < b.word.toLowerCase()) return 1;
        return 0;
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
