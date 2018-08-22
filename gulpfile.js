const gulp = require('gulp');
const chalk = require('chalk');

const info = {
  appName: 'template-amngular',
  description: 'Base angular6 development template with bootstar and gulp'
}

gulp.task('info', () => {
  console.log( chalk.yellow('\n-----------------'));
  Object.keys(info).forEach( key => {
    console.log(`${key}: ${info[key]}`);
  });
  console.log( chalk.yellow('-----------------\n'));
});

gulp.task('default', ['info']);