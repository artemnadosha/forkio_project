import replace from 'gulp-replace' // Пошук і заміна
import plumber from 'gulp-plumber' // Обробка помилок
import notify from 'gulp-notify' // Сповіщення
import browsersync from 'browser-sync'
import newer from 'gulp-newer' // Перевірка оновлень
import ifPlugin from 'gulp-if'


export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
}
