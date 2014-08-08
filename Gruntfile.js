"use strict";

var _ = require("underscore");

var gruntConfig = [];

gruntConfig.push({
  express: {
    //files is not used by express
    //Defining it here so that others can use it in the name of express
    files: ['index.js', 'routes/*.js']
  }
});

gruntConfig.push({
  jshint: {
    express: {
      files: {
      	src: ['<%= express.files %>'],
      },
      options: {
        node: true,
        globals: {
          console: true,
          module: true,
          require: true,
          process: true,
        }
      }
    },
    files: ['public/js/*.js'],
    options: {
      globals: {
        console: true,
        jQuery: true,
        document: true,
      }
    }
  }
});

//grunt-contrib-concat
gruntConfig.push({
  concat: {
    css: {
      src: ['public/css/*.css'],
      dest: 'build/css/3dlifestyle.css'
    },
    js: {
      src: ['bower_components/jquery/dist/jquery.min.js',
      		'public/js/3dlifestyle.js'],
      dest: 'build/js/3dlifestyle.js'
    }
  }
});

//grunt-config-cssmin
gruntConfig.push({
  cssmin: {
    css: {
      src: ['<%= concat.css.dest %>'],
      dest: 'build/css/3dlifestyle.min.css'
    }
  }
});


//grunt-contrib-uglify
gruntConfig.push({
  uglify: {
    js: {
      options: {
        compress: true,
        mangle: false
      },
      files: {
        "build/js/3dlifestyle.min.js": ['<%= concat.js.dest %>']
      }
    }
  }
});


//grunt-contrib-watch
gruntConfig.push({
  watch: {
    jshint: {
      files: ['<%= jshint.files %>'],
      tasks: ['build:js'],
    },
    express: {
      files: ['<%= express.files %>'],
      tasks: ['jshint:express', 'express:dev'],
      options: { spawn: false }
    },
    cssmin: {
      files: ['public/css/*.css'],
      tasks: ['build:css']
    }
  }
});

module.exports = function(grunt) {
  grunt.initConfig(_.extend.apply(this, _.union([{
    pkg: grunt.file.readJSON('package.json')
  }], gruntConfig)));

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');

  // RegisterTasks
  grunt.registerTask('build:css', ['concat:css','cssmin:css']);
  grunt.registerTask('build:js', ['jshint','concat:js','uglify:js']);
  grunt.registerTask('build', ['build:css','build:js']);
  grunt.registerTask('serve', ['express', 'watch']);
  grunt.registerTask('start', ['build', 'serve']);
  grunt.registerTask('default', []);
};
