import { useQuery } from "@tanstack/react-query";
import { apiPublic } from "../../../shared/api";
import { useMemo } from "react";
import { PostType, Tag, TagType } from "../types";

interface ResponsePost {
  url?: string;
  content?: string;
  postId: string;
  title?: string;
  publishDate?: string;
  tagsPerson?: string[];
  tagsOrgainzation?: string[];
}

interface Response {
  data: ResponsePost[];
}

const getPosts = () =>
  apiPublic
    .post<Response>("/api/news/find/", {})
    .then((response) => response.data.data);

export const usePosts = function usePosts() {
  const result = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const data = useMemo(() => {
    const posts: PostType[] = [];

    result.data?.forEach((item) => {
      const tags: Tag[] = [];

      item?.tagsPerson?.forEach((tag) => {
        tags.push({
          text: tag,
          type: TagType.personal,
        });
      });

      item?.tagsOrgainzation?.forEach((tag) => {
        tags.push({
          text: tag,
          type: TagType.organization,
        });
      });

      posts.push({
        id: item.postId,
        content: item.content || "Нет контента",
        date: item.publishDate || "Нет даты",
        title: item.title || "Нет заголовка",
        url: item.url || "",
        tags,
      });
    });

    return posts;
  }, [result.data]);

  return {
    ...result,
    data,
  };
};
