// server.js
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Set up Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));




// // Import routes
// const postRoutes = require('./controllers/postController');
// const userRoutes = require('./controllers/userController');


app.use(routes);
// app.use('/posts', postRoutes);
// app.use('/users', userRoutes);


// Home route  scn
app.get('/', (req, res) => {
  res.render('home');
});

// Login route   scn
app.get('/login', (req, res) => {
  res.render('login');
});

// Dashboard route  scn
app.get('/dashboard', (req, res) => {
  // Fetch data for the dashboard if needed   scn
  res.render('dashboard');
});


// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});