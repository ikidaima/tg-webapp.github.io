import { Avatar, Link } from "@nextui-org/react";
import { useTelegram } from "../../../entities/Telegram";

export const Header = function Header() {
  const { Telegram } = useTelegram();
  return (
    <header className="flex items-center justify-between p-3 sticky top-0 shadow-md">
      <div className="" />
      <Link href="/profile">
        <Avatar
          color="secondary"
          src={Telegram.initDataUnsafe.user?.photo_url}
          className="ml-auto mr-0"
          size="sm"
        />
      </Link>
    </header>
  );
};
