import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Card,
  icon,
  Image,
  Container,
  Tranistion,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NewReaderForm from "./NewReaderForm";
import SearchBar from "./SearchBar";

const FlexCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
`;

const CardWrapper = styled.div`
  padding: 5px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 25px;
`;

const TextWrapper = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  color: navy;
  text-align: center;
  padding: 50px;
`;

class ReaderList extends Component {
  state = {
    books:[],
    readers: [],
    ReaderFormOpen: false,
    newReader: {
      name: "",
      location: "",
      photo_url: ""
    },
    error: ""
  };

  componentDidMount() {
    // Initiate API call to Rails
    // When successful, update the state
    this.getAllReaders();
    this.getAllBooks();
  }

  getAllReaders = async () => {
    try {
      const response = await axios.get("/api/readers");
      this.setState({ readers: response.data });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };
  //search 

  getAllBooks = async () => {
    try {
 //const readersId = this.
  const response = await axios.get(`/api/books`);
      this.setState({ books:response.data })
    } catch(err) {
      console.log(err);
      this.setState({ err:err.message})
    }
 }




  toggleNewReaderForm = () => {
    this.setState({ readerFormOpen: !this.state.readerFormOpen });
  };

  handleChange = event => {
    const newReader = { ...this.state.newReader };
    const attribute = event.target.name;
    newReader[attribute] = event.target.value;

    this.setState({ newReader: newReader });
  };

  createNewReader = async e => {
    e.preventDefault();
    const response = await axios.post("/api/readers", this.state.newReader);
    const readers = [...this.state.readers, response.data];
    this.setState({
      readers,
      newReader: {
        name: "",
        location: "",
        photo_url: ""
      }
    });
  };

  render() {
    return (
      <Container>
         <SearchBar books = {this.state.books}/> 
        <TextWrapper>
          <h1>All Reading Bees</h1>
          <p>
            Welcome to Reading Bee. Here you can share and discuss your favorite
            books, you've been reading like a busy bee.
          </p>
        </TextWrapper>
        <CardWrapper>
          <FlexCards>
            {this.state.readers.map(reader => {
              return (
                <Card style={{ padding: "10px" }} key={reader.id}>
                  <Link to={`/readers/${reader.id}`}>
                    <Image src={reader.photo_url} />
                    <Card.Content>
                      <Card.Header>READING BEE:{reader.name}</Card.Header>
                      <Card.Meta>BEE HIVE AT:{reader.location}</Card.Meta>
                      <Card.Meta>BEE TYPE:{reader.bio}</Card.Meta>
                      <Card.Meta>BEE FRENZY:{reader.favorite_genre}</Card.Meta>
                    </Card.Content>
                  </Link>
                </Card>
              );
            })}
          </FlexCards>
        </CardWrapper>
        {this.state.err}
        <ButtonWrapper>
          <Button primary onClick={this.toggleNewReaderForm}>
            Create New Reader
          </Button>
          {this.state.readerFormOpen ? (
            <NewReaderForm
              createNewReader={this.createNewReader}
              handleChange={this.handleChange}
              newReader={this.state.newReader}
            />
          ) : null}
        </ButtonWrapper>
      </Container>
    );
  }
}

export default ReaderList;
