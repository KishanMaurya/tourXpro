const express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var cookieParser = require('cookie-parser');
const app = express();
const indexRouter = require('./routes/index');
const errorRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');
const blogRouter = require('./routes/blog');
const blog_detailsRouter = require('./routes/blog-details');
const blog_sidebarRouter = require('./routes/blog-sidebar');
const blog_standardRouter = require('./routes/blog-standard');
const destinatoion_standardRouter = require('./routes/destination-details');
const destinatoionRouter = require('./routes/destination');
const faqRouter = require('./routes/faq');
const galleryRouter = require('./routes/gallery');
const guideRouter = require('./routes/guide');
const indexTwoRouter = require('./routes/index2');
const packageDetailsRouter = require('./routes/package-details');
const packageSidebarRouter = require('./routes/package-sidebar');
const packageStandardRouter = require('./routes/package-standard');
const packageRouter = require('./routes/package');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//this route works for the access the page (get this page by name)
app.use('/', indexRouter);
app.use('/404', errorRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/blog', blogRouter);
app.use('/blog-details', blog_detailsRouter);
app.use('/blog-sidebar', blog_sidebarRouter);
app.use('/blog-standard', blog_standardRouter);
app.use('/destination-details', destinatoion_standardRouter);
app.use('/destination', destinatoionRouter);
app.use('/faq', faqRouter);
app.use('/guide', guideRouter);
app.use('/gallery', galleryRouter);
app.use('/index2', indexTwoRouter);
app.use('package-details', packageDetailsRouter);
app.use('/package-sidebar', packageSidebarRouter);
app.use('/package-standard', packageStandardRouter);
app.use('/package', packageRouter);

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('Express server listening on port' + port);
});