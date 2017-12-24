import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import { connect } from 'react-redux';
import history from '../history.js';


class LandingPage extends Component {
  constructor(){
    super();

    this.state = {

   }

this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.props.isLoggedIn ? history.push('/booking') : history.push('/login')

  }
  render() {


    return (
      <div>

          <Segment
            inverted
            textAlign="center"
            style={{ height: 500, padding: '0em 0em' }}
            vertical
          >
          <Image src="reesecuts.jpg" fluid style={{ height: 500, marginTop: '-.5em'}} />
          </Segment>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 300, padding: '1em 0em' }}
            vertical
          >


            <Container text style={{ marginBottom: '3.5em' }}>
              <Header
                as="h1"
                content="Look your best!"
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
              />
              <Header
                as="h2"
                content="Walk-in looking nappy walk-out looking Fresh! Book your appointment now."
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button onClick={this.handleClick} primary size="huge">
                Get Started
                <Icon name="right arrow" />
              </Button>
            </Container>
          </Segment>

          <Segment style={{ padding: '8em 0em', backgroundColor: 'white' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>We offer mobile haircuts!</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Don't feel like leaving the house? Only have 30 minutes for your lunch break? Book a mobile appointment today!!
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>We also do groups and events!!</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Is the family going on vacation? Don't trust all your groomsman to come looking clean on the big day? Call us to talk about our affordable group and event pricing!
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  size="large"
                  src="/wedding.jpg"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button onClick={this.handleClick} size="huge">Check Us Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>



        <Segment style={{ padding: '0em', backgroundColor: 'gray' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>"Amazing Haircut"</Header>
                <p style={{ fontSize: '1.33em' }}>Reviewer 1</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>"Wouldn't trust anyone else with my hair"</Header>
                <p style={{ fontSize: '1.33em' }}>
                   Reviewer 2
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>


      </div>
    )
  }
}



const mapState = (state, ownProps) => {
  // const { reviews } = state

  return {
    // reviews,
    isLoggedIn: !!state.user.id,
    userId: state.user.id,
  };
};

const mapDispatch = dispatch => ({
  // loadReviews: () => {
  //   dispatch(fetchReviews())
  // },
  // deleteReview: (reviewId) => {
  //   dispatch(removeReview(reviewId))
  // },
});
export default connect(mapState, mapDispatch)(LandingPage);
