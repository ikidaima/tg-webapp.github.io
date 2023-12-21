import React, { ReactNode, FC } from 'react';
import { Spinner } from '@nextui-org/react';
import { useTelegram } from '../../entities/Telegram';
import { useAuth } from '../../entities/User';

interface Props {
  children?: ReactNode;
}

export const Auth: FC<Props> = function Auth() {
  const { Telegram } = useTelegram();
  const userId = Telegram.initDataUnsafe.user?.id
  const {
    isLoading,
    user,
  } = useAuth(userId);

  if (isLoading) {
    return <Spinner />
  }

  return null;
};