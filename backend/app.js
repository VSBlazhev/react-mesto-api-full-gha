const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('./middlewares/corsHandler');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const { loginUser, createUser, logOutUser } = require('./controllers/user');
const auth = require('./middlewares/auth');
const errHandler = require('./middlewares/errHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;

const { loginValidation, createUserValidation } = require('./middlewares/userValidation');
const NotFoundError = require('./errors/notFoundErr');

const app = express();
app.use(cors);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', loginValidation, loginUser);
app.post('/signup', createUserValidation, createUser);
app.post('/signout', logOutUser);

app.use('/users', auth, usersRouter);
app.use('/cards', auth, cardsRouter);

app.use('/*', (req, res, next) => next(new NotFoundError('Страница не найдена')));

app.use(errorLogger);

app.use(errors());
app.use(errHandler);
app.listen(PORT, () => {

});
