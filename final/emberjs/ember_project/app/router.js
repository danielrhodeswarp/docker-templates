import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('coolNewRoute');
  this.route('coolnewroute');
  this.route('cool-new-thing');
  this.route('fart');
});

export default Router;
