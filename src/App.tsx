import React, { useEffect } from "react";
import { useTelegram } from "./entities/Telegram";
import { Header } from "./features/Header";
import { Container } from "./shared/ui/Container";
import { Post } from "./features/Post";
import { TagType } from "./entities/Post";

function App() {
  const { Telegram } = useTelegram();

  useEffect(() => {
    Telegram.MainButton.text = "Применить";
    Telegram.MainButton.show();
    document.body.classList.add(Telegram.colorScheme);
  }, [Telegram.MainButton, Telegram.colorScheme]);

  return (
    <div className="relative">
      <Header />
      <Container>
        <Post
          id="1"
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! "
          }
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Lorem "
          date="2021-10-10"
          tags={[
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
          ]}
        />
      </Container>
    </div>
  );
}

export default App;
