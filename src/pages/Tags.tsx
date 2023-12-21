import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useTelegram } from "../entities/Telegram";
import { useNavigate } from "react-router-dom";
import { Container } from "../shared/ui/Container";
import { Tag, TagType, colorByTagType } from "../entities/Post";
import { Button } from "@nextui-org/react";
import { CloseIcon } from "../shared/icons/Close";
import { Header } from "../features/Header";
import { useUser } from "../entities/User";
import { usePutPosts } from "../entities/Post/model/put";

const Tags = function Tags() {
  const { mutate } = usePutPosts();
  const user = useUser();
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
    const tags: Tag[] = [];

    // @ts-ignore
    user?.tagsPerson?.forEach((item) => {
      tags.push({
        text: item,
        type: TagType.personal,
      });
    });

    // @ts-ignore
    user?.tagsOrganization?.forEach((item) => {
      tags.push({
        text: item,
        type: TagType.organization,
      });
    });

    return [...tags].sort((a, b) => a.text.localeCompare(b.text));
    // @ts-ignore
  }, [user?.tagsOrganization, user?.tagsPerson]);

  const handleClick = (tag: Tag) => () => {
    if (selectedTag !== tag.text) {
      setSelectedTag(tag.text);
    } else {
      mutate({
        // @ts-ignore
        id: Telegram.initDataUnsafe.user?.id,
        // @ts-ignore
        tagsPerson: (user.tagsPerson || []).filter((item) => item !== tag.text),
        // @ts-ignore
        tagsOrganization: (user.tagsOrganization || []).filter(
          // @ts-ignore
          (item) => item !== tag.text
        ),
      });
    }
  };

  return (
    <Fragment>
      <Header title="Теги" />
      <Container>
        <div className="flex gap-2 flex-wrap justify-center">
          {sortedTags.length === 0 && "Нет тегов"}
          {sortedTags.map((tag) => (
            <Button
              key={tag.text}
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
