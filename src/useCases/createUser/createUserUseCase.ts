
import { User } from "../../interface/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./createUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO, user: User) {
    const userExists = await this.usersRepository.findByEmail(data.email);
    if (userExists) {
      throw new Error("User already exists");
    }
    return await this.usersRepository.save(user);
  }
}