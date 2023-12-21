import { TagType } from "./types";

export const colorByTagType: Record<TagType, string> = {
  [TagType.personal]: "primary",
  [TagType.organization]: "secondary",
};
