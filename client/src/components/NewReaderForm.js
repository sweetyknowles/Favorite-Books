import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
class NewReaderForm extends Component {
  render () {
    return (
      <Form onSubmit={this.props.createNewReader}>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' name="name" onChange={this.props.handleChange} value={this.props.newReader.name}/>
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <input placeholder='Location' name="location" onChange={this.props.handleChange} value={this.props.newReader.location}/>
        </Form.Field>
        <Form.Field>
          <label>Photo Url</label>
          <input placeholder='Photo Url' name="photo_url" onChange={this.props.handleChange} value={this.props.newReader.photo_url}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default NewReaderForm