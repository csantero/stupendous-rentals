import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.queryRecord('rental', { slug: params.slug });
  },

  setupController(controller, model) {
    Ember.set(controller, 'rental', model);
  }
});
