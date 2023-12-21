import { TagType } from "./types";

export const colorByTagType: Record<TagType, string> = {
  [TagType.personal]: "text-primary",
  [TagType.organization]: "text-secondary",
};
