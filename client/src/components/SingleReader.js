import React, { Component } from "react";
import axios from "axios";
import { Card, Image, Grid, Divider, List, Button,Item } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import EditReaderForm from "./EditReaderForm";
import NewBookForm from'./NewBookForm'



const ButtonWrapper = styled.div`
text-align: center;
margin: 25px;
`

class SingleReader extends Component {
  state = {
    reader: {},
    books: [],
    BookFormOpen: false,
    newBook: {
      title: '',
      author: '',
      publish: '',
      genre:'',
      synopis:'',
      photo_url: ''
       },
       showEditReader: false,
  }
  

  componentDidMount() {
    //console.log("singler Reader")
    this.getSingleReader();
  }

  getSingleReader = async () => {
    const readerId = this.props.match.params.id;
    const res = await axios.get(`/api/readers/${readerId}`);
    this.setState({
      reader: res.data,
      books: res.data.books
    });
    console.log(res.data);
  };

  deleteReader = async () => {
    const readerId = this.props.match.params.id;
    await axios.delete(`/api/readers/${readerId}`);
    console.log(this.props.match.params.id);
    this.props.history.push("/");
  };

  toggleShowEdit = () => {
    this.setState({ showEditReader: !this.state.showEditReader });
  };
//new book form 
  toggleNewBookForm = () => {
    this.setState({ bookFormOpen: !this.state.bookFormOpen })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const readerId = this.state.reader.id;
    const readerUpdate = { ...this.state.reader };
    await axios.patch(`/api/readers/${readerId}`, readerUpdate);
    this.toggleShowEdit();
    await this.getSingleReader();
  };

  handleChange = e => {
    const reader = e.target.name;
    const newReader = { ...this.state.reader };
    newReader[reader] = e.target.value;
    this.setState({ reader: newReader });
  };

  render() {
    return (
      <Grid centered>
        <Divider />
        {this.state.showEditReader ? (
          <EditReaderForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            reader={this.state.reader}
          />
        ) : (
          <Card raised>
            <Link to={`/readers/${this.state.reader.id}`}>
              <Image centered fluid>
                <img src={this.state.reader.photo_url} alt="" />
              </Image>
            </Link>
            <Card.Header>{this.state.reader.name}</Card.Header>
            <Card.Content>
              <h4>{this.state.reader.location}</h4>
              <Button negative onClick={this.deleteReader}>
                Delete {this.state.reader.name}
              </Button>
              <Button primary onClick={this.toggleShowEdit}>
                Edit Reader
              </Button>
            </Card.Content>
          </Card>
        )}

        <Divider />
        <List>
          {this.state.books.map(book => {
            return (
              <Item key={book.id}>
 <Item>
 <Link to={`/books/${book.id}`}/>
      <Item.Image size='small' src={book.photo_url} />

  <Item.Content HorizontalAlign='middle'>Title:{book.title}</Item.Content>
  <Item.Content HorizontalAlign='middle'>Author:{book.author}</Item.Content>
  <Item.Content HorizontalAlign='middle'>Published:{book.publish}</Item.Content>
  <Item.Content HorizontalAlign='middle'>Genre:{book.genre}</Item.Content>
  <Item.Content HorizontalAlign='middle'>Synopis:{book.synopis}</Item.Content>
    </Item>

   
  <ButtonWrapper>
  <Button primary onClick={this.toggleNewBookForm}>
    Create New Book
  </Button>
  { this.state.bookFormOpen ? <NewBookForm createNewBook={this.createNewBook} handleChange={this.handleChange} newReader={this.state.newReader}/> : null} 
  </ButtonWrapper>
  </Item>

              
            );
          })}
        </List>
      </Grid>
    );
  }
}

export default SingleReader;
