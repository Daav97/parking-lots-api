import express from 'express';
import apiRouter from './routes/router.js';
import {
  customErrorHandler,
  errorHandler,
  errorLogs,
} from './middlewares/errorHandler.js';
import { config } from './config/config.js';

const app = express();
const PORT = config.port;

app.use(express.json());

//Passport script:
import './libs/passport/index.js';

apiRouter(app);

app.use(errorLogs);
app.use(customErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
