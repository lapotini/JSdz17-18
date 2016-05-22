module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
     options: {
       separator: ';'
     },
     dist: {
       src: ['js/src/*.js'],
       dest: 'js/dist/script.main.js'
     }
   },

   uglify: {

    dist: {
      src: ['js/dist/script.main.js'],
      dest: 'js/dist/script.min.js'
    }
  },

  cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'css/dist/style.min.css': ['css/src/style.css', 'css/src/style2.css']
    }
   }
  }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat','uglify','cssmin']);

};
