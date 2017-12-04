/* vim: set ft=javascript ts=2 et sw=2 tw=80: */

var config = {
  slack_api_token: 'xoxb-279550961954-A0Sk57aq601wifMo6BbEL68X',

  regexes: [
    { regex: /([A-z]{3,})(er)\b/g, message: '[1] her? I barely know her!'}
  ],

  schedules: [],

  build: function(id) {},
};
module.exports = config;
