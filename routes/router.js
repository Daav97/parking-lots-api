import express from 'express';
import parkingsRouter from './parkingsRouter.js';
import actionsRouter from './actionsRouter.js';

const apiRouter = (app) => {
  const router = express.Router();
  app.use('/api', router);
  router.use('/parkings', parkingsRouter);
  router.use('/actions', actionsRouter);
};

export default apiRouter;
