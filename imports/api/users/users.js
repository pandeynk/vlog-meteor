import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Users = new Mongo.Collection('user');

const UserSchema = new SimpleSchema({
    first_name: {
        type: String,
        label: 'First Name',
        max: 100
    },
    last_name: {
        type: String,
        label: 'Last Name',
        max: 100,
        optional: true
    },
    age: {
        type: Number,
        label: 'Age',
        optional: true
    },
    email: {
        type: String,
        label: 'Email',
        max: 100,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {
        type: String,
        label: 'Password',
        max: 100
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return { $setOnInsert: new Date() };
            } else {
                this.unset();
            }
        }
    },
});

Users.attachSchema(UserSchema);


