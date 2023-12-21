import React, { ReactNode, FC } from "react";
import { Spinner, Card, CardBody, Button } from '@nextui-org/react';
import { useTelegram } from "../../entities/Telegram";
import { useAuth, useUserDescribe } from "../../entities/User";

interface Props {
  children?: ReactNode;
}

const Describe = function Describe({
  userId,
  userName,
  lastName,
  firstName,
}: {
  userId: number;
  userName: string;
  lastName: string;
  firstName: string;
}) {
  const {
    isPending,
    isSuccess,
    mutate,
  } = useUserDescribe();


  if (isSuccess) {
    <div className="flex items-center justify-center">
      Ваша заявка принята, ожидайте подтверждения
    </div>
  }

  return (
    <div className="flex items-center justify-center">
      Для доступа к новостям необходимо запросить доступ на подписку
      <div>
        <Button
          disabled={isPending}
          onClick={() => {
            mutate({
              sysId: userId,
              userName,
              lastName,
              firstName,
            })
          }}
        >
          Подписаться
        </Button>
      </div>
    </div>
  );
};

export const Auth: FC<Props> = function Auth({ children }) {
  const { Telegram } = useTelegram();
  const userId = Telegram.initDataUnsafe.user?.id || 123;
  const userName = Telegram.initDataUnsafe.user?.username || '';
  const firstName = Telegram.initDataUnsafe.user?.first_name || '';
  const lastName = Telegram.initDataUnsafe.user?.last_name || '';

  const {
    isLoading,
    user,
  } = useAuth(userId);
    console.log("🚀 ~ file: index.tsx:67 ~ Auth ~ user:", user)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (user && 'isNew' in user && user.isNew) {
    return (
      <Describe
        userId={userId}
        firstName={firstName}
        lastName={lastName}
        userName={userName}
      />
    );
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
