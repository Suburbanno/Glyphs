const { src, dest, series } = require('gulp')
const del = require('del')

// Clean the `dist` folder
function clean() {
  return del(['dist/**/*'])
}

function build() {
  return src('src/**/*').pipe(dest('dist/'))
}

exports.build = build
exports.default = series(clean, build)
