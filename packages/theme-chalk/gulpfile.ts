// 打包样式
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import path from 'path'
import type { TaskFunction } from 'gulp'
import { series, src, dest } from 'gulp'
function compile(): NodeJS.ReadWriteStream {
  const sass = gulpSass(dartSass)
  return src(path.resolve(__dirname, './src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(dest('./dist'))
    .on('end', () => {
      console.log('Sass files compiled successfully.')
    })
}

function CopyFont(): NodeJS.ReadWriteStream {
  return (
    src(path.resolve(__dirname, './src/font/**'))
      // .pipe(cleanCss())
      .pipe(dest('./dist/font'))
  )
}
function CopyFullStyle(): NodeJS.ReadWriteStream {
  return src(path.resolve(__dirname, './dist/**')).pipe(
    dest(path.resolve(__dirname, '../../dist/theme-chalk'))
  )
}

const isSeries: TaskFunction = series(compile, CopyFont, CopyFullStyle)
export default isSeries
