import React, { FC } from "react";
import { PostType } from "../types";
import { Post } from "./Post";
import { CircularProgress } from "@nextui-org/react";

interface Props {
  posts: PostType[];
  isLoading: boolean;
}

export const PostList: FC<Props> = function PostList({ posts, isLoading }) {
  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center"
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div
      style={{  overflow: "auto", height: "100%" }}
      className="flex flex-col gap-4 overflow-auto"
    >
      {posts.length === 0 && <p>Нет постов</p>}
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
};
