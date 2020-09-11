import { Router } from 'express';

// routes
import usersRouter from '@modules/users/infra/http/routes/users.routes';

// create router
const routes = Router();

routes.get('/', (request, response) => {
  response.status(200).json({ message: 'Hello' });
});

// users
routes.use('/users', usersRouter);

export default routes;
