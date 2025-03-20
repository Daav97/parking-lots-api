import express from 'express';
import apiRouter from './routes/router.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

apiRouter(app);

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
