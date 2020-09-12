import { injectable, inject } from 'tsyringe';
import { isWebUri } from 'valid-url';
import { tiny } from 'tiny-shortener';

import AppError from '@shared/errors/AppError';

// entities
import Favorite from '@modules/favorites/infra/typeorm/entities/Favorite';

// repository
import IFavoritesRepository from '../repositories/IFavoritesRepository';

interface IRequest {
  user_id: string;
  title: string;
  url: string;
}

@injectable()
class CreateFavoriteService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  public async execute({ user_id, title, url }: IRequest): Promise<Favorite> {
    if (!isWebUri(url)) {
      throw new AppError('Invalid URL');
    }

    const url_shorted = await tiny(url);

    const favorite = await this.favoritesRepository.create({
      user_id,
      title,
      url,
      url_shorted,
    });

    return favorite;
  }
}

export default CreateFavoriteService;
