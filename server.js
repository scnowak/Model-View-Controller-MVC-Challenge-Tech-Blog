// server.js
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const path = require('path');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Set up Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Import routes
const postRoutes = require('./controllers/postController');
const userRoutes = require('./controllers/userController');

app.use(routes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});