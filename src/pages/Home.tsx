import { Fragment, useEffect } from "react";
import { TagType, PostList } from "../entities/Post";
import { useTelegram } from "../entities/Telegram";
import { Container } from "../shared/ui/Container";
import { Header } from "../features/Header";
import { usePosts } from "../entities/Post/model";
import { useNavigate } from "react-router-dom";

const posts = [
  {
    id: "1",
    url: "https://icons8.com/icons/set/news",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! ",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ",
    date: "2021-10-10",
    tags: [
      {
        text: "Hello",
        type: TagType.personal,
      },
      {
        text: "Hello 2",
        type: TagType.organization,
      },
      {
        text: "Hello 3",
        type: TagType.organization,
      },
    ],
  },
  {
    id: "2",
    url: "https://icons8.com/icons/set/news",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! ",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ",
    date: "2021-10-10",
    tags: [
      {
        text: "Hello",
        type: TagType.personal,
      },
      {
        text: "Hello 2",
        type: TagType.organization,
      },
      {
        text: "Hello 3",
        type: TagType.organization,
      },
    ],
  },
  {
    id: "3",
    url: "https://icons8.com/icons/set/news",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! ",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ",
    date: "2021-10-10",
    tags: [
      {
        text: "Hello",
        type: TagType.personal,
      },
      {
        text: "Hello 2",
        type: TagType.organization,
      },
      {
        text: "Hello 3",
        type: TagType.organization,
      },
    ],
  },
];

const Home = function Home() {
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = usePosts();
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
