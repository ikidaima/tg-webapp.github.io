import { Avatar } from "@nextui-org/react";
import { useTelegram } from "../../../entities/Telegram";
import { NewsIcon } from "../../../shared/icons/News";
import { Link } from "react-router-dom";

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
      <NewsIcon
        style={{ marginRight: "0.5em" }}
        fontSize={"1.5em"}
        color="#006FEE"
      />
      <h1 className="text-primary font-bold" style={{fontWeight: 900}}>News</h1>
      <Link to={'profile'}>
        <Avatar
          src={Telegram.initDataUnsafe.user?.photo_url}
          className="ml-auto mr-0"
          size="sm"
        />
      </Link>
    </header>
  );
};
