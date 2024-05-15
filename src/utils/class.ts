class Item {
  availFrom: string;
  description: string;
  name: string;
  imageSrc: string;
  constructor(
    availFrom: string,
    description: string,
    name: string,
    imageSrc: string
  ) {
    this.availFrom = availFrom;
    this.description = description;
    this.name = name;
    this.imageSrc = imageSrc;
  }
}

export { Item };
