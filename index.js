'use strict';

var peg = require('broccoli-pegjs');

module.exports = {
  name: 'ember-cli-pegjs',
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.registry.add('js', {
      name: 'ember-cli-pegjs',
      ext: 'pegjs',
      toTree: function(tree) {
        if (!app.options.pegOptions)
          app.options.pegOptions = {}

        if (!app.options.pegOptions.wrapper) {
          app.options.pegOptions.wrapper = function (src, parser) {
            return 'export default ' + parser
          }
        }

        return peg(tree, app.options.pegOptions);
      }
    });
  }
};