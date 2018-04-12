import React, { Component } from "react";
import axios from "axios";
import { Card, Image, Grid, Divider, List, Button,Item } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EditBookForm from "./EditBookForm";

class SingleBook extends Component {
  state = {
    book: {},
    reviews: [],
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
    await axios.delete(`/api/books/${bookId}`);
    console.log(this.props.match.params.id);
    this.props.history.push("/");
  };

  toggleShowEdit = () => {
    this.setState({ showEditBook: !this.state.showEditBook });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const bookId = this.state.book.id;
    const bookUpdate = { ...this.state.book };
    await axios.patch(`/api/books/${bookId}`, bookUpdate);
    this.toggleShowEdit();
    await this.getSingleBook();
  };

  handleChange = e => {
    const book = e.target.name;
    const newBook = { ...this.state.book };
    newBook[book] = e.target.value;
    this.setState({ book: newBook });
  };

  render() {
    return (
      <Grid centered>
        <Divider />
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
        <List>
          {this.state.reviews.map(review => {
            return (
              <Item key={review.id}>
 <Item>
 
      <Item.Image size='tiny' src={review.content} />
  <Item.Content HorizontalAlign='middle'>Title:{review.content}</Item.Content>
  
    </Item>

   </Item>
  

              
            );
          })}
        </List>
      </Grid>
    );
  }
}

export default SingleBook;
