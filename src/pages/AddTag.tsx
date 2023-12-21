import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useTelegram } from "../entities/Telegram";
import { useNavigate } from "react-router-dom";
import { Container } from "../shared/ui/Container";
import { Header } from "../features/Header";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Tag, TagType, colorByTagType } from "../entities/Post";
import { usePutPosts } from "../entities/Post/model/put";
import { useUser } from "../entities/User";

const persons = [
  "Петр Бирюков",
  "Максим Ликсутов",
  "Марат Хуснуллин",
  "Эльвира Набиуллина",
  "Герман Греф",
  "Анастасия Ракова",
  "Андрей Костин",
  "Наталья Сергунина",
  "Сергей Белов",
  "Александр Соколов",
  "Андрей Бочкарев",
  "Дмитрий Гусев",
  "Михаил Автухов",
  "Олег Эргашев",
  "Владимир Ефимов",
  "Евгений Разумишкин",
  "Борис Пиотровский",
  "Ольга Скоробогатова",
  "Алексей Немерюк",
  "Александр Горбенко",
  "Эдуард Лысенко",
  "Андрей Соколов",
];

const organizations = [
  "Сбербанк",
  "ВТБ",
  "Открытие",
  "Альфа-банк",
  "Тинькофф",
  "Газпромбанк",
  "Россельхозбанк",
  "Синара",
  "МТС банк",
];

const tags: Tag[] = [
  ...persons.map((person) => ({ text: person, type: TagType.personal })),
  ...organizations.map((org) => ({ text: org, type: TagType.organization })),
].sort((a, b) => a.text.localeCompare(b.text));

const AddTag = function AddTag() {
  const { mutate } = usePutPosts();
  const user = useUser();
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);
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
      if (selectedTag && selectedTag.type === TagType.personal) {
        mutate({
          // @ts-ignore
          id: Telegram.initDataUnsafe.user?.id,
          // @ts-ignore
          tagsPerson: [...(user.tagsPerson || []), selectedTag.text],
          // @ts-ignore
          tagsOrganization: [...(user.tagsOrganization || [])],
        });
        navigate("/profile");
      }

      if (selectedTag && selectedTag.type === TagType.organization) {
        mutate({
          // @ts-ignore
          id: Telegram.initDataUnsafe.user?.id,
          // @ts-ignore
          tagsPerson: [...(user.tagsPerson || [])],
          // @ts-ignore
          tagsOrganization: [
            // @ts-ignore
            ...(user.tagsOrganization || []),
            selectedTag.text,
          ],
        });
        navigate("/profile");
      }
    });
    // @ts-ignore
  }, [
    Telegram.BackButton,
    Telegram.MainButton,
    Telegram.initDataUnsafe.user?.id,
    mutate,
    navigate,
    selectedTag,
    // @ts-ignore
    user.tagsOrganization,
    // @ts-ignore
    user.tagsPerson,
  ]);

  const filteredTags = useMemo(() => {
    return tags.filter(
      (item) =>
        !(
    // @ts-ignore
          user.tagsOrganization.includes(item.text) || user.tagsPerson.includes(item.text)
        )
    );
    // @ts-ignore
  }, [user.tagsOrganization, user.tagsPerson]);

  useEffect(() => {
    Telegram.BackButton.show();
    Telegram.BackButton.onClick(() => {
      navigate("/profile");
    });
  }, [Telegram.BackButton, navigate]);

  const handleChange = (tag: string) => {
    const newTag = tags.find((item) => item.text === tag);
    if (newTag) {
      setSelectedTag(newTag);
    }
  };

  return (
    <Fragment>
      <Header title="Добавить тег" />
      <Container>
        <div className="flex gap-2 flex-wrap justify-center">
          <Autocomplete
            inputValue={selectedTag?.text}
            label="Выберите тег"
            className="max-w-xs"
            color="primary"
            labelPlacement="outside"
            onInputChange={handleChange}
          >
            {filteredTags.map((tag) => (
              <AutocompleteItem
                color={colorByTagType[tag.type] as any}
                key={tag.text}
                value={tag.text}
              >
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
