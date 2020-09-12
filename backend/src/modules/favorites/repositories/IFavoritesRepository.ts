import Favorite from '../infra/typeorm/entities/Favorite';

// dtos
import ICreateFavoriteDTO from '../dtos/ICreateFavoriteDTO';

export default interface IUsersRepository {
  create(data: ICreateFavoriteDTO): Promise<Favorite>;
  find(): Promise<Favorite[]>;
  findById(id: string): Promise<Favorite | undefined>;
}
