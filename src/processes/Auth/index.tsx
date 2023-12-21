import React, { ReactNode, FC } from "react";
import { Spinner, Button } from '@nextui-org/react';
import { useTelegram } from "../../entities/Telegram";
import { useAuth } from "../../entities/User";

interface Props {
  children?: ReactNode;
}

export const Auth: FC<Props> = function Auth({ children }) {
  const { Telegram } = useTelegram();
  const userId = Telegram.initDataUnsafe.user?.id;
  const {
    isLoading,
    user,
  } = useAuth(userId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (user && 'inNew' in user && user.inNew) {
    return (
      <Button>
        Подписаться
      </Button>
    );
  }

  return (
    <>
      {JSON.stringify(user)}
      {children}
    </>
  );
};
