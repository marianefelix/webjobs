import { Router } from 'express';
import { JobController } from './controllers/job';
import { UserController } from './controllers/user';

const routes = Router();

routes.post('/user', (request, response) =>
  new UserController().handleSaveUser(request, response)
);

routes.post('/user/login', (request, response) =>
  new UserController().handleAuthenticateUser(request, response)
);

routes.post('/job/create-job', (request, response) =>
  new JobController().handleSaveJob(request, response)
);

export { routes };
