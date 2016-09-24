'use strict'

const gulp = require('gulp')
const connect = require('gulp-connect') // runs a web server
const open = require('gulp-open') // opens a url
const browserify = require('browserify') // Bundler
const babelify = require('babelify') // Bundler
const source = require('vinyl-source-stream') // text streams with gulp
const concat = require('gulp-concat') // concatenates files
const lint = require('gulp-eslint') // Lint JS, including JSX

const config = {
    port: 8001,
    devBaseURL: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        images: './src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/toastr.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
}

//Start a local development server
gulp.task('connect', () => {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseURL,
        livereload: true
    })
})

gulp.task('open', ['connect'], () => {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseURL + ':' + config.port + '/' }))
})

gulp.task('html', () => {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload())
})

gulp.task('js', () => {
    browserify(config.paths.mainJs)
        .transform(babelify, {
            presets: ['es2015', 'react', 'stage-1'],
            plugins: ['transform-class-properties', 'transform-decorators']
        })
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload())
})

gulp.task('css', () => {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
})

gulp.task('images', () => {
    console.log(config.paths.images)
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload())
   
    //publish favicon
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist))
})

gulp.task('lint', () => {
    return gulp.src(config.paths.js)
        .pipe(lint({ config: 'eslint.config.json' }))
        .pipe(lint.format())
        .pipe(lint.failAfterError())
})

gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html'])
    gulp.watch(config.paths.js, ['js', 'lint'])
    gulp.watch(config.paths.css, ['css'])
})

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch'])
