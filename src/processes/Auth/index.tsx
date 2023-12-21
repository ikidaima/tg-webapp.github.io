import React, { ReactNode, FC } from "react";
import { Spinner, Button, Card, CardBody } from '@nextui-org/react';
import { useTelegram } from "../../entities/Telegram";
import { useAuth } from "../../entities/User";

interface Props {
  children?: ReactNode;
}

const Describe = function Describe() {
  return (
    <Button>
      Подписаться
    </Button>
  );
};

export const Auth: FC<Props> = function Auth({ children }) {
  const { Telegram } = useTelegram();
  const userId = Telegram.initDataUnsafe.user?.id || 123

  const {
    isLoading,
    user,
  } = useAuth(userId);
    console.log("🚀 ~ file: index.tsx:25 ~ Auth ~ user:", user)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (user && 'isNew' in user && user.isNew) {
    return <Describe />;
  }

  if (user && 'isVerified' in user && user.isVerified) {
    return (
      <>
      {children}
    </>
    );
  }

  return (
    <Card>
      <CardBody>К сожалению вам заблокировали доступ</CardBody>
    </Card>
  );
};
