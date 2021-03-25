const gulp = require('gulp');
const sftp = require('gulp-sftp-up4');

// dev 后台管理
gulp.task('upload', () => gulp.src('./dist/**').pipe(
  sftp({
    host: '119.45.15.68',
    user: 'root',
    pass: 'Zhanhaixin1',
    port: 22,
    remotePath: '/usr/share/nginx/wen/'
  })
));
