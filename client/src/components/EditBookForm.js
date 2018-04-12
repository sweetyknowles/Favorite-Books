import React, { Component } from "react";
import { Input, Form } from 'semantic-ui-react'

class EditBookForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <Input
            placeholder={this.props.book.title}
            name="title"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.book.title}
          />
        </Form.Field>
        <Form.Field>
          <label>Author</label>
          <Input
            placeholder={this.props.book.Author}
            name="author"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.book.author}
          />
        </Form.Field>
        
        <Form.Field>
          <label>publish</label>
          <Input
            placeholder={this.props.book.publish}
            name="publish"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.book.publish}
             />
             
        </Form.Field>
        <Form.Field>
          <label>Genre</label>
          <Input
            placeholder={this.props.book.genre}
            name="genre"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.book.genre}
             />
             </Form.Field>
             <Form.Field>
          <label>Synopis</label>
          <Input
            placeholder={this.props.book.synopis}
            name="synopis"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.book.synopis}
             />
             
        </Form.Field>
        <Form.Field>
          <label>Photo Url</label>
          <Input
            placeholder={this.props.book.photo_url}
            name="photo_url"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.book.photo_url}
             />
             
        </Form.Field>
        <Form.Button color="green" type="submit">Edit Book</Form.Button>
      </Form>
    );
  }
}

export default EditBookForm;
