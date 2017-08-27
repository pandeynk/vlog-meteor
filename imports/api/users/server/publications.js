import { Meteor } from 'meteor/meteor';
import {Users} from '../users.js';

Meteor.publish('users.all', function () {
  return Users.find();
});
