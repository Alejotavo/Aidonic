

export interface EntityModel {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    items: item[];
  }
  
  export interface item {
    title: string,
    create: boolean,
    edit: boolean,
    view: boolean,
    delete: boolean
  }