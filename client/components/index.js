/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {default as LandingPage} from './landingpage'
export {default as Reviews} from './reviews'
export {default as ReviewsList} from './reviewslist'
export {default as AboutUs} from './aboutus'
export {default as Booking} from './booking'
export {Login, Signup} from './auth-form'
