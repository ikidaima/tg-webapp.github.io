import { TagType, PostList } from "../entities/Post";
import { Container } from "../shared/ui/Container";

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
  return (
    <Container>
      <PostList posts={posts} isLoading={false} />
    </Container>
  );
};

export default Home;
