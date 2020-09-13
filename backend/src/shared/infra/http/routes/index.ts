import { Router } from 'express';

// routes
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import favoritesRouter from '@modules/favorites/infra/http/routes/favorites.routes';
import redirectRouter from '@modules/favorites/infra/http/routes/redirect.routes';

// create router
const routes = Router();

routes.get('/', (request, response) => {
  response.status(200).json({ message: 'Hello' });
});

// users
routes.use('/users', usersRouter);

// sessions
routes.use('/sessions', sessionsRouter);

// favorites
routes.use('/favorites', favoritesRouter);

// redirect
routes.use('/', redirectRouter);

export default routes;
