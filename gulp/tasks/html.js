import fileInclude from 'gulp-file-include'
import webpHtmlNosvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'
import replace from "gulp-replace";

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'HTML',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@img\//g, './img/'))
    .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
    .pipe(
      app.plugins.if(
        app.isDev,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        })
      )
    )
    .pipe(app.plugins.if(app.isDev, app.plugins.replace('min.js', 'js')))
    .pipe(app.plugins.if(app.isDev, app.plugins.replace('min.css', 'css')))
    .pipe(app.plugins.if(app.isBuild, app.plugins.replace('./', './dist/')))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.htmlBuild)))
    .pipe(app.plugins.if(app.isDev, app.gulp.dest(app.path.build.html)))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}

