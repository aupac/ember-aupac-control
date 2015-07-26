import Ember from 'ember';
import layout from '../templates/components/aupac-control';

export default Ember.Component.extend({
  layout: layout,

  //Public API
  errors : null,
  mandatory : false,
  label : '',
  feedback_success_icon: 'glyphicon glyphicon-ok',
  feedback_warn_icon: 'glyphicon glyphicon-warning-sign',
  feedback_error_icon: 'glyphicon glyphicon-remove',
  successClass : 'success',
  errorClass : 'error',

  //Private
  tagName: 'div',
  classNames : ['form-group', 'has-feedback'],
  classNameBindings: ['hasSuccess', 'hasWarning', 'hasError', 'mandatory:mandatory'],

  init: function() {
    return this._super();

    var errors = this.get('errors');
    if(Ember.isNone(errors)) {
      this.set('errors', []);
    }
  },

  status: (function() {
    if (this.get('errors.length')) {
      return this.get('errorClass');
    } else {
      return this.get('successClass');
    }
  }).property('errors.length'),


  /**
   * Error calculations
   */
  hasSuccess: (function() {
    var success = this.get('errors') && this.get('status') === 'success' && this.get('canShowErrors');
    this.set('success', success);
    return success;
  }).property('status', 'canShowErrors'),
  hasWarning: (function() {
    var warning = this.get('errors') && this.get('status') === 'warning' && this.get('canShowErrors');
    this.set('warning', warning);
    return warning;
  }).property('status', 'canShowErrors'),
  hasError: (function() {
    var error = this.get('errors') && this.get('status') === 'error' && this.get('canShowErrors');
    this.set('error', error);
    return error;
  }).property('status', 'canShowErrors'),

  /**
   * Icon Feedback
   */
  feedback_icon: (function() {
    if (!this.get('canShowFeedback')) {
      return;
    }
    switch (this.get('status')) {
      case 'success':
        return this.get('feedback_success_icon');
      case 'warning':
      case 'warn':
        return this.get('feedback_warn_icon');
      case 'error':
        return this.get('feedback_error_icon');
      default:
        return null;
    }
  }).property('status', 'canShowErrors', 'errors.length'),

  /**
   * Help Feedback
   */
  helpText: function() {
    return this.get('errors.firstObject');
  }.property('errors.firstObject'),

  /*
   Listen to the focus out of the form group and display the errors
   */
  canShowErrors: false,
  canShowFeedback: Ember.computed.and('canShowErrors', 'errors.length'),
  focusOut: function() {
    return this.set('canShowErrors', true);
  }
});
