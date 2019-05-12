export interface ItemProps {
  tag: string;
  title: string;
  customer: string;
  projectState: string;
  description: string;
  techniques: string[];
  image?: boolean;
  callToAction: {
    type: string;
    link?: string;
  };
}

export interface ItemObjectProps {
  serious: ItemProps[];
  fun: ItemProps[];
  tools: ItemProps[];
}
