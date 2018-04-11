import React, { Component } from "react";
import { Input, Form } from 'semantic-ui-react'

class EditBookForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <Input
            placeholder={this.props.book.name}
            name="name"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.book.name}
          />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <Input
            placeholder={this.props.book.location}
            name="location"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.book.location}
          />
        </Form.Field>
        
        <Form.Field>
          <label>Bio</label>
          <Input
            placeholder={this.props.book.bio}
            name="bio"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.book.bio}
             />
             
        </Form.Field>
        <Form.Field>
          <label>Favorite Genre</label>
          <Input
            placeholder={this.props.book.favorite_genre}
            name="favorite_genre"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.book.favorite_genre}
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
