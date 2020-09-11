import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

// controllers
import UsersController from '../controllers/UsersController';

// inicialize
const userRouter = Router();
const usersController = new UsersController();

// routes
userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

export default userRouter;
