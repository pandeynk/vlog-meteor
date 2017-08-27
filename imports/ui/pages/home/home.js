import {Users} from "/imports/api/users/users.js";
import {Meteor} from 'meteor/meteor';
import "../../components/user-list/user-list.js";

import "./home.html";

Template.App_home.onCreated(function App_homeOnCreated() {
    this.subscribe('users.all');
});

Template.App_home.helpers({
    users(){
        return Users.find({});
    }
});

Template.App_home.events({
    'click #button'(event, instance){
        instance.counter.set(instance.counter.get() + 1);
    },
    'submit #loginForm'(event, instance){
        event.preventDefault();
        const target = event.target;

        console.log("Before User : ", Meteor.user());

        const email = target.email.value;
        const password = target.password.value;

        Meteor.loginWithPassword(email, password, function(){
        });
    },
});
