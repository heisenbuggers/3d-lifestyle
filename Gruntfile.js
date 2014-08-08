"use strict";

var _ = require("underscore");

var gruntConfig = [];

gruntConfig.push({
  express: {
    //files is not used by express
    //Defining it here so that others can use it in the name of express
    files: ['index.js', 'routes/*.js'],
    options: {
      script: "index.js"
    }
  }
});
