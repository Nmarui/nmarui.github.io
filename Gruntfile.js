module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      //concat插件的配置信息
      concat: {
          options:{
              stripBanners:true, 
              banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */'
          },
          cssConcat:{
              src:['src/css/css1.css','src/css/css2.css'],
              dest:'src/css/concat/<%= pkg.name %> - <%= pkg.version %>.css' 
          },
          jsConcat:{
              src:'src/js/*.js',
              dest:'src/js/concat/<%=pkg.name %> - <%= pkg.version %>.js'
          }
      },
      //压缩css
      cssmin:{
          options:{
              stripBanners:true,
              banner:'/*!<%= register.css %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build:{
              src:'src/css/<%=register.css %> - <%=pkg.version %>.css',
              dest:'dist/css/<%= register.css %> - <%= pkg.version %>.min.css' 
          },
          files : {
              'register.min.css' : 'src/css/register.css'
          }
      },
      //压缩js
      uglify: {
        test_grunt : {   
            options: {
              sourceMap: true 
            },
           files : {  
             'main.min.js' : 'src/js/tmp.js'
           }
         }
      },
      jshint:{
          options:{
              jshintrc:'.jshint'
          },
          build:['Gruntfile.js','src/js/*js']
      },

      csslint:{
          options:{
              csslintrc:'.csslint'
          },
          build:['src/css/*.css']
      },
      //watch自动化
      watch:{
          build:{
              files:['src/js/*.js','src/css/*.css'],
              tasks:['jshint','csslint','concat','cssmin','uglify'],
              options:{spawn:false}
          }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.registerInitTask('default',['jshint','csslint','concat','cssmin','uglify']);
  };