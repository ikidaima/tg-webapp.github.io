import React, { ReactNode, FC } from "react";
import { Spinner, Card, CardBody, Button } from '@nextui-org/react';
import { useTelegram } from "../../entities/Telegram";
import { useAuth, useUserDescribe, type User } from "../../entities/User";

interface Props {
  children?: ReactNode;
}

const Describe = function Describe({
  user,
  userId,
  userName,
  lastName,
  firstName,
}: {
  user: User;
  userId: number;
  userName: string;
  lastName: string;
  firstName: string;
}) {
  console.log("🚀 ~ file: index.tsx:23 ~ user:", user)
  const {
    isPending,
    isSuccess,
    mutate,
  } = useUserDescribe();

  if (isSuccess || (user && 'isNew' in user && !user.isNew)) {
    return (
      <div>
        <Card>
          <CardBody>Ваша заявка принята, ожидайте подтверждения</CardBody>
        </Card>
        <div className="flex items-center justify-center p-4">
          <Button onClick={() => window.location.reload()}>Обновить</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Card>
        <CardBody>Для доступа к новостям необходимо запросить доступ на подписку</CardBody>
      </Card>
      <div className="flex items-center justify-center p-4">
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
        user={user}
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

  if (user && 'isRejected' in user && user.isRejected) {
    return (
      <Card>
        <CardBody>К сожалению вам заблокировали доступ</CardBody>
      </Card>
    );
  }

  return (
    <div>
      <Card>
        <CardBody>Ваша заявка принята, ожидайте подтверждения</CardBody>
      </Card>
      <div className="flex items-center justify-center p-4">
        <Button onClick={() => window.location.reload()}>Обновить</Button>
      </div>
  </div>
  );
};
