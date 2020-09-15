import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

// interfaces
import IFavoritesRepository from '../repositories/IFavoritesRepository';

interface IRequest {
  favorite_id: string;
}

@injectable()
class DeleteFavoriteService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  public async execute({ favorite_id }: IRequest): Promise<void> {
    const favorite = await this.favoritesRepository.findById(favorite_id);

    if (!favorite) {
      throw new AppError('Favorite not found');
    }

    await this.favoritesRepository.deleteById(favorite.id);
  }
}

export default DeleteFavoriteService;
