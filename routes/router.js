import express from 'express';
import parkingsRouter from './parkingsRouter.js';
import actionsRouter from './actionsRouter.js';
import usersRouter from './usersRouter.js';
import authRouter from './authRouter.js';

const apiRouter = (app) => {
  const router = express.Router();
  app.use('/api', router);
  router.use('/parkings', parkingsRouter);
  router.use('/users', usersRouter);
  router.use(actionsRouter);
  router.use('/auth', authRouter);
};

export default apiRouter;
