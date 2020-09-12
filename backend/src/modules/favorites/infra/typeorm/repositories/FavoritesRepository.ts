import { Repository, getRepository } from 'typeorm';

// repository interface
import IFavoritesRepository from '@modules/favorites/repositories/IFavoritesRepository';

// dtos
import ICreateFavoriteDTO from '@modules/favorites/dtos/ICreateFavoriteDTO';

// entities
import Favorite from '../entities/Favorite';

class FavoritesRepository implements IFavoritesRepository {
  private ormRepository: Repository<Favorite>;

  constructor() {
    this.ormRepository = getRepository(Favorite);
  }

  public async create(data: ICreateFavoriteDTO): Promise<Favorite> {
    const favorite = this.ormRepository.create(data);
    await this.ormRepository.save(favorite);
    return favorite;
  }

  public async find(): Promise<Favorite[]> {
    const favorites = await this.ormRepository.find({
      order: { title: 'ASC' },
    });
    return favorites;
  }

  public async findById(id: string): Promise<Favorite | undefined> {
    const favorite = await this.ormRepository.findOne(id);
    return favorite;
  }
}

export default FavoritesRepository;
