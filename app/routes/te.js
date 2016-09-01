import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: '1',
      text: "peperoni",
      description: "peperoni pizza"
    }, {
      id: '2',
      text: "peperoni",
      description: "peperoni pizza"
    }, {
      id: '3',
      text: "peperoni",
      description: "peperoni pizza"
    }];
  }
});
