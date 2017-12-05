import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addReview, fetchReviews } from '../store'
import {
  Rating,
  Button,
  Form,
  Segment,
  Message,
} from 'semantic-ui-react';

class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      rating: 5,
    }
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault();
    const { handleSubmit, userId } = this.props
    handleSubmit(userId, this.state, this)
    event.target.text.value = '';
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value })
  }
  handleRatingChange(e, data) {
    this.setState({ rating: data.rating })
  }

  render() {
    const {
 handleSubmit, userId, review, reviews
} = this.props
    const userReview = reviews.filter(el => el.userId === userId)[0]
    return (
      <div>
        {this.props.isLoggedIn ?
          <div>
            <br />
            {!userReview ?

              <Segment inverted>
                <Form inverted onSubmit={this.onSubmit} label="Review your haircut experience!" >
                  <Form.Group widths="equal">
                    <Form.Input as={Rating} name="rating" maxRating={5} defaultRating={5} icon="star" size="large" onRate={this.handleRatingChange} />
                    <Form.TextArea name="text" placeholder="Leave a review" onChange={this.handleTextChange} />
                  </Form.Group>
                  <Button type="submit">Submit Review</Button>
                </Form>
              </Segment>

              :

              <Message positive compact>
                <Message.Header>You have already reviewed ReeseCuts!</Message.Header>
                <p>Delete your previous review to post a new review</p>
              </Message>

            }
            <br />
          </div>
          :
          <div>
            <br />
            <Message negative compact>
              You must be logged in to leave a review
            </Message>
            <br />
          </div>
        }
      </div>
    )
  }
}
const mapState = (state, ownProps) => {
  const { reviews } = state
  return {
    userId: state.user.id,
    reviews,
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => ({
  handleSubmit: (userId, state, comp) => {
    const review = {
      text: state.text,
      rating: state.rating,
      userId,
    }
    dispatch(addReview( userId, review))
    comp.setState({ text: '', rating: 0 })
  },
  loadReviews: () => {
    console.log('dispatching load reviews')
    dispatch(fetchReviews())
  },
});

export default connect(mapState, mapDispatch)(Review)
