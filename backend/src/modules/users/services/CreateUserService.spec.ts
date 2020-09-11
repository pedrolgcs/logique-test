import AppError from '@shared/errors/AppError';

// fakes
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashUser from '@modules/users/providers/HashUser/fakes/FakeHashUser';

// service
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashUser: FakeHashUser;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashUser = new FakeHashUser();
    createUser = new CreateUserService(fakeUsersRepository, fakeHashUser);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      email: 'pedro@gmail.com',
      password: '123123',
    });

    expect(user).toHaveProperty('id');
    expect(user.email).toBe('pedro@gmail.com');
  });

  it('should not be able to create a new user with same email another', async () => {
    await fakeUsersRepository.create({
      email: 'pedro@gmail.com',
      password: '123123',
    });

    await expect(
      createUser.execute({
        email: 'pedro@gmail.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
