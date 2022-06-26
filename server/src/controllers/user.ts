import { Request, Response } from "express";
import { UserService } from "../services/user";

export class UserController {
    private service = new UserService();

    handleSaveUser = (request: Request, response: Response) => {
        const data = request.body;

        const result = this.service.saveUser(data);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json('Usuário cadastrado com sucesso!');
    };

    handleGetUser = (response: Response)  => {
        const result = this.service.getUsers();

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        
        return response.status(200).json(result);
    };

    handleAuthenticateUser = (request: Request, response: Response) => {
        const data = request.body;

        const result = this.service.authenticateUser(data);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result);
    };
}