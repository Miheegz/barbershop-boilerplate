import React from 'react';
import {
  Table,
  Rating,
  Button,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchReviews, removeReview } from '../store';

import Reviews from './reviews';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.loadReviews()
  }

  handleClick(reviewId) {
    this.props.deleteReview(reviewId)
  }
  render() {
    const { reviews } = this.props;
    return (
      <div id="ReviewsListoutercontainer">

        <div>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Rating</Table.HeaderCell>
                <Table.HeaderCell>Review</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {reviews &&
                reviews.map(review => (
                  <Table.Row key={review.id}>
                    <Table.Cell>
                      <Rating icon="star" defaultRating={review.rating} maxRating={5} disabled />
                    </Table.Cell>
                    <Table.Cell>{review.text}</Table.Cell>
                    {this.props.isLoggedIn && review.userId === this.props.userId ?
                      <Button onClick={() => this.handleClick(review.id)} negative>Delete</Button>
                      : <div />
                    }
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
        {reviews && <Reviews reviews={reviews} />}

      </div>
    )
  }
}


const mapState = (state, ownProps) => {
  const { reviews } = state

  return {
    reviews,
    isLoggedIn: !!state.user.id,
    userId: state.user.id,
  };
};

const mapDispatch = dispatch => ({
  loadReviews: () => {
    dispatch(fetchReviews())
  },
  deleteReview: (reviewId) => {
    dispatch(removeReview(reviewId))
  },
});
export default connect(mapState, mapDispatch)(ReviewsList);
