import React from 'react'
import {
  Button,
  Container,
  Menu,
  Icon,
  Segment,
  Divider,
  Dropdown,
  Header,
  Image
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/user'
import '../_logo.scss'

const Navbar = (props) => {
  const {
    handleClick, isLoggedIn, LogOut, isAdmin,
  } = props

  return (

    <Segment
      inverted
      textAlign="center"
      style={{ padding: '0em 0em', marginBottom: '-.8em' }}
      vertical

    >
    <Header inverted as="h1" color="white" className="logo" floated="left" style={{ marginTop: '0em'}}>

    <Image src="Barberpole.png" size="small" color= "white" circular className="heartbeat" />

    Reese Cutts
    </Header>

      <Container>
        <Menu inverted pointing secondary size="large">
          <Menu.Item as={Link} to="/"><Icon name="home" />Home</Menu.Item>
          <Menu.Item as={Link} to="/reviews">Reviews</Menu.Item>
          <Menu.Item as={Link} to="/aboutus">About Us</Menu.Item>
          {

          isLoggedIn
          ?
            <Menu.Item position="right">
              {/* The navbar will show these links after you log in */}
              <Button inverted as={Link} to="/booking" style={{ marginLeft: '0.5em' }}><Icon name="add to calendar" />Appointments</Button>

              <Button inverted as={Link} onClick={handleClick} to="/login">Log Out</Button>


            </Menu.Item>
          :
            <Menu.Item position="right">
              {/* The navbar will show these links before you log in */}
              <Button inverted as={Link} to="/login">Log In</Button>
              <Button inverted as={Link} to="/signup" style={{ marginLeft: '0.5em' }}>Sign Up</Button>
            </Menu.Item>
            }
        </Menu>
      </Container>
      <Divider inverted />
    </Segment>
  )
}


const mapState = state => ({
  isLoggedIn: !!state.user.id,
  isAdmin: !!state.user.id && state.user.isAdmin,
})

const mapDispatch = dispatch => ({
  handleClick: () => {
    dispatch(logout())
    // browserHistory.push('/');
  },
});

export default connect(mapState, mapDispatch)(Navbar);

