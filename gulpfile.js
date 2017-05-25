'use strict';

//===================
//   初始化
//===================
var gulp = require('gulp'),
    path = require('path'),
    fs = require('fs');

//===================
//   引入组件
//===================
var yargs        = require('yargs').argv,
    gutil        = require('gulp-util'),
    flatten      = require('gulp-flatten'),
    cleancss     = require('gulp-clean-css'),
    postcss      = require('gulp-postcss'),
    atImport     = require('postcss-import'),
    unprefix     = require("postcss-unprefix"),
    autoprefixer = require('autoprefixer'),
    mqpacker     = require('css-mqpacker'),
    compass      = require('gulp-compass'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    browserSync  = require('browser-sync').create(),
    changed      = require('gulp-changed'),
    scp          = require('gulp-scp2'),
    replace      = require('gulp-replace'),
    es           = require('event-stream'),
    fileinclude = require('gulp-file-include'),
    runSequence  = require('run-sequence'),
    plumber = require('gulp-plumber');

//===================
//   变量 函数
//===================


var pkg     = require('./package.json'),
    PWD     = process.env.PWD || process.cwd(),
    config  = require( PWD + '/config.json'),
    platform= process.platform,
    MACDEST = '/Volumes/user_00/release/v.gtimg.cn' + config.path,
    WINDEST = ( '//10.123.9.9/user_00' + config.path).replace(/\//g,"\\");

var onError = function(error){
    gutil.beep();
    console.log(error);
};
var logFile = function(es) {
    console.log('提交文件有：');
    return es.map(function(file, cb) {

      if(platform.indexOf("darwin")==0){
        console.log('/usr/local/imgcache/htdocs' + file.path.split('v.gtimg.cn')[1]);
      }else{
        console.log('/usr/local/imgcache/htdocs' + file.path.split('user_00')[1].replace(/\\/g,"\/"));
      }
        return cb();
    });
};

    //===================
    //   compass 编译
    //   css 压缩
    //   AutoPrefixer
    //===================
gulp.task('compass', function() {
    if(!config.sass) return;
    console.log(PWD)
    gulp.src(PWD + config.sasspath + '/**/*.scss')
        .pipe(plumber())
        .pipe(compass({
            css: PWD + config.csspath,
            sass: PWD + config.sasspath,
            image: PWD + config.imgpath,
            generated_images_path: PWD + config.imgpath,
            sourcemap: true,
            config_file: PWD + '/config.rb'
        }))
        .pipe(gulp.dest(PWD + config.csspath))
        .on('error', function(error) {
          console.log(error);
          this.end();
        })
});

gulp.task('cssmin', function() {
    gulp.src([PWD + config.csspath +'/**/*.css','!**/@*.css'])
        .pipe(plumber())
        .pipe(postcss([atImport]))
        .pipe(cleancss({
            advanced: false,
            format: 'keep-breaks'
        }))
        .pipe(replace(/url\(\img/g, 'url(' + config.path + config.imgpath ))
        .pipe(replace(/url\(\images/g, 'url(' + config.path + config.imgpath ))
        .pipe(replace(/(\.\.\/){1,}img/g, config.path + config.imgpath ))
        .pipe(replace(/(\.\.\/){1,}images/g, config.path + config.imgpath ))
        .pipe(replace(/(\.\.\/){1,}style/g, config.path + config.distpath ))

        .pipe(gulp.dest(PWD + config.cssdist))

        .on('error', function(error) {
          console.log(error);
          this.emit('end');
        })
});

gulp.task('format', function() {
    gulp.src([PWD + config.csspath +'/**/*.css'])
        .pipe(plumber())
        .pipe(postcss([ mqpacker, unprefix, autoprefixer({  browsers: ['last 2 versions','IE >= 9','Safari >= 8'] })]))
        .pipe(gulp.dest(PWD + config.csspath))

        .on('error', function(error) {
          console.log(error);
          this.emit('end');
        })
});

gulp.task('imagemin', function () {

    gulp.src([PWD + config.imgpath + '/**/*'])
        .pipe(plumber())
        // .pipe(changed(PWD + config.imgdist))
        // .pipe(imagemin([
        //     imagemin.gifsicle({interlaced: true}),
        //     imagemin.jpegtran({progressive: true}),
        //     imagemin.optipng({optimizationLevel: 5}),
        //     imagemin.svgo({plugins: [{removeViewBox: true}]})
        // ]))
        .pipe(gulp.dest(PWD + config.imgdist))
        .on('error', function(error) {
          console.log(error);
          this.emit('end');
        })
});

gulp.task('static', function () {
    gulp.src(config.staticpath.map(function(item) {
            return PWD + item + '/**/*';
        }))
        .pipe(plumber())
        .pipe(changed(PWD + config.distpath))
        .pipe(gulp.dest(PWD + config.distpath))
        .on('error', function(error) {
          console.log(error);
          this.emit('end');
        })
});
gulp.task('fileinclude', function() {
  gulp.src([PWD + '/html/include/**/*.html','!**/_*.html'])
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(PWD + '/html/'));
});
//===================
//   开启服务器
//   监听文件
//===================
gulp.task('server', function () {
    yargs.p = yargs.p || 8090;
    browserSync.init({
        server: {
            baseDir: PWD
        },
        ui: {
            port: yargs.p + 1,
            weinre: {
                port: yargs.p + 2
            }
        },
        notify: false,
        directory: true,
        port: yargs.p,
        open: 'external'
    })
    gulp.watch([PWD + config.sasspath + '/**/*.scss'], ['compass'])
    gulp.watch([PWD + config.csspath  +'/**/*.css'], ['cssmin'])
    gulp.watch([PWD + '/html/include/**/*.html'], ['fileinclude'])
    var files = [
      PWD+'/html/**/*.html',
      PWD + config.csspath +'/**/*.css',
      PWD + config.imgpath +'/**/*.{jpg,gif,png,svg}'
    ]

    var reloadTimeOutId ;
    gulp.watch(files).on('change', function(){
        if(reloadTimeOutId){
          clearTimeout(reloadTimeOutId);
        }
        reloadTimeOutId = setTimeout(browserSync.reload,1000);
    });
});

//===================
//   文件拷贝提交
//===================

gulp.task('cp', function() {
  var DEST;
  if(platform.indexOf("darwin")==0){

    DEST = MACDEST   + '/style/';
  }else{
    DEST = WINDEST   + '\\style\\';
  }

    gulp.src([PWD + config.distpath + '/**/*','!**/*.psd'])
    .pipe(plumber())
    .pipe(changed(DEST,{hasChanged: changed.compareSha1Digest}))
    .pipe(gulp.dest(DEST))
    .pipe(logFile(es))
    .on('error', function(error) {
      console.log(error);
      this.emit('end');
    })

});
gulp.task('cp_html', function() {
  var DEST;
  if(platform.indexOf("darwin")==0){

    DEST = MACDEST   + '/html/';
  }else{
    DEST = WINDEST   + '\\html\\';
  }
    gulp.src([PWD + '/html/**/*.html'])
    .pipe(plumber())
    .pipe(changed(DEST))
    .pipe(gulp.dest(DEST))
    .pipe(logFile(es))
    .on('error', function(error) {
      console.log(error);
      this.emit('end');
    })

});

// //===================
// //   任务命令
// //===================

gulp.task('default', function () {
    gulp.start('server');
    
});
