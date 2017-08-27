import {Meteor} from 'meteor/meteor';
import {Users} from '../../api/users/users.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Users.find().count() === 0) {
    const data = [
      {
        first_name: 'Nandan',
        last_name: 'Pandey',
        age: 23,
        email: 'mepandeyn@gmail.com',
        password: 'nandan',
      },
      {
        first_name: 'Navin',
        last_name: 'Tiwary',
        age: 23,
        email: 'tiwaryn@gmail.com',
        password: 'navin',
      },
    ];

    data.forEach(user => Users.insert(user));
  }
});
