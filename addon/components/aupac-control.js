import Ember from 'ember';
import layout from '../templates/components/aupac-control';

const {computed} = Ember;

export default Ember.Component.extend({
  layout: layout,

  //Public API
  errors : null,
  mandatory : false,
  label : '',
  feedbackSuccessIcon: 'glyphicon glyphicon-ok',
  feedbackWarnIcon: 'glyphicon glyphicon-warning-sign',
  feedbackErrorIcon: 'glyphicon glyphicon-remove',
  leftIcon : null,
  rightIcon : null,
  canShowErrors: false,

  //Private
  tagName: 'div',
  classNames : ['form-group', 'has-feedback'],
  classNameBindings: ['hasSuccess', 'hasWarning', 'hasError'],

  init: function() {
    this._super.apply(this, arguments);

    const errors = this.get('errors');
    if(Ember.isNone(errors)) {
      this.set('errors', []);
    }
  },

  status: computed('errors.length', function() {
    if (this.get('errors.length') > 0) {
      return 'error';
    } else {
      return 'success';
    }
  }),

  /**
   * Error calculations
   */
  hasSuccess: computed('status', 'canShowErrors', function() {
    const success = this.get('errors') && this.get('status') === 'success' && this.get('canShowErrors');
    this.set('success', success);
    return success;
  }),
  hasWarning: computed('status', 'canShowErrors', function() {
    const warning = this.get('errors') && this.get('status') === 'warning' && this.get('canShowErrors');
    this.set('warning', warning);
    return warning;
  }),
  hasError: computed('status', 'canShowErrors', function() {
    const error = this.get('errors') && this.get('status') === 'error' && this.get('canShowErrors');
    this.set('error', error);
    return error;
  }),

  /**
   * Icon Feedback
   */
  feedbackIcon: computed('status', 'canShowErrors', 'errors.length', function() {
    if (!this.get('canShowFeedback')) {
      return;
    }

    switch (this.get('status')) {
      case 'success':
        return ''; //this.get('feedbackSuccessIcon');
      case 'warning':
      case 'warn':
        return this.get('feedbackWarnIcon');
      case 'error':
        return this.get('feedbackErrorIcon');
      default:
        return null;
    }
  }),

  /**
   * Help Feedback
   */
  helpText: computed('errors.firstObject', function() {
    return this.get('errors.firstObject');
  }),

  /*
   Listen to the focus out of the form group and display the errors
   */
  canShowFeedback: Ember.computed.and('canShowErrors'), //, 'errors.length'
  focusOut: function() {
    return this.set('canShowErrors', true);
  }
});
