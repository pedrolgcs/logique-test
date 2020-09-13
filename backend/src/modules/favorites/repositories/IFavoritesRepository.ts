import Favorite from '../infra/typeorm/entities/Favorite';

// dtos
import ICreateFavoriteDTO from '../dtos/ICreateFavoriteDTO';

export default interface IUsersRepository {
  create(data: ICreateFavoriteDTO): Promise<Favorite>;
  findByUser(id: string): Promise<Favorite[]>;
  findByUrlCode(code: string): Promise<Favorite | undefined>;
}
