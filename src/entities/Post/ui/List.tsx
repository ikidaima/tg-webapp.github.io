import React, { FC } from "react";
import { PostType } from "../types";
import { Post } from "./Post";

interface Props {
  posts: PostType[];
}

export const PostList: FC<Props> = function PostList({ posts }) {
  return (
    <div className="flex flex-col gap-4">
      {posts.length === 0 && <p>Нет постов</p>}
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
};
