import {Meteor} from 'meteor/meteor';
import {Users} from '/imports/api/users/users.js';

import "./user-list.html";

Template.user_list_component.onCreated(function user_list_componentOnCreated(){
    this.subscribe('users.all');

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});

Template.user_list_component.helpers({
    users(){
        return Users.find({});
    }
});

Template.user_list_component.events({
    'click .editUser'(event, instance){
        const id = $(event.target).data("id");
        let user = Users.findOne({_id:id});

        $("#editUserForm [name='first_name']").val(user.first_name);
        $("#editUserForm [name='last_name']").val(user.last_name);
        $("#editUserForm [name='age']").val(user.age);
        $("#editUserForm [name='email']").val(user.email);
        $("#editUserForm [name='id']").val(user._id);

        $("#userEditModal").modal("show");
    },

    'submit #editUserForm'(event, instance){
        event.preventDefault();
        const target = event.target;

        const id = target.id.value;
        const first_name = target.first_name.value;
        const last_name = target.last_name.value;
        const age = target.age.value;
        const email = target.email.value;

        Users.update({_id: id}, {
            $set:{
                first_name,
                last_name,
                age,
                email,
            }
        });

        $("#userEditModal").modal("hide");
    }
});

