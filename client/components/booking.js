import React from 'react'

// import { createNewEvent, createSpotifyPlaylist } from '../store'

import { Button, Dropdown, Form, Rating, Segment, Header, Message, Statistic } from 'semantic-ui-react'



/**
 * COMPONENT
 */
 const Booking = () => {

    return (

      <div style={{ marginLeft: '9em', marginRight: '9em', background: '#2184d0' }}>
        <Segment raised padded inverted style={{ paddingLeft: '6em', paddingRight: '6em', height: 'auto', marginTop: '.85em' }}>
          <Header textAlign="center" as="h1" size= "huge" >Book an Appointment</Header>

          <iframe src="https://www.sagenda.net/Frontend/5a26fe182799518d0c703f46?retrieveFromCookies=False" width="1050" height="1200" frameborder="0" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation allow-scripts allow-forms">Book here</iframe>
        </Segment>
      </div>
    )

}


export default Booking
// const mapState = (state) => {
//   return {
//     user: state.user,
//     newEvent: state.newEvent
//   }
// }

// const mapDispatch = (dispatch, ownProps) => {
//   return {
//     handleSubmit(evt, name, date, type, genres, danceability, danceabilityWeight, loudness, loudnessWeight, energy, energyWeight, acousticness, acousticnessWeight, valence, valenceWeight, instrumentalness, instrumentalnessWeight, tempo, tempoWeight, spotifyUserId, token) {
//       let { history } = ownProps
//       let newEvent = { name, date, type, genres, danceability, danceabilityWeight, loudness, loudnessWeight, energy, energyWeight, acousticness, acousticnessWeight, valence, valenceWeight, instrumentalness, instrumentalnessWeight, tempo, tempoWeight, spotifyUserId, token }
//       evt.preventDefault()
//       dispatch(createNewEvent(newEvent, history))
//     }
//   }
// }


