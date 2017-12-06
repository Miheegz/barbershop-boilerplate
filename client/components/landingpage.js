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

export default class LandingPage extends Component {
  state = {}

  render() {


    return (
      <div>

          <Segment
            inverted
            textAlign='center'
            style={{ height: 500, padding: '1em 0em' }}
            vertical
          >
          <Image src='barbershop1.jpg' fluid style={{ height: 500}}/>
          </Segment>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >


            <Container text>
              <Header
                as='h1'
                content='Look your best!'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Walk-in looking nappy walk-out looking Fresh! Book your appointment now.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"Amazing Haircut"</Header>
                <p style={{ fontSize: '1.33em' }}>Reviewer 1</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"Wouldn't trust anyone else with my hair"</Header>
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


