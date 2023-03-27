
import { AppDataSource, dbConnection } from "../database/connection";
import { User } from "../database/entities/User";

const userRepository = AppDataSource.getRepository(User);

const getAllUser = async () => {
  try {
    const savedUser: User[] = await userRepository.find();
    return savedUser;
  } catch (error) {
    console.log("Error: on finding all Users in database: ", error);
  }
};

const addUser = async (obj: User) => {
  const user = new User();
  user.name = obj.name;
  user.age = obj.age;
  user.birthDay = obj.birthDay;
  user.email = obj.email;

  try {
    const addedUser = await userRepository.save(user);
    return addedUser;
  } catch (error) {
    console.log("Error: on Adding User in database:", error);
  }
};

const deleteUser = async (id: string) => {
  try {
    const userToRemove = await userRepository.findOneBy({
      id: id,
    });
    await userRepository.remove(userToRemove);
  } catch (error) {
    console.log("Error: on Deleting User in database:", error);
  }
};

export default {
  getAllUser,
  addUser,
  deleteUser,
};
