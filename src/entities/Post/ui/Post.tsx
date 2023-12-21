import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { FULL_DATE_FORMAT } from "../../../shared/constants/date";
import { declOfNum } from "../../../shared/libs/declOfNum";
import { colorByTagType } from "../constants";
import { PostType } from "../types";
import { dayjs } from "../../../shared/libs/date";

const textStyle: Record<string, string> = {
  display: "-webkit-box",
  "-webkit-line-clamp": "4",
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
  textAlign: "justify",
};

const maxTags = 2;

export const Post: FC<PostType> = function Post({
  id,
  url,
  content,
  date,
  tags,
  title,
}) {
  const otherTagsLength = tags.length - maxTags;
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between gap-4">
        <div className="flex flex-col gap-0.25 items-start justify-center overflow-hidden text-ellipsis">
          <h4 className="text-large font-semibold leading-none text-default-800 overflow-hidden whitespace-nowrap text-ellipsis w-full">
            {title}
          </h4>
          <h5 className="text-small tracking-tight text-default-400">
            {dayjs(date).format(FULL_DATE_FORMAT)}
          </h5>
        </div>
        <Button href={url} color="primary" radius="full" size="sm" variant={"solid"}>
          Перейти
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text--400 gap">
        <p style={textStyle}>{content}</p>
      </CardBody>
      <CardFooter className="gap-1">
        <div className="flex gap-2">
          {tags.slice(0, maxTags).map((item) => {
            return (
              <span className={`${colorByTagType[item.type]} text-small`}>
                #{item.text}
              </span>
            );
          })}
        </div>
        {otherTagsLength > 0 && (
          <span className="text-default-400 text-small">
            +{otherTagsLength}{" "}
            {declOfNum(otherTagsLength, "тег", "тега", "тегов")}
          </span>
        )}
      </CardFooter>
    </Card>
  );
};
