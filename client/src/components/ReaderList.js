import React, { Component } from 'react'
import axios from 'axios'
import { Modal,Button,Card, Image, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NewReaderForm from './NewReaderForm'

const FlexCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
`

class ReaderList extends Component {
  state = {
    readers: [],
    ReaderFormOpen: false,
    newReader: {
      name: '',
      location: '',
      photo_url: ''
       },
    error: ''
  }
  

  componentDidMount () {

    // Initiate API call to Rails
    // When successful, update the state
    this.getAllReaders()
  }

  getAllReaders = async () => {
    try {
      const response = await axios.get('/api/readers')
      this.setState({ readers: response.data})
    } catch (err) {
      console.log(err)
      this.setState({ err: err.message })
    }

  }
  toggleNewReaderForm = () => {
    this.setState({ readerFormOpen: !this.state.readerFormOpen })
  }

  handleChange = (event) => {
    const newReader = { ...this.state.newReader }
    const attribute = event.target.name
    newReader[ attribute ] = event.target.value

    this.setState({ newReader: newReader })
  }

  createNewReader = async (e) => {
    e.preventDefault()
    const response = await axios.post('/api/readers', this.state.newReader)
    const readers = [ ...this.state.readers, response.data ]
    this.setState({
      readers,
      newReader: {
        name: '',
        location: '',
        photo_url: ''
      }
    })
  }
  render () {
    return (
      <Container>
        <h1>All Readers</h1>
        <Button primary onClick={this.toggleNewReaderForm}>
          Create New Reader
        </Button>
        { this.state.readerFormOpen ? <NewReaderForm createNewReader={this.createNewReader} handleChange={this.handleChange} newReader={this.state.newReader}/> : null} 
        <FlexCards>
          {this.state.readers.map(reader => {
            return (
              <Card key={reader.id}>
                <Link to={`/readers/${reader.id}`}>
                  <Image src={reader.photo_url}/>
                  <Card.Content>
                    <Card.Header>{reader.name}</Card.Header>
                    <Card.Meta>{reader.location}</Card.Meta>
                  </Card.Content>
                </Link>
              </Card>
            )
          })}
        </FlexCards>
        {this.state.err}
      </Container>
    )
  }
}


export default ReaderList

