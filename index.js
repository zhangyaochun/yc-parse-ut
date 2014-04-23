'use strict';

//external third-part lib - underscore 
var _ = require('underscore');

module.exports = function(content,opts) {
    _.extend(_.templateSettings, opts);
    //return function str
    return _.template(content).source;
};

