import React, {  Fragment, useEffect, useState } from "react";
import { useTelegram } from "../entities/Telegram";
import { useNavigate } from "react-router-dom";
import { Container } from "../shared/ui/Container";
import { Header } from "../features/Header";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Tag, TagType } from "../entities/Post";

const tags: Tag[] = [
  {
    text: "Hello 2",
    type: TagType.organization,
  },
  {
    text: "Hello 2asdf",
    type: TagType.organization,
  },
  {
    text: "Hello Hello Hello Hello Hello Hello Hello",
    type: TagType.personal,
  },
  {
    text: "Hello 23",
    type: TagType.organization,
  },
  {
    text: "Hello 211",
    type: TagType.organization,
  },
];

const AddTag = function AddTag() {
  const [selectedTag, setSelectedTag] = useState("");
  const { Telegram } = useTelegram();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedTag) {
      Telegram.MainButton.hide();
      return;
    }
    Telegram.MainButton.show();
    Telegram.MainButton.text = "Добавить тег";
    Telegram.MainButton.onClick(() => {
      navigate("/profile");
    });
  }, [Telegram.BackButton, Telegram.MainButton, navigate, selectedTag]);

  useEffect(() => {
    Telegram.BackButton.show();
    Telegram.BackButton.onClick(() => {
      navigate("/profile");
    });
  }, [Telegram.BackButton, navigate]);

  return (
    <Fragment>
      <Header title="Добавить тег" />
      <Container>
        <div className="flex gap-2 flex-wrap justify-center">
          <Autocomplete
            inputValue={selectedTag}
            label="Выберите тег"
            className="max-w-xs"
            color="primary"
            labelPlacement="outside"
            onInputChange={setSelectedTag}
          >
            {tags.map((tag) => (
              <AutocompleteItem color="primary" key={tag.text} value={tag.text}>
                {tag.text}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        </div>
      </Container>
    </Fragment>
  );
};

export default AddTag;
