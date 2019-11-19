// security
var wwwhisper = require('connect-wwwhisper');

// dev dependencies
var browserSync = require('browser-sync');

// dependencies
var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path'); // This package ships with node.js
var port = process.env.PORT || 3200;
var dev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined; // dev is true on development environment and false in production environment
var morgan = require('morgan');

app.use(morgan('dev'));

app.use(wwwhisper(false));

// Setup SASS. Recompile .sass files automatically
app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, './public/sass'),
    dest: path.join(__dirname, './public/css'),
    debug: true,
    outputStyle: 'compressed',
    debug: true,
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

// Set public dir
app.use(express.static(path.join(__dirname,'./public'))); // Static files middleware for all files

// Configure handlebars (view engine)
app.engine('.hbs', exphbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Routes
app.use(require('./app/routes'));

var server = app.listen(port, listening);

if (dev) {
    console.log('The app is currently running in ' + 'development' + ' mode.'); // undefined mode in development environment
} else {
    console.log('The app is currently running in ' + 'production' + ' mode.'); // undefined mode in development environment
}

function listening() {
    if (dev) {
        // setup browser-sync
        browserSync ({
            proxy: 'localhost:' + port,
            files: ['public/pages', 'public/sass', 'views'],
            open: false // do not open a new tab on browser after reloading    
        });
    } else {
        console.log('App is listening on port:', port);
    }
}