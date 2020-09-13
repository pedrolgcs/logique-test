import Favorite from '../infra/typeorm/entities/Favorite';

// dtos
import ICreateFavoriteDTO from '../dtos/ICreateFavoriteDTO';

export default interface IUsersRepository {
  create(data: ICreateFavoriteDTO): Promise<Favorite>;
  find(): Promise<Favorite[]>;
  findByUrlCode(code: string): Promise<Favorite | undefined>;
}
