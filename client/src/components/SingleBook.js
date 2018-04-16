import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Image,
  Grid,
  Divider,
  List,
  Button,
  Item
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EditBookForm from "./EditBookForm";
import BookQuote from "./BookQuote";
import SearchBar from "./SearchBar";

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 25px;
`;

const DeleteButtonWrapper = styled.div`
  text-align: center;
  margin: 25px;
`;
const EditButtonWrapper = styled.div`
  text-align: center;
  margin: 25px;
`;

const NewReviewFormWrapper = styled.div``;

class SingleBook extends Component {
  state = {
    book: {},
    showEditBook: false
  };

  componentDidMount() {
    //console.log("singler Reader")
    this.getSingleBook();
  }

  getSingleBook = async () => {
    const bookId = this.props.match.params.id;
    const readerId = this.props.match.params.readerId;
    const res = await axios.get(`/api/readers/${readerId}/books/${bookId}`);
    this.setState({
      book: res.data,
      books: res.data.books
    });
    console.log(res.data);
  };

  deleteBook = async () => {
    const bookId = this.props.match.params.id;
    const readerId = this.props.match.params.readerId;
    await axios.delete(`/api/readers/${readerId}/books/${bookId}`);
    console.log(this.props.match.params.id);
    this.props.history.push("/");
  };

  //Book Edit
  toggleShowEdit = () => {
    this.setState({ showEditBook: !this.state.showEditBook });
  };

  //Update book
  handleSubmit = async e => {
    e.preventDefault();
    const bookId = this.state.book.id;
    const readerId = this.props.match.params.readerId;
    const bookUpdate = { ...this.state.book };
    await axios.patch(`/api/readers/${readerId}/books/${bookId}`, bookUpdate);
    this.toggleShowEdit();
    await this.getSingleBook();
  };
  handleChange = event => {
    const updateBook = { ...this.state.book };
    const attribute = event.target.name;
    updateBook[attribute] = event.target.value;

    this.setState({ book: updateBook });
  };

  render() {
    return (
      //edit book and review form
      <Grid centered>
        <Divider />
        <BookQuote />
        {this.state.showEditBook ? (
          <EditBookForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            book={this.state.book}
          />
        ) : (
          <Card raised>
            <Link to={`/books/${this.state.book.id}`}>
              <Image centered fluid>
                <img src={this.state.book.photo_url} />
              </Image>
            </Link>

            <Card.Header>{this.state.book.title}</Card.Header>
            <Card.Content>
              <h4>{this.state.book.author}</h4>

              <Button negative onClick={this.deleteBook}>
                Delete {this.state.book.title}
              </Button>

              <Button primary onClick={this.toggleShowEdit}>
                Edit Book
              </Button>
            </Card.Content>
          </Card>
        )}

        <Divider />
        <List />
      </Grid>
    );
  }
}

export default SingleBook;
