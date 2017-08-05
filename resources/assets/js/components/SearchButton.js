import React from 'react'
import {
  connect
}
from 'react-redux'
import axios from 'axios'
import * as wordAction from '../actions/wordActions'
import {
  SubmissionError
}
from 'redux-form'

@connect((store) => {
  return {
    word: store.word.word,
    token: store.login.token,
  }
})
class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search() {
    return axios.get('/api/restricted/dictionary/' + this.props.word.word, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {' + this.props.token + '}',
      }
    }).then((response) => {
      console.log("response", response);
      var result = {};
      this.props.dispatch(wordAction.setWord(result));

    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <p className="text-right">
        <button onClick={this.search} className="text-right btn btn-brand waves-attach waves-light" type="button">Search</button>
      </p>
    )
  }
}

export default connect()(SearchButton)