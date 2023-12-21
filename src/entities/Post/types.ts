enum TagType {
  personal = "personal",
  organization = "organization",
}

interface Tag {
  text: string;
  type: TagType;
}

export { TagType, type Tag };
