export interface ILinks {
  first: string;
  last: string;
}

export interface IDataLinks {
  self: string;
}

export interface IDisplayProperties {
  image: string;
  type: string;
}

export interface IDataAttributes {
  content: string;
  created_at: string;
  display_properties: any;
  properties: string;
  updated_at: string;
  urn: string;
}

export interface IData {
  id: string;
  type: string;
  links: IDataLinks;
  attributes: IDataAttributes;
  relationships: IDisplayProperties;
}

export interface IBooks {
  data: IData[];
  links: ILinks;
}

export interface IFinalBooks {
  id: string;
  image: string;
  name: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
