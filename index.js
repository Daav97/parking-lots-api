import express from 'express';
import apiRouter from './routes/router.js';
import { errorHandler, errorLogs } from './middlewares/errorHandler.js';
import { config } from './config/config.js';

const app = express();
const PORT = config.port;

app.use(express.json());

apiRouter(app);

app.use(errorLogs);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
