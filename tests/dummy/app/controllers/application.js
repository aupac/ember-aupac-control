import Ember from 'ember';
import EmberValidations from 'ember-validations'

export default Ember.Controller.extend(EmberValidations, {

  username : '',
  age : '',
  email : 'hello world',

  validations: {
    username: {
      presence: true,
      length: { minimum: 5 }
    },
    age: {
      numericality: true
    },
    email: {
      format: { with: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, allowBlank: true, message: 'must be a valid email'  }
    }
  }

});
