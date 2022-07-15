import { Request, Response } from 'express';
import { JobService } from '../services/job';
export class JobController {
  private service = new JobService();

  handleSaveJob = (request: Request, response: Response) => {
    const data = request.body;

    const result = this.service.saveJob(data);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  };
}
