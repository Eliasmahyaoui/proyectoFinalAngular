


export interface Plato {
  id: number,
  name: string,
  description: string,
  price: number,
  category:string,
  enabled:boolean,
  image?:string;

}

export interface Usuario {
  id: number;
  username: string;
  password: string;
  email: string;
  role: 'user' | 'chef';

}



