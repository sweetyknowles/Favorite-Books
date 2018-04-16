import React, { Component } from "react";
import SingleBook from "./SingleBook";
import ReaderList from "./ReaderList";

// Will be working on this.

class SearchBar extends Component {
  state = {
    search: ""
  };

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredBooks = this.props.books.filter(book => {
      return;
      book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <ul>
          {filteredBooks.map(book => {
            return <SingleBook book={book} key={book.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
