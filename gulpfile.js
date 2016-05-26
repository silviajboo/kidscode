var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
//plumber por defecto, pero le añadiremos el onError de Nahuel
var plumber = require('gulp-plumber');
//beepbeep y colors son ajenos a gulp, valen para mas cosas, por eso
//no llevan gulp- delante
var beep = require('beepbeep'); //permite mandar sonidos en la terminal
var colors = require('colors'); //permite poner colores en lso mensajes de la terminal
//al mismo tiempo que crea la variable la ejecuta
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin'); //compresión de las imágenes sin pérdidas
var pngquant = require('imagemin-pngquant');
var ghPages = require('gulp-gh-pages');

//gulp-plumber de Nahuel
//MENSAJE DE ERROR
var onError = function(err) {
    beep([200, 200]);
    console.log(
        '\n\n****************************************************\n'.bold.gray +
        '*****************'.bold.gray + ' \(╯°□°)╯'.bold.red + ' ︵ '.bold.gray + 'ɹoɹɹǝ '.bold.blue + '*****************'.bold.gray +
        '\n****************************************************\n\n'.bold.gray +
        String(err) +
        '\n\n*******************************************************\n\n'.bold.gray);
    this.emit('end');
};

//css es el nombre que le ponemos nosotros a la f(x), 
//puede ser el que queramos
gulp.task('css', function() {
    return gulp.src('src/scss/style.scss')
        //pipe encadena todas las funciones que le añadamos
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: [
                'last 2 versions',
                '> 1%'
            ]
        }))
        .pipe(gulp.dest('dist/css'));
});

//HTML (no necesita variable previa, ya viene x defecto con gulp)
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

//IMAGEMIN
gulp.task('imgmin', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));

});

//GH-PAGES: así directamente con gulp podremos subir a gh-pages el proyecto
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

//tarea default, le indicamos que antes de realizarla
//ejecute las tareas puestas en la array (second param)
gulp.task('default', function() {
    //BROWSER-SYNC
    browserSync.init({
        server: { baseDir: "./dist" },
        //archivos que queremos que esté mirando
        files: ['./dist/css/style.css']
    });
    //WATCH: ejecuta la tarea cuando hay un cambio en un archivo, el que le indiquemos
    //las tareas watch interesa hacerlas siempre sobre las extensiones
    gulp.watch('./src/scss/**/*.scss', ['css']);
    //nuevo watch que mira a los html
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
})

//tarea default, le indicamos que antes de realizarla
//ejecute las tareas puestas en la array (second param)
/*gulp.task('default',['css'], function(){
	
});*/