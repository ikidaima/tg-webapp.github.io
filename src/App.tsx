import React, { useEffect } from "react";
import { Auth } from "./processes/Auth";
import { useTelegram } from "./entities/Telegram";
import { Header } from "./features/Header";
import { Container } from "./shared/ui/Container";
import { PostList } from "./entities/Post";
import { TagType } from "./entities/Post";

function App() {
  const { Telegram } = useTelegram();

  useEffect(() => {
    Telegram.MainButton.hide();
    document.body.classList.add(Telegram.colorScheme);
  }, [Telegram.MainButton, Telegram.colorScheme]);

  return (
    <Auth>
      <div className="relative">
        <Header />
        <Container>
          <PostList
            posts={[
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
            ]}
          ></PostList>
        </Container>
      </div>
    </Auth>
  );
}

export default App;
