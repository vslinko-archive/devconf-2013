module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: "0.0.0.0",
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask("default", "connect");
};
