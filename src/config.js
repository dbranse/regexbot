/* vim: set ft=javascript ts=2 et sw=2 tw=80: */
var privateconfig = require('./privateconfig');

var config = {
  slack_api_token: privateconfig.slack_api_token,

  regexes: [
    { regex: /([A-z]{3,})(er)\b/g, message: '[1] her? I barely know her!'}
  ],

  schedules: [],

  build: function(id) {},
};
module.exports = config;
