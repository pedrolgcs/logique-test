import { v4 } from 'uuid';

// entities
import Favorite from '@modules/favorites/infra/typeorm/entities/Favorite';

// dtos
import ICreateFavoriteDTO from '@modules/favorites/dtos/ICreateFavoriteDTO';

// repository interface
import IFavoritesRepository from '../IFavoritesRepository';

class FakeFavoritesRepository implements IFavoritesRepository {
  private favorites: Favorite[] = [];

  public async create(data: ICreateFavoriteDTO): Promise<Favorite> {
    const favorite = new Favorite();
    Object.assign(favorite, { id: v4() }, data);
    this.favorites.push(favorite);
    return favorite;
  }

  public async findByUser(): Promise<Favorite[]> {
    return this.favorites;
  }

  public async findByUrlCode(id: string): Promise<Favorite | undefined> {
    const favorite = this.favorites.find(element => element.url_code === id);
    return favorite;
  }
}

export default FakeFavoritesRepository;
