

export interface EntityModel {
    id: number;
    name: string;
    email: string;
    invited: string;
    role: string;
    status: string;
    items: Item[];
  }
  
  export interface Item {
    title: string,
    create: boolean,
    edit: boolean,
    view: boolean,
    delete: boolean
  }