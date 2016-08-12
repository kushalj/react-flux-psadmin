'use strict'

const gulp = require('gulp')
const connect = require('gulp-connect') // runs a web server
const open = require('gulp-open') // opens a url
const browserify = require('browserify') // Bundler
const babelify = require('babelify') // Bundler
const reactify = require('reactify') // transform JSX to JS
const source = require('vinyl-source-stream') // text streams with gulp
const concat = require('gulp-concat') // concatenates files
const lint = require('gulp-eslint') // Lint JS, including JSX

const config = {
    port: 8001,
    devBaseURL: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
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
        .transform(reactify)
        .transform(babelify, {presets: ['es2015', 'react']})
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload())
})

gulp.task ('css', () => {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
})

gulp.task('lint', () => {
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format())
        .pipe(lint.failAfterError())
})

gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html'])
    gulp.watch(config.paths.js, ['js', 'lint'])
    gulp.watch(config.paths.css, ['css'])
})

gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch'])
