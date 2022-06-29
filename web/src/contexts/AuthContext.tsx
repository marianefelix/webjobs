import { ResponseType, useRequest } from 'hooks/useRequest';
import { User, UserCredentials } from 'models/user';
import { createContext, ReactNode, useState } from 'react';

interface AuthContextType {
  hasUser: boolean;
  isRegisterUserLoading: boolean;
  isAuthenticateUserLoading: boolean;
  registerUser: (data: User) => Promise<ResponseType>;
  authenticateUser: (data: UserCredentials) => Promise<ResponseType>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { runRequest } = useRequest();
  const [hasUser, setHasUser] = useState(false);
  const [isRegisterUserLoading, setIsRegisterUserLoading] = useState(false);
  const [isAuthenticateUserLoading, setIsAuthenticateUserLoading] =
    useState(false);

  const authenticateUser = async (data: UserCredentials) => {
    setIsAuthenticateUserLoading(true);

    const response = await runRequest<string, UserCredentials>(
      '/user/login',
      'post',
      undefined,
      data
    );

    setIsAuthenticateUserLoading(false);

    if (response instanceof Error) {
      setHasUser(false);

      return {
        success: undefined,
        error: response,
      };
    }

    setHasUser(true);

    return { success: response, error: undefined };
  };

  const registerUser = async (data: User) => {
    setIsRegisterUserLoading(true);

    const customErrorMessage =
      'Erro ao cadastrar usuário, por favor tente novamente.';

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
