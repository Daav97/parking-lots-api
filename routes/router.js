import express from 'express';
import parkingsRouter from './parkingsRouter.js';
import actionsRouter from './actionsRouter.js';
import usersRouter from './usersRouter.js';

const apiRouter = (app) => {
  const router = express.Router();
  app.use('/api', router);
  router.use('/parkings', parkingsRouter);
  router.use('/users', usersRouter);
  router.use(actionsRouter);
};

export default apiRouter;
