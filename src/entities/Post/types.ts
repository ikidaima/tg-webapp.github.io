enum TagType {
  personal = "personal",
  organization = "organization",
}

interface Tag {
  text: string;
  type: TagType;
}

interface PostType {
  id: string;
  title: string;
  content: string;
  tags: Tag[];
  date: string;
}

export { TagType, type Tag, type PostType };
