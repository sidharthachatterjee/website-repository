var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    fs           = require('fs'),
    handlebars   = require('gulp-compile-handlebars'),
    rev          = require('gulp-rev'),
    clean        = require('gulp-clean'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    watch        = require('gulp-watch'),
    livereload   = require('gulp-livereload');

var handlebarOpts = {
    helpers: {
        assetPath: function (path, context) {
            return ['dist/assets', context.data.root[path]].join('/');
        }
    }
};

var scripts = [
    'node_modules/html5shiv/dist/html5shiv.js',
    'node_modules/respond.js/dest/respond.src.js',
    'node_modules/jquery/dist/jquery.slim.js',
    'src/js/**/*.js'
];

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('build/assets/css'));
});

gulp.task('js', function () {
    return gulp.src(scripts)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/assets/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'));
});

gulp.task('version', ['sass', 'js'], function () {
    return gulp.src(['build/assets/css/*.css', 'build/assets/js/*.js'], {base: 'build/assets'})
        .pipe(gulp.dest('dist/assets'))
        .pipe(rev())
        .pipe(gulp.dest('dist/assets'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('html', ['version'], function () {
    var manifest = JSON.parse(fs.readFileSync('dist/assets/rev-manifest.json', 'utf8'));

    var pages = ['index', 'privacy', 'termsofservice'];

    for(var i=0; i<pages.length; i++) {
        gulp.src('views/' + pages[i] + '.hbs')
            .pipe(handlebars(manifest, handlebarOpts))
            .pipe(rename(pages[i] + '.html'))
            .pipe(gulp.dest('.'));
    }
});

gulp.task('clean', ['version'], function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

gulp.task('default', ['sass', 'js', 'version', 'html', 'clean']);

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch(['src/scss/**/*.scss', 'src/js/**/*.js'], ['default']).on('change', livereload.changed);
    gulp.watch('views/*.hbs', ['html']).on('change', livereload.changed);
});