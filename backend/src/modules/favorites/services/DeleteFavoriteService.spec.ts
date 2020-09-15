import AppError from '@shared/errors/AppError';

// fakes
import FakeFavoritesRepository from '@modules/favorites/repositories/fakes/FakeFavoritesRepository';

// service
import DeleteFavoriteService from './DeleteFavoriteService';

let deleteFavorite: DeleteFavoriteService;
let fakeFavoritesRepository: FakeFavoritesRepository;

describe('DeleteFavorite', () => {
  beforeEach(() => {
    fakeFavoritesRepository = new FakeFavoritesRepository();
    deleteFavorite = new DeleteFavoriteService(fakeFavoritesRepository);
  });

  it('should be able to delete a favorite', async () => {
    const favorite = await fakeFavoritesRepository.create({
      title: 'Google',
      url: 'https://www.google.com',
      short_url: 'http://localhost:3333/12345',
      url_code: '12345',
      user_id: 'user-id',
    });

    await expect(
      deleteFavorite.execute({ favorite_id: favorite.id }),
    ).resolves.not.toThrow();
  });

  it('should not be able to delete a favorite on non existing id', async () => {
    await expect(
      deleteFavorite.execute({ favorite_id: 'non-existing-favorite-id' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
