import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
class NewReviewForm extends Component {
  render () {
    return (
      <Form onSubmit={this.props.createNewReview}>
        <Form.Field>
          <label>Comment</label>
          <input placeholder='Comment' name="comment" onChange={this.props.handleChange} value={this.props.newReview.comment}/>
        </Form.Field>
        
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default NewReviewForm