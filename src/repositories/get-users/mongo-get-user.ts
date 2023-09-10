import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        fistName: "victor",
        lastName: "lunes",
        email: "victorlunes@email",
        password: "123",
      },
    ];
  }
}
