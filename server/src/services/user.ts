import fs from 'fs';

type UserRequest = {
    company_name: string;
    logo_url: string;
    email: string;
    password: string;
};

export class UserService {
    public basePath = './src/database';

    saveUser = (data: UserRequest) => {
        const users = this.getUsers();

        const alreadyExists = users.some((userItem) => {
            const newUserDataEmail = data.email.toLocaleLowerCase();
            const newUserEmail = userItem.email.toLocaleLowerCase();

            if (newUserDataEmail === newUserEmail) {
               return true;
            }

            return false;
        });

        if (alreadyExists) {
            return new Error('Usuário com esse email já existe');
        }

        users.push(data);
        const newUsers = JSON.stringify(users, null, ' ');
        fs.writeFileSync(`${this.basePath}/users.json`, newUsers, 'utf8');

        return data;
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