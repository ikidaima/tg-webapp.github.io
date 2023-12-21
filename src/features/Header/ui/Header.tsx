import { Avatar, Link } from "@nextui-org/react";
import { useTelegram } from "../../../entities/Telegram";

export const Header = function Header() {
  const { Telegram } = useTelegram();
  return (
    <header
      className="flex items-center justify-between p-3 sticky top-0 shadow-md"
      style={{
        backgroundColor: "var(--tg-theme-bg-color, #fff)",
        zIndex: 1000,
      }}
    >
      <div className="" />
      <Link href="/profile">
        <Avatar
          color="primary"
          src={Telegram.initDataUnsafe.user?.photo_url}
          className="ml-auto mr-0"
          size="sm"
        />
      </Link>
    </header>
  );
};
