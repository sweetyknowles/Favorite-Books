import React, { Component } from "react";
import { Input, Form } from 'semantic-ui-react'

class EditReaderForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <Input
            placeholder={this.props.reader.name}
            name="name"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.reader.name}
          />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <Input
            placeholder={this.props.reader.location}
            name="location"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.reader.location}
          />
        </Form.Field>
        
        <Form.Field>
          <label>Bio</label>
          <Input
            placeholder={this.props.reader.bio}
            name="bio"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.reader.bio}
             />
             
        </Form.Field>
        <Form.Field>
          <label>Favorite Genre</label>
          <Input
            placeholder={this.props.reader.favorite_genre}
            name="favorite_genre"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.reader.favorite_genre}
             />
             </Form.Field>
        <Form.Field>
          <label>Photo Url</label>
          <Input
            placeholder={this.props.reader.photo_url}
            name="photo_url"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.reader.photo_url}
             />
             
        </Form.Field>
        <Form.Button color="green" type="submit">Edit Reader</Form.Button>
      </Form>
    );
  }
}

export default EditReaderForm;
