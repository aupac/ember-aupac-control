# ember-aupac-control

Bootstrap control decorator with validation support.

![alt tag](https://github.com/aupac/ember-aupac-control/blob/master/example.jpg)

Demo [here](http://aupac.github.io/ember-aupac-control/)

## Installation

```
ember install ember-aupac-control
```

* Make sure you have [Bootstrap CSS](http://getbootstrap.com/) installed in your application.

This can be achieved by `bower install bootstrap --save-dev`.  Then update your `Brocfile.js or ember-cli-build.js` file and add the following.

```javascript
//Bootstrap
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
  destDir: 'assets'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
  destDir: 'fonts'
});
```
## Decorate any control
Simply wrap any control with the aupac-control wrapper to get access to:

- Bootstrap validations messages with native support for [ember-validations](https://github.com/dockyard/ember-validations), however, you can pass any array of errors and they will show up.
- Support for input bootstrap addons styled with glyphicons or font-awesome
- Mandatory field displayed using an asterisk

## Usage

```html
  {{#aupac-control label="age"  mandatory=true errors=errors.age}}
    {{!-- Inside the component block use any control you like --}}
    {{input type="number" class="form-control" value=age}}
  {{/aupac-control}}
  
  * Note - errors.age is where ember-validation stores it's validation array for age.
```

## Parameters

-  `errors` : (array: default []) an array of error for the control, only the first error will be shown to the user at any time.
-  `mandatory` : (boolean: default false) if true will add an asterisk before the label
-  `label` : (string: default '') label to show above the control
-  `feedbackErrorIcon`: (string: default 'glyphicon glyphicon-remove') icon to display when a control is in error
-  `leftIcon`: (string: default '') classes to be placed to the left of the control
-  `rightIcon`: (string: default '') classes to be placed to the right of the control
-  `canShowErrors`: (boolean: default false) if set to true with show errors on page load

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
