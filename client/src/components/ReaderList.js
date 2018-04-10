import React, { Component } from 'react'
import axios from 'axios'
import { Modal,Button,Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FlexCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
`

class ReaderList extends Component {
  state = {
    readers: []
  }

  componentDidMount () {

    // Initiate API call to Rails
    // When successful, update the state
    this.getAllReaders()
  }

  getAllReaders = async () => {
    const response = await axios.get('/api/readers')
    this.setState({ readers: response.data.readers })
   
  }

  render () {
    return (
      <div>
        <h1>All Readers</h1>
    
    

        <FlexCards>
          {this.state.readers.map(reader => {
            return (
              <Card key={reader.id}>
                <Link to={`/reader/${reader.id}`}>
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
      </div>
    )
  }
}

export default ReaderList

// Get all of our Artists from Rails API
// We want to show all of the artists once it's fetched.
// Users should be able to click on an artist and visit the single artist page.