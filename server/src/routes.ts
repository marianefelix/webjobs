import { Router } from 'express';
import { UserController } from './controllers/user';

const routes = Router();

routes.post('/user', (request, response) =>
  new UserController().handleSaveUser(request, response)
);
routes.post('/user/login', (request, response) =>
  new UserController().handleAuthenticateUser(request, response)
);
routes.get('/user', (_, response) =>
  new UserController().handleGetUser(response)
);

export { routes };
