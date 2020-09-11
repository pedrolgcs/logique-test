import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

// entities
import User from '@modules/users/infra/typeorm/entities/User';

// providers
import IHashUser from '@modules/users/providers/HashUser/models/IHashUser';

// repository
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashUser')
    private hashUser: IHashUser,
  ) {}

  public async execute({ email, password }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await this.hashUser.generateHash(password);

    const user = await this.usersRepository.create({
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
