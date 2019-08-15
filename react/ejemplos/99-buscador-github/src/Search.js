import React, { Component } from 'react';

class Search extends Component {
  handleSubmit (e) {
    e.preventDefault();
    this.props.history.push(`/user/${this.refs.userInput.value}`)
  }

  render() {
    return (
      <div className="search-page">
        <h2>Enter a GitHub username</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <input ref="userInput" className="search-page__input" type="text" />
            <button className="search-page__button">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
