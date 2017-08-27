import "./users.html";

import "../../components/user-list/user-list.js";
import "../../components/user-add/user-add.js";

Template.users_page.events({
    'click #addUser'(event, instance){
        $("#userModal").modal("show");
    }
});
