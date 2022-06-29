import { useRequest } from 'hooks/useRequest';
import { User } from 'models/user';
import { createContext, ReactNode, useState } from 'react';

interface AuthContextType {
  registerUser: (data: User) => Promise<{ success?: string; error?: Error }>;
  isRegisterUserLoading: boolean;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { runRequest } = useRequest();
  const [isRegisterUserLoading, setIsRegisterUserLoading] = useState(false);

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
    <AuthContext.Provider value={{ registerUser, isRegisterUserLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
