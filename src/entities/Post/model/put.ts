import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../shared/api";

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

export const usePutPosts = function usePutPosts({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: putPosts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      onSuccess();
    },
  });

  return {
    ...result,
  };
};
