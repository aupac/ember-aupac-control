import Ember from 'ember';

export default Ember.Controller.extend({

  username : '',
  age : '',
  email : 'hello world',

  // FIXME introduce a validation api that can replace ember-validations
  // validations: {
  //   username: {
  //     presence: true,
  //     length: { minimum: 5 }
  //   },
  //   age: {
  //     numericality: true
  //   },
  //   email: {
  //     format: { with: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, allowBlank: true, message: 'must be a valid email'  }
  //   }
  // }

});
