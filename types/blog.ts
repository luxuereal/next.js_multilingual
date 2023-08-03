type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string | undefined;
  author: Author;
  tags: string[];
  publishDate: string;
};
