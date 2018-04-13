import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react'
class EditReviewForm extends Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
        <Form.Field>
          <label>Review</label>
          <Input
            placeholder={this.props.review.content}
            name="content"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.review.content}
          />
        </Form.Field>
        <Form.Button color="green" type="submit">Edit Review</Form.Button>
      </Form>
        );
    }
}

export default EditReviewForm;