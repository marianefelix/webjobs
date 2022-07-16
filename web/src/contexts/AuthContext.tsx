import { ResponseType, useRequest } from 'hooks/useRequest';
import { User, UserCredentials } from 'models/user';
import { createContext, ReactNode, useState } from 'react';

interface AuthContextType {
  userId: number;
  hasUser: boolean;
  isRegisterUserLoading: boolean;
  isAuthenticateUserLoading: boolean;
  registerUser: (data: User) => Promise<ResponseType>;
  authenticateUser: (data: UserCredentials) => Promise<ResponseType>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export interface AuthUserResponseType {
  userId: number;
  message: string;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { runRequest } = useRequest();
  const [userId, setUserId] = useState(0);
  const [hasUser, setHasUser] = useState(false);
  const [isRegisterUserLoading, setIsRegisterUserLoading] = useState(false);
  const [isAuthenticateUserLoading, setIsAuthenticateUserLoading] =
    useState(false);

  const authenticateUser = async (data: UserCredentials) => {
    setIsAuthenticateUserLoading(true);

    const customErrorMessage = 'Error authenticating user, please try again.';

    const response = await runRequest<AuthUserResponseType, UserCredentials>(
      '/user/login',
      'post',
      undefined,
      data,
      customErrorMessage
    );

    setIsAuthenticateUserLoading(false);

    if (response instanceof Error) {
      setHasUser(false);
      setUserId(0);

      return {
        success: undefined,
        error: response,
      };
    }

    setHasUser(true);
    setUserId(response.userId);

    return { success: response.message, error: undefined };
  };

  const registerUser = async (data: User) => {
    setIsRegisterUserLoading(true);

    const customErrorMessage = 'Error registering user, please try again.';

    const response = await runRequest<string, User>(
      '/user',
      'post',
      undefined,
      data,
      customErrorMessage
    );

    setIsRegisterUserLoading(false);

    if (response instanceof Error) {
      return {
        success: undefined,
        error: response,
      };
    }

    return { success: response, error: undefined };
  };

  return (
    <AuthContext.Provider
      value={{
        userId,
        hasUser,
        registerUser,
        authenticateUser,
        isAuthenticateUserLoading,
        isRegisterUserLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
