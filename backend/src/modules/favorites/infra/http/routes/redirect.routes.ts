import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

// controllers
import RedirectController from '../controllers/RedirectController';

// inicialize
const redirectRouter = Router();
const redirectController = new RedirectController();

redirectRouter.get(
  '/:url_code',
  celebrate({
    [Segments.PARAMS]: {
      url_code: Joi.string().required(),
    },
  }),
  redirectController.show,
);

export default redirectRouter;
