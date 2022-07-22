const express = require('express');
require('express-async-errors');
const errorHandleMiddlewares = require('./middlewares/errorHandleMiddlewares');
const categoriesRouter = require('./routers/categoriesRouter');
const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');

// ...

const app = express();

app.use(express.json());

app.use('/categories', categoriesRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);

app.use(errorHandleMiddlewares);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
