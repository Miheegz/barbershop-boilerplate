import React from 'react';
import { Grid, Header, Image, Segment } from 'semantic-ui-react';


const AboutUs = () => (
  <div>
  <Header
  as='h1'
  content='ABOUT US'
  inverted
  style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em', textAlign: 'center', color: 'black' }}
/>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Who We Are
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              I have been cutting hair since ....
              <br />
              <br />

            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Come Visit
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <h3>South Bend</h3>
              3228 grape road Mishawaka, IN 46545
              <br />
              Tuesday - Saturday: 8:00am - 5pm

              <br />
              574.318.6130
              <br />
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default AboutUs;
