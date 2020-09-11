import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';

// services
import CreateUserService from '@modules/users/services/CreateUserService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const creatUser = container.resolve(CreateUserService);

    const user = await creatUser.execute({ email, password });

    return response.status(201).json(classToClass(user));
  }
}

export default UsersController;
