import AppError from '@shared/errors/AppError';

// fakes
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeFavoritesRepository from '@modules/favorites/repositories/fakes/FakeFavoritesRepository';

// service
import UrlResolveService from './UrlResolveService';

let fakeFavoritesRepository: FakeFavoritesRepository;
let fakeUsersRepository: FakeUsersRepository;
let urlResolve: UrlResolveService;

describe('UrlResolve', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeFavoritesRepository = new FakeFavoritesRepository();
    urlResolve = new UrlResolveService(fakeFavoritesRepository);
  });

  it('should be able to find url by url_code', async () => {
    const user = await fakeUsersRepository.create({
      email: 'pedro@gmail.com',
      password: '123123',
    });

    const favorite = await fakeFavoritesRepository.create({
      title: 'Google',
      url: 'https://www.google.com',
      short_url: 'http://localhost:3333/12345',
      url_code: '12345',
      user_id: user.id,
    });

    const resolveUrl = await urlResolve.execute({
      url_code: favorite.url_code,
    });

    expect(resolveUrl.url).toBe('https://www.google.com');
  });

  it('should not be able to find a url with invalid url_code', async () => {
    await expect(
      urlResolve.execute({ url_code: 'invalid-code' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
