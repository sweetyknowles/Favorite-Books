import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Card,
  icon,
  Image,
  Container,
  Tranistion,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NewReviewForm from "./NewReviewForm";

class ReviewList extends Component {
  state = {
    reviews: [],
    ReviewsFormOpen: false,
    newReviews: {
      content: ""
    },
    error: ""
  };

  componentDidMount() {
    // Initiate API call to Rails
    // When successful, update the state
    this.getAllReviews();
  }

  getAllReviews = async () => {
    try {
      const response = await axios.get("/api/reviews");
      this.setState({ reviews: response.data });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };
  toggleNewReviewForm = () => {
    this.setState({ reviewFormOpen: !this.state.ReviewFormOpen });
  };

  handleChange = event => {
    const newReview = { ...this.state.newReview };
    const attribute = event.target.name;
    newReview[attribute] = event.target.value;

    this.setState({ newReview: newReview });
  };

  createNewReview = async e => {
    e.preventDefault();
    const response = await axios.post("/api/reviews", this.state.newReview);
    const reviews = [...this.state.reviews, response.data];
    this.setState({
      reviews,
      newReview: {
        content: ""
      }
    });
  };

  render() {
    return (
      <ButtonWrapper>
        <Button primary onClick={this.toggleNewReviewForm}>
          Create New Review
        </Button>
        {this.state.reviewFormOpen ? (
          <NewReviewForm
            createNewReview={this.createNewReview}
            handleChange={this.handleChange}
            newReview={this.state.newReview}
          />
        ) : null}
      </ButtonWrapper>
    );
  }
}

export default ReviewList;
