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
          <label>Nationality</label>
          <Input
            placeholder={this.props.reader.location}
            name="nationality"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.reader.nationality}
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