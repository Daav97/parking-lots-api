import express from 'express';
import apiRouter from './routes/router.js';
import {
  boomErrorHandler,
  errorHandler,
  errorLogs,
} from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

apiRouter(app);

app.use(errorLogs);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
