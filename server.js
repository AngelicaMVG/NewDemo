const express = require('express');
const { Model } = require('objection');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const fs = require('fs-extra');

//Import ORM

const apiRouter = require('./src/routes/apiRouter.js');
const studentsRouter = require('./src/routes/studentsRouter.js');
const authRouter = require('./src/routes/authRouter.js');

const connectToDb = require('./src/database/dbConnect.js');
const dbConfigObj = require('./knexfile');

const passport = require('passport');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

const registerLocalStrategy = require('./src/middleware/passport-local--registerLocalStrategy.js');
const {
  configDeserializeUser,
  configSerializeUser
} = require('./src/helpers/passport-local--sessionActions.js');

const app = express();

let dbConnectionConfig;

switch (process.env.NODE_ENV) {
  case 'production':
    dbConnectionConfig = dbConfigObj.production;
    break;
  default:
    dbConnectionConfig = dbConfigObj.development;
}

const appDb = connectToDb(dbConnectionConfig);

Model.knex(appDb);
app.locals.db = appDb;

// Cookie Parse + Cookie Session middleware

app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());
app.use(
  cookieSession({
    name: 'cookiemonster',
    secret: 'superdupersupersecret',
    httpOnly: true,
    signed: false
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(registerLocalStrategy());
passport.serializeUser(configSerializeUser());
passport.deserializeUser(configDeserializeUser());

app.use(cors('*'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiRouter);
app.use('/api/students', studentsRouter);
app.use('/auth', authRouter);
app.use((req, res) => {
  res.render('reactApp.ejs');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`APP LISTENING ON ${PORT}`);
});
