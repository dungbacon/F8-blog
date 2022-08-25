const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const path = require('path')
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan('combined'))

// Để dùng các file css tĩnh hoặc ảnh ...
app.use(express.static(path.join(__dirname, 'public')));

// Template Engine => tạo xương sống html
app.engine('hbs', handlebars({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resources/views"));
// console.log("Path: ", __dirname)


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);