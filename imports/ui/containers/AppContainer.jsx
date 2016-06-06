import { Meteor } from 'meteor/meteor';
// XXX: Session
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

export default createContainer(() => {
  return {
    user: Meteor.user(),
    //loading: !(publicHandle.ready() && privateHandle.ready()),
    connected: Meteor.status().connected,
    //menuOpen: Session.get('menuOpen')
  };
}, App);
