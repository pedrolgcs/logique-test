import AppError from '@shared/errors/AppError';

// fakes
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashUser from '@modules/users/providers/HashUser/fakes/FakeHashUser';

// service
import AuthenticateUserService from './AuthenticateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashUser: FakeHashUser;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashUser = new FakeHashUser();
    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashUser,
    );
  });

  it('should be able to authenticate', async () => {
    const user = await fakeUsersRepository.create({
      email: 'peter@gmail.com',
      password: '123123',
    });

    const response = await authenticateUser.execute({
      email: 'peter@gmail.com',
      password: '123123',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    expect(
      authenticateUser.execute({
        email: 'peter@gmail.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await fakeUsersRepository.create({
      email: 'peter@gmail.com',
      password: '123123',
    });

    expect(
      authenticateUser.execute({
        email: 'peter@gmail.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
