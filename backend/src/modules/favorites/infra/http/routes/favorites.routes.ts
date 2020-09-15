import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

// middleware
import auth from '@modules/users/infra/http/middlewares/auth';

// controllers
import FavoritesControllers from '../controllers/FavoritesControllers';

// inicialize
const favoriteRouter = Router();
const favoritesControllers = new FavoritesControllers();

favoriteRouter.use(auth);

// routes
favoriteRouter.get('/', favoritesControllers.index);

favoriteRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      url: Joi.string().required(),
    },
  }),
  favoritesControllers.create,
);

favoriteRouter.delete(
  '/:favorite_id',
  celebrate({
    [Segments.PARAMS]: {
      favorite_id: Joi.string().uuid().required(),
    },
  }),
  favoritesControllers.delete,
);

export default favoriteRouter;
