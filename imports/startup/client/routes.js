import {FLowRouter} from "meteor/kadira:flow-router";
import {BlazeLayout} from "meteor/kadira:blaze-layout";

import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/users/users.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/components/header/header.js';
import '../../ui/components/footer/footer.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home', header: 'App_header', footer:'App_footer' });
  },
});

FlowRouter.route('/users', {
  name: 'App.users',
  action() {
    BlazeLayout.render('App_body', { main: 'users_page', header: 'App_header', footer:'App_footer' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

