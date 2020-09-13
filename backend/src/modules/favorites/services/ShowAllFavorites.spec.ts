// fakes
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeFavoritesRepository from '../repositories/fakes/FakeFavoritesRepository';

// service
import ShowAllFavoritesService from './ShowAllFavoritesService';

let fakeFavoritesRepository: FakeFavoritesRepository;
let fakeUsersRepository: FakeUsersRepository;
let showAllFavorites: ShowAllFavoritesService;

describe('ShowAllRoles', () => {
  beforeEach(() => {
    fakeFavoritesRepository = new FakeFavoritesRepository();
    fakeUsersRepository = new FakeUsersRepository();
    showAllFavorites = new ShowAllFavoritesService(fakeFavoritesRepository);
  });

  it('should be able to show the all favorites', async () => {
    const user = await fakeUsersRepository.create({
      email: 'pedro@gmail.com',
      password: '123123',
    });

    const google = await fakeFavoritesRepository.create({
      title: 'Google',
      url: 'https://www.google.com',
      short_url: 'http://localhost:3333/12345',
      url_code: '12345',
      user_id: user.id,
    });

    const youtube = await fakeFavoritesRepository.create({
      title: 'Google',
      url: 'https://www.youtube.com',
      short_url: 'http://localhost:3333/12345',
      url_code: '321321',
      user_id: user.id,
    });

    const favorites = await showAllFavorites.execute({ user_id: user.id });

    expect(favorites).toEqual(expect.arrayContaining([google, youtube]));
    expect(favorites).toHaveLength(2);
  });
});
