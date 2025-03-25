import express from 'express';
import apiRouter from './routes/router.js';
import {
  customErrorHandler,
  errorHandler,
  errorLogs,
} from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());

//Passport script:
import './libs/passport/index.js';

apiRouter(app);

app.use(errorLogs);
app.use(customErrorHandler);
app.use(errorHandler);

export default app;
