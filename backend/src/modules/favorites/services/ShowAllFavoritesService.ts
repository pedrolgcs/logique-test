import { injectable, inject } from 'tsyringe';

// entities
import Favorite from '../infra/typeorm/entities/Favorite';

// interfaces
import IFavoritesRepository from '../repositories/IFavoritesRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowAllFavoritesService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Favorite[]> {
    const favorites = await this.favoritesRepository.findByUser(user_id);
    return favorites;
  }
}

export default ShowAllFavoritesService;
