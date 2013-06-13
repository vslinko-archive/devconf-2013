module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask("default", "connect");
};
