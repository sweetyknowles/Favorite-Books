import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
class NewBookForm extends Component {
  render () {
    return (
      <Form onSubmit={this.props.createNewBook}>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' name="name" onChange={this.props.handleChange} value={this.props.newBook.name}/>
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <input placeholder='Location' name="location" onChange={this.props.handleChange} value={this.props.newBook.location}/>
        </Form.Field>
        <Form.Field>
          <label>Bio</label>
          <input placeholder='Bio' name="bio" onChange={this.props.handleChange} value={this.props.newBook.bio}/>
        </Form.Field>
        <Form.Field>
          <label>favorite_genre</label>
          <input placeholder='favorite_genre' name="favorite_genre" onChange={this.props.handleChange} value={this.props.newBook.favorite_genre}/>
        </Form.Field>
        <Form.Field>
          <label>Photo Url</label>
          <input placeholder='Photo Url' name="photo_url" onChange={this.props.handleChange} value={this.props.newBook.photo_url}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default NewBookForm