import fs from 'fs';

type UserRequest = {
  companyName: string;
  logoUrl: string;
  email: string;
  password: string;
};

export class UserService {
  public basePath = './src/database';

  saveUser = (data: UserRequest) => {
    const users = this.getUsers();

    const alreadyExists = users.some((userItem) => {
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

    users.push(data);
    const newUsers = JSON.stringify(users, null, ' ');
    fs.writeFileSync(`${this.basePath}/users.json`, newUsers, 'utf8');

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

  getUsers = (): UserRequest[] => {
    try {
      const jsonString = fs.readFileSync(`${this.basePath}/users.json`, 'utf8');

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
