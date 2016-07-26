const gulp = require('gulp')
const conflict = require('gulp-conflict')
const template = require('gulp-template')
const inquirer = require('inquirer')
const rename = require('gulp-rename')
const path = require('path')

gulp.task('component', function (done) {
  var prompts = [
    {
      name: 'componentName',
      message: 'What is the name of this component?'
    },
    {
      name: 'moveon',
      type: 'confirm',
      message: 'Continue?'
    }
  ]
  inquirer.prompt(prompts).then((answers) => {
    if (!answers.moveon) {
      return done()
    }
    gulp.src(path.join('templates/component/component.js'))
      .pipe(template(answers))
      .pipe(rename(answers.componentName + '.js'))
      .pipe(gulp.dest('app/src/components/' + answers.componentName))
    gulp.src(path.join('templates/component/component.scss'))
      .pipe(template(answers))
      .pipe(rename(answers.componentName + '.module.scss'))
      .pipe(gulp.dest('app/src/components/' + answers.componentName))
  })
})

gulp.task('container', function (done) {
  var prompts = [
    {
      name: 'componentName',
      message: 'What is the name of this component?'
    },
    {
      name: 'moveon',
      type: 'confirm',
      message: 'Continue?'
    }
  ]
  inquirer.prompt(prompts).then((answers) => {
    if (!answers.moveon) {
      return done()
    }
    gulp.src(path.join('templates/component/component.js'))
      .pipe(template(answers))
      .pipe(rename(answers.componentName + '.js'))
      .pipe(gulp.dest('app/src/containers/' + answers.componentName))
    gulp.src(path.join('templates/container/container.scss'))
      .pipe(template(answers))
      .pipe(rename(answers.componentName + '.module.scss'))
      .pipe(gulp.dest('app/src/containers/' + answers.componentName))
  })
})
