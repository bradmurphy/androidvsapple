module.exports = function(grunt) {

  grunt.initConfig({

      // SASS COMPILER
      sass: {
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
            'assets/css/styles.min.css': 'assets/scss/styles.scss'
          }
        } 
      },
      // JS HINT
      jshint: {
        beforeconcat: ['assets/js/main.js']
      },
      // CONCAT JS
      concat: {
        dist: {
          src: [
            'assets/js/vendor/*.js', // All JS in the vendor folder
            'assets/js/plugins/*.js', // All JS in the plugins folder
            'assets/js/main.js'  // This specific file
          ],
          dest: 'assets/js/main.min.js',
        }
      },
      // UGLIFY JS
      uglify: {
        build: {
          src: 'assets/js/main.min.js',
          dest: 'assets/js/main.min.js'
        }
      },
      // IMAGE-MINIFY
      imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'assets/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'assets/img'
          }]
        }
      },

      // WATCH TASKS & LIVE RELOADING
      watch: {
        scripts: {
          files: ['assets/js/*.js', 'assets/js/plugins/*.js', 'assets/js/vendor/*.js'],
          tasks: ['jshint', 'concat', 'uglify'],
          options: {
            spawn: false,
            livereload: true,
          }
        },
        css: {
          files: ['assets/scss/*.scss'],
          tasks: ['sass'],
          options: {
            spawn: false,
            livereload: true,
          }
        },
        html: {
          files: ['*.html'],
          options: {
            spawn: false,
            livereload: true,
          }
        }
      }

  });

  // LOADING ALL TASKS

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin']);
  grunt.registerTask('dev', ['watch']);

}
