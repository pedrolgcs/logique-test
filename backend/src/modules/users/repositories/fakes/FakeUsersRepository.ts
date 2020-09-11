import { v4 } from 'uuid';

// entities
import User from '@modules/users/infra/typeorm/entities/User';

// dtos
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

// repository interface
import IUsersRepository from '../IUsersRepository';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, { id: v4() }, data);
    this.users.push(user);
    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(element => element.id === id);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(element => element.email === email);
    return user;
  }
}

export default FakeUsersRepository;
