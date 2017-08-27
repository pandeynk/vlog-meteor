import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Users } from './users.js';


Meteor.methods({
    'users.insert' (first_name, last_name, age, email, password) {

        check(first_name, String);
        check(last_name, String);
        check(age, Number);
        check(email, String);
        check(password, String);

        return Users.insert({
            first_name,
            last_name,
            age,
            email,
            password
        });
    },

    'users.update' (id, first_name, last_name, age, email, password) {

        check(first_name, String);
        check(last_name, String);
        check(age, Number);
        check(email, String);
        check(password, String);

        return Users.update(id, {
            $set: {
                first_name,
                last_name,
                age,
                email,
                password
            }
        });
    },
});
