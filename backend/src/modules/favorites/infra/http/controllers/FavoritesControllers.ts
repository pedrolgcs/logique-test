import { Request, Response } from 'express';
import { container } from 'tsyringe';

// services
import CreateFavoriteService from '@modules/favorites/services/CreateFavoriteService';
import ShowAllFavoritesService from '@modules/favorites/services/ShowAllFavoritesService';
import DeleteFavoriteService from '@modules/favorites/services/DeleteFavoriteService';

class FavoritesControllers {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showFavorites = container.resolve(ShowAllFavoritesService);

    const favorites = await showFavorites.execute({ user_id });

    return response.status(200).json(favorites);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { title, url } = request.body;
    const user_id = request.user.id;

    const createFavorite = container.resolve(CreateFavoriteService);

    const favorite = await createFavorite.execute({ user_id, title, url });

    return response.status(201).json(favorite);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { favorite_id } = request.params;

    const deleteFavorite = container.resolve(DeleteFavoriteService);

    await deleteFavorite.execute({ favorite_id });

    return response.status(204).send();
  }
}

export default FavoritesControllers;
