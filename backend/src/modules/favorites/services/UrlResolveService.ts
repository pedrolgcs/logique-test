import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

// entities
import Favorite from '@modules/favorites/infra/typeorm/entities/Favorite';

// repository
import IFavoritesRepository from '../repositories/IFavoritesRepository';

interface IRequest {
  url_code: string;
}

@injectable()
class UrlResolveService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  public async execute({ url_code }: IRequest): Promise<Favorite> {
    const url = await this.favoritesRepository.findByUrlCode(url_code);

    if (!url) {
      throw new AppError('Url not found', 404);
    }

    return url;
  }
}

export default UrlResolveService;
