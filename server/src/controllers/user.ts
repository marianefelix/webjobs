import { Request, Response } from "express";
import { UserService } from "../services/user";

export class UserController {
    handleSaveUser = (request: Request, response: Response) => {
        const data = request.body;

        const service = new UserService();

        const result = service.saveUser(data);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json('Usuário cadastrado com sucesso!');
    };

    handleGetUser = async (response: Response)  => {
        const service = new UserService();
        const result = await service.getUsers();

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        
        return response.status(200).json(result);
    }
}