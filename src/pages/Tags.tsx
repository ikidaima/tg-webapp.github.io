import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useTelegram } from "../entities/Telegram";
import { useNavigate } from "react-router-dom";
import { Container } from "../shared/ui/Container";
import { Tag, TagType, colorByTagType } from "../entities/Post";
import { Button } from "@nextui-org/react";
import { CloseIcon } from "../shared/icons/Close";
import { Header } from "../features/Header";

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

const Tags = function Tags() {
  const [selectedTag, setSelectedTag] = useState("");
  const { Telegram } = useTelegram();
  const navigate = useNavigate();

  useEffect(() => {
    Telegram.BackButton.show();
    Telegram.BackButton.onClick(() => {
      navigate("/");
    });
  }, [Telegram.BackButton, navigate]);

  useEffect(() => {
    Telegram.MainButton.text = "Добавить тег";
    Telegram.MainButton.onClick(() => {
      navigate("/profile/add");
    });
    Telegram.MainButton.show();
  }, [Telegram.MainButton, navigate]);

  const sortedTags = useMemo(() => {
    return [...tags].sort((a, b) => a.text.localeCompare(b.text));
  }, []);

  const handleClick = (tag: Tag) => () => {
    if (selectedTag !== tag.text) {
      setSelectedTag(tag.text);
    } else {
      console.log("delete");
    }
  };
  return (
    <Fragment>
      <Header title="Теги" />
      <Container>
        <div className="flex gap-2 flex-wrap justify-center">
          {sortedTags.map((tag) => (
            <Button
              size="md"
              color={colorByTagType[tag.type] as any}
              onClick={handleClick(tag)}
              endContent={selectedTag === tag.text ? <CloseIcon /> : ""}
            >
              <span
                key={tag.text}
                style={{ maxWidth: "120px" }}
                className="overflow-hidden text-ellipsis block"
              >
                {tag.text}
              </span>
            </Button>
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

export default Tags;
