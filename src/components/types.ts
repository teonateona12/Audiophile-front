export interface Data {
  email: string;
  password: string;
}

export interface LogIn {
  setisLoggedIn: (n: boolean) => void;
}
export interface ProductProps {
  data: ProductType[];
  // setisLoggedIn: (n: boolean) => void;
}
export interface ProductType {
  id: number;
  _id: string;
  slug: string;
  name: string;
  image: Imag;
  categoryImage?: Imag;
  new: boolean;
  price: number;
  description: string;
  category: string;
  features: string;
  includes: Obj[];
  gallery: Object;
  others: ArrayObj[];
}
type ArrayObj = {
  slug: string;
  name: string;
  image: Imag;
  _id: string;
};
type Object = {
  first: Imag;
  second: Imag;
  third: Imag;
};
type Obj = {
  quantity: number;
  item: string;
  _id: string;
};
interface Imag {
  mobile: string;
}

export type PropsType = {
  data: ProductType[];
};
export interface AlsoProps {
  slug: string;
  image: Imag;
  name: string;
}

export interface IncludesProps {
  quantity: number;
  item: string;
}

export interface DetailProps {
  data: ProductType[];
  number: number;
  setNumber: (n: number) => void;
}
