import { createContext, ReactNode, useState } from 'react';

import { Job } from 'models/job';
import { ResponseType, useRequest } from 'hooks/useRequest';

interface JobContextType {
  isRegisterNewJobLoading: boolean;
  isGetJobsLoading: boolean;
  registerNewJob: (data: JobRequest) => Promise<ResponseType>;
  getJobs: () => Promise<
    | {
        success: undefined;
        error: Error;
      }
    | {
        success: Job[];
        error: undefined;
      }
  >;
}

interface JobContextProviderProps {
  children: ReactNode;
}

export type JobRequest = Omit<Job, 'company' | 'position' | 'postedAt' | 'id'>;

export const JobContext = createContext({} as JobContextType);

export const JobContextProvider = ({ children }: JobContextProviderProps) => {
  const { runRequest } = useRequest();
  const [isRegisterNewJobLoading, setIsRegisterNewJobLoading] = useState(false);
  const [isGetJobsLoading, setIsGetJobsLoading] = useState(false);

  const registerNewJob = async (data: JobRequest) => {
    setIsRegisterNewJobLoading(true);

    const customErrorMessage = 'Error registering new job, please try again.';

    const response = await runRequest<string, JobRequest>(
      'job/create-job',
      'post',
      undefined,
      data,
      customErrorMessage
    );

    setIsRegisterNewJobLoading(false);

    if (response instanceof Error) {
      return {
        success: undefined,
        error: response,
      };
    }

    return { success: response, error: undefined };
  };

  const getJobs = async () => {
    setIsGetJobsLoading(true);

    const customErrorMessage = 'Error getting job list, please try again.';

    const response = await runRequest<Job[]>(
      '/job/list',
      'get',
      undefined,
      undefined,
      customErrorMessage
    );

    setIsGetJobsLoading(false);

    if (response instanceof Error) {
      return {
        success: undefined,
        error: response,
      };
    }

    return { success: response, error: undefined };
  };

  return (
    <JobContext.Provider
      value={{
        isRegisterNewJobLoading,
        isGetJobsLoading,
        registerNewJob,
        getJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
