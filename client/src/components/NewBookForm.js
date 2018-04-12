import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
class NewBookForm extends Component {
  render () {
    return (
      <Form onSubmit={this.props.createNewBook}>
        <Form.Field>
          <label>Title</label>
          <input placeholder='Title' name="title" onChange={this.props.handleChange} value={this.props.newBook.title}/>
        </Form.Field>
        <Form.Field>
          <label>Author</label>
          <input placeholder='Author' name="author" onChange={this.props.handleChange} value={this.props.newBook.author}/>
        </Form.Field>
        <Form.Field>
          <label>Publish</label>
          <input placeholder='Publish' name="publish" onChange={this.props.handleChange} value={this.props.newBook.publish}/>
        </Form.Field>
        <Form.Field>
          <label>Genre</label>
          <input placeholder='Genre' name="genre" onChange={this.props.handleChange} value={this.props.newBook.genre}/>
        </Form.Field>
        <Form.Field>
          <label>Synopis</label>
          <input placeholder='Synopis' name="synopis" onChange={this.props.handleChange} value={this.props.newBook.synopis}/>
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