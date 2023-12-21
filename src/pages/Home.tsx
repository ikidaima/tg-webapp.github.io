import { Fragment, useEffect } from "react";
import { PostList } from "../entities/Post";
import { useTelegram } from "../entities/Telegram";
import { Container } from "../shared/ui/Container";
import { Header } from "../features/Header";
import { usePosts } from "../entities/Post/model";
import { useNavigate } from "react-router-dom";
import { useUser } from "../entities/User";

const Home = function Home() {
  const navigate = useNavigate();
  const user = useUser();
  const hasTags = // @ts-ignore
    (Boolean(user.tagsOrganization) && Boolean(user.tagsOrganization.length)) ||
    // @ts-ignore
    (Boolean(user.tagsPerson) && Boolean(user.tagsPerson.length));
  const { data, isLoading, isFetching } = usePosts({
    // @ts-ignore
    tagsOrganization: user.tagsOrganization,
    // @ts-ignore
    tagsPerson: user.tagsPerson,
    enabled: hasTags,
  });
  const { Telegram } = useTelegram();
  useEffect(() => {
    Telegram.BackButton.hide();
    Telegram.MainButton.hide();

    if (!isFetching && (!data || data.length === 0)) {
      Telegram.MainButton.show();
      Telegram.MainButton.text = "Добавить тег";
      Telegram.MainButton.onClick(() => {
        navigate("/profile/add");
      });
    }
  }, [Telegram.BackButton, Telegram.MainButton, data, isFetching, navigate]);
  return (
    <Fragment>
      <Header title="Новости" />
      <Container>
        <PostList posts={data} isLoading={isLoading} />
      </Container>
    </Fragment>
  );
};

export default Home;
