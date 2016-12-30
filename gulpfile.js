var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    del          = require("del")

// Compile SCSS files to CSS
gulp.task("scss", function () {
    del(["themes/iammatthias_v1/static/css/**/*"])
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({outputStyle : "compressed"}))
        .pipe(autoprefixer({browsers : ["last 20 versions"]}))
        .pipe(hash())
        .pipe(gulp.dest("themes/iammatthias_v1/static/css"))
        //Create a hash map
        .pipe(hash.manifest("hash.json"))
        //Put the map in the data directory
        .pipe(gulp.dest("data/css"))
})

// Hash images
gulp.task("images", function () {
    del(["themes/iammatthias_v1/static/images/**/*"])
    gulp.src("src/images/**/*")

        .pipe(gulp.dest("themes/iammatthias_v1/static/images"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/images"))
})

gulp.task("photos", function () {
    del(["themes/iammatthias_v1/static/photos/**/*"])
    gulp.src("src/photos/**/*")
        .pipe(gulp.dest("themes/iammatthias_v1/static/photos"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/photos"))
})

// Hash javascript
gulp.task("js", function () {
    del(["themes/iammatthias_v1/static/js/**/*"])
    gulp.src("src/js/**/*")
        .pipe(hash())
        .pipe(gulp.dest("themes/iammatthias_v1/static/js"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/js"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "images", "js"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("src/images/**/*", ["images"])
    gulp.watch("src/js/**/*", ["js"])
})

gulp.task('default', ['scss', 'images', 'photos', 'js', 'watch']);

gulp.task('publish', ['scss', 'images', 'photos', 'js']);
