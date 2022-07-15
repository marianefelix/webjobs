import fs from 'fs';
import { basePath } from '../constants';
import { UserService } from './user';

type JobRequest = {
  companyId: number;
  role: string;
  level: string;
  workingTime: string;
  location: string;
  languages: string[];
  tools: string[];
  new: boolean;
  featured: boolean;
  link: string;
};

interface JobResponse extends JobRequest {
  id: number;
  company: string;
  logo: string;
  position: string;
}

export class JobService {
  private jobListFileName = 'jobs.json';
  private userService = new UserService();

  saveJob = (data: JobRequest) => {
    const jobList = this.getJobList();
    const usersList = this.userService.getUsers();

    const companyUser = usersList.filter(
      (userItem) => userItem.id === data.companyId
    );

    if (companyUser.length === 0) {
      return new Error('Invalid user. Please, try again.');
    }

    const formattedData = {} as JobResponse;

    formattedData.id = jobList.length + 1;
    formattedData.position = `${data.role} ${data.level} Developer`;
    formattedData.company = companyUser[0].companyName;
    formattedData.logo = companyUser[0].logoUrl;

    jobList.push({ ...formattedData, ...data });

    const newJobs = JSON.stringify(jobList, null, ' ');
    fs.writeFileSync(`${basePath}/${this.jobListFileName}`, newJobs, 'utf8');

    return 'Job registered successfully!';
  };

  getJobList = (): JobResponse[] => {
    try {
      const jsonString = fs.readFileSync(
        `${basePath}/${this.jobListFileName}`,
        'utf8'
      );

      if (jsonString.length === 0) {
        return [];
      }

      const data = JSON.parse(jsonString);

      return data;
    } catch (err) {
      return err;
    }
  };
}
