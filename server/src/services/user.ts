import fs from 'fs';
import { basePath } from '../constants';

type UserRequest = {
  companyName: string;
  logoUrl: string;
  email: string;
  password: string;
};

interface UserResponse extends UserRequest {
  id: number;
}

export class UserService {
  saveUser = (data: UserRequest) => {
    const usersList = this.getUsers();

    const alreadyExists = usersList.some((userItem) => {
      const newUserEmailData = data.email.toLocaleLowerCase();
      const newUserEmail = userItem.email.toLocaleLowerCase();

      if (newUserEmail === newUserEmailData) {
        return true;
      }

      return false;
    });

    if (alreadyExists) {
      return new Error('There is already a user registered with this email.');
    }

    const newUser: UserResponse = {
      ...data,
      id: usersList.length + 1,
    };

    usersList.push(newUser);

    const newUsers = JSON.stringify(usersList, null, ' ');
    fs.writeFileSync(`${basePath}/users.json`, newUsers, 'utf8');

    return 'User registered successfully!';
  };

  authenticateUser = (data: Omit<UserRequest, 'logoUrl' | 'companyName'>) => {
    const users = this.getUsers();

    const userExists = users.some((userItem) => {
      const newUserEmailData = data.email.toLocaleLowerCase();
      const newUserEmail = userItem.email.toLocaleLowerCase();

      if (newUserEmail === newUserEmailData) {
        return true;
      }
    });

    if (userExists) {
      const filteredUser = users.filter(
        (userItem) =>
          userItem.email.toLocaleLowerCase() ===
            data.email.toLocaleLowerCase() &&
          userItem.password.toLocaleLowerCase() ===
            data.password.toLocaleLowerCase()
      );

      if (filteredUser.length === 0) {
        return new Error('Invalid email or password.');
      }

      return 'User authenticated successfully!';
    }

    return new Error('User does not exist.');
  };

  getUsers = (): UserResponse[] => {
    try {
      const jsonString = fs.readFileSync(`${basePath}/users.json`, 'utf8');

      if (jsonString.length === 0) {
        return [];
      }

      const data = JSON.parse(jsonString);

      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}
