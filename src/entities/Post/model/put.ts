import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../shared/api";
import { useSetAtom } from "jotai";
import { userAtom } from "../../User/model";

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

interface Params {
  id: string;
  tagsPerson: string[];
  tagsOrganization: string[];
}

const putPosts = ({ id, tagsOrganization, tagsPerson }: Params) =>
  api
    .put<Response>(`/api/users/update/${id}/`, {
      tagsPerson,
      tagsOrganization,
    })
    .then((response) => response.data.data);

export const usePutPosts = function usePutPosts() {
  const setAtom = useSetAtom(userAtom);
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: putPosts,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setAtom({
        isVerified: true,
        tagsOrganization: variables.tagsOrganization,
        tagsPerson: variables.tagsPerson,
      });
    },
  });

  return {
    ...result,
  };
};
