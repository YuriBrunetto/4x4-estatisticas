"use strict";

var gulp = require("gulp");
var uglify = require("gulp-uglify");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("serve", ["sass"], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./src/scss/*.scss", ["sass"]);
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("./src/js/*.js", ["js-watch"]);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(autoprefixer())
        .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.stream());
});

// Reload when saving js
gulp.task("js-watch", ["js"], browserSync.reload);

// Uglify .js files and put them in /dist folder
gulp.task("js", function(){
    return gulp.src("./src/js/*.js")
        .pipe(concat("core.js"))
        .pipe(uglify().on("error", function(e){
            console.log(e);
        }))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.stream());
});

// Run default task
gulp.task("default", ["serve"]);
