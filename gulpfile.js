var {src,dest,series,parallel,watch} = require('gulp');
var clean = require('gulp-clean');
var fileInclude = require('gulp-file-include');
var webServer = require('gulp-webserver');
var sass = require('gulp-sass');
function cleanTask(){
      return src('./dist',{allowEmpty : true})
      .pipe(clean());
};
function fileIncludeTask(){
    return src('./src/view/*html')
         .pipe(fileInclude({
             prefix : '@',
             basepath : './src/view/templates'
         }))
         .pipe(dest('./dist/view'))
};
function webServerTask (){
    return src('./dist')//是view 文件夹下作为localhost根目录
         .pipe(webServer({
             host : 'localhost',
             port : 4000,
             open : './view/index.html',
             livereload : true
         }));
}
function watchTask(){//监听文件变化 同步到dist 文件下
    watch('./src/view/**',fileIncludeTask);
    watch('./src/css/**',sassTask);
    watch('./src/static/**',staticTask);

}
function sassTask(){
    return src('./src/css/*.scss')
         .pipe(sass())
         .pipe(dest('./dist/css'));
}
function staticTask(){
    return src ('./src/static/**')
           .pipe(dest('./dist/static'));
}
module.exports = {
    //开发环境的命令
    dev : series(cleanTask,parallel(fileIncludeTask,sassTask,staticTask),parallel(webServerTask,watchTask)),
    //生产环境下的命令
    build : series(cleanTask,) 
   
}