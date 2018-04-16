import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class BookQuote extends Component {
  state = {
    randomQuote: []
  };

  componentDidMount() {
    axios.get("https://talaikis.com/api/quotes/random/").then(res => {
      this.setState({
        randomQuote: res.data
      });
    });
  }

  render() {
    if (this.state.randomQuote.length == 0) {
      return <div />;
    }
    return (
      <QuoteWrapper>
        <h3>"{this.state.randomQuote.quote}"</h3>
        <p>- {this.state.randomQuote.author}</p>
      </QuoteWrapper>
    );
  }
}

export default BookQuote;

const QuoteWrapper = styled.div`
  margin: 10px;
`;
