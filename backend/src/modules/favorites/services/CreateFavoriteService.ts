import { injectable, inject } from 'tsyringe';
import { isWebUri } from 'valid-url';

import AppError from '@shared/errors/AppError';

// entities
import Favorite from '@modules/favorites/infra/typeorm/entities/Favorite';

// providers

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

    const favorite = await this.favoritesRepository.create({
      user_id,
      title,
      url,
      url_shorted: 'url_encurtada',
    });

    return favorite;
  }
}

export default CreateFavoriteService;
