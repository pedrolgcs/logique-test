import AppError from '@shared/errors/AppError';

// fakes
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeFavoritesRepository from '@modules/favorites/repositories/fakes/FakeFavoritesRepository';

// service
import CreateFavoriteService from './CreateFavoriteService';

let fakeUsersRepository: FakeUsersRepository;
let fakeFavoritesRepository: FakeFavoritesRepository;
let createFavorite: CreateFavoriteService;

describe('CreateFavorites', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeFavoritesRepository = new FakeFavoritesRepository();
    createFavorite = new CreateFavoriteService(fakeFavoritesRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await fakeUsersRepository.create({
      email: 'pedro@gmail.com',
      password: '123123',
    });

    const favorite = await createFavorite.execute({
      user_id: user.id,
      title: 'Google',
      url: 'https://www.google/',
    });

    expect(favorite).toHaveProperty('id');
  });

  it('should not be able to create a new favorite with invalid url', async () => {
    const user = await fakeUsersRepository.create({
      email: 'pedro@gmail.com',
      password: '123123',
    });

    await expect(
      createFavorite.execute({
        user_id: user.id,
        title: 'Google',
        url: 'htp:/www.google.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
