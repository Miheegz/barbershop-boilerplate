import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'
import { auth } from '../store';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {
    name, displayName, error, handleSubmit,
  } = props;

  return (

    <div className="login-form">
      <Grid
        textAlign="center"
        style={{ height: '-webkit-fill-available' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ height: '125vh' }}>
          <Header as="h2" color="blue" textAlign="center">
            Please {displayName}
          </Header>
          <Form onSubmit={evt => handleSubmit(name, evt)} name={name} size="large">
            <Segment stacked style={{ height: '225px', width: '325px' }}>
            <Form.Group>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                type="text"
                name="email"
                width={14}
              />
              </Form.Group>
              <Form.Group>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="pass"
                width={14}
              />
</Form.Group>
              <Button color="blue" fluid size="large">
                {displayName}
              </Button>
              <Message href="/auth/google" style={{ top: '24px' }}>
                <Icon name="google" size="large" />Google {displayName}

              </Message>
            </Segment>

          </Form>

        </Grid.Column>
      </Grid>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => ({
  name: 'login',
  displayName: 'Login',
  error: state.user.err,
});

const mapSignup = state => ({
  name: 'signup',
  displayName: 'Sign Up',
  error: state.user.error,
});

const mapDispatch = dispatch => ({
  handleSubmit: (name, evt) => {
    evt.preventDefault();
    const formName = name;
    const email = evt.target.email.value;
    const password = evt.target.pass.value;
    dispatch(auth(email, password, formName));
  },
});

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
