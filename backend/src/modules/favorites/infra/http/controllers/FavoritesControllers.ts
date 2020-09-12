import { Request, Response } from 'express';
import { container } from 'tsyringe';

// services
import CreateFavoriteService from '@modules/favorites/services/CreateFavoriteService';

class FavoritesControllers {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, url } = request.body;
    const user_id = request.user.id;

    const createFavorite = container.resolve(CreateFavoriteService);

    const favorite = await createFavorite.execute({ user_id, title, url });

    return response.status(201).json(favorite);
  }
}

export default FavoritesControllers;
