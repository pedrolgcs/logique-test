import { container } from 'tsyringe';

// users providers
import '@modules/users/providers';

// users repository
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// favorites repository
import IFavoritesRepository from '@modules/favorites/repositories/IFavoritesRepository';
import FavoritesRepository from '@modules/favorites/infra/typeorm/repositories/FavoritesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IFavoritesRepository>(
  'FavoritesRepository',
  FavoritesRepository,
);
