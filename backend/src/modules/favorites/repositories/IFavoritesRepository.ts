import Favorite from '../infra/typeorm/entities/Favorite';

// dtos
import ICreateFavoriteDTO from '../dtos/ICreateFavoriteDTO';

export default interface IUsersRepository {
  create(data: ICreateFavoriteDTO): Promise<Favorite>;
  deleteById(is: string): Promise<void>;
  findById(id: string): Promise<Favorite | undefined>;
  findByUser(id: string): Promise<Favorite[]>;
  findByUrlCode(code: string): Promise<Favorite | undefined>;
}
