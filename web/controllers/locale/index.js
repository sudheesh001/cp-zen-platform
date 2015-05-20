'use strict';

var path = require('path');

var po2json = require('po2json');

module.exports = function (router) {

  router.get('/data', function (req, res) {
    var locale = (res.locals && res.locals.context && res.locals.context.locality) || 'en_US';

    var format = req.query['format'] || 'jed';

    po2json.parseFile(path.join(__dirname, '../../locale/', locale, 'messages.po'), {
      format: format,
      domain: 'coder-dojo-platform'
    }, function(err, data) {
      if (err) { throw err; }
      console.log(data);
      res.send(data);
    });

  });

};
