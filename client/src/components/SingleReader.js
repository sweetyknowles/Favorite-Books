import React, { Component } from 'react'
import axios from 'axios'

class SingleReader extends Component {
  state = {
    reader: {},
    books: []
  }

  componentDidMount () {
    this.getSingleReader()
  }

  getSingleReader= async () => {
    const readerId = this.props.match.params.id
    const res = await axios.get(`/api/readers/${readerId}`)
    console.log(res.data)
    this.setState({
      reader: res.data.reader,
      books: res.data.books
    })
  }

  render () {
    return (
      <div>
        
      </div>
    )
  }
}

export default SingleReader
