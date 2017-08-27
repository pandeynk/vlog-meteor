import {Users} from '/imports/api/users/users.js';
import "./user-add.html";

Template.user_add_component.events({
    'submit #addUserForm'(event, instance){
        event.preventDefault();
        const target = event.target;

        let user = {};
        user.first_name = target.first_name.value;
        user.last_name = target.last_name.value;
        user.age = target.age.value;
        user.email = target.email.value;
        user.password = target.password.value;

        Users.insert({
          first_name: user.first_name,
          last_name: user.last_name,
          age: user.age,
          email: user.email,
          password: user.password,
        });

        target.first_name.value = '';
        target.last_name.value = '';
        target.age.value = '';
        target.email.value = '';
        target.password.value = '';

        $("#userModal").modal("hide");
    }
});
