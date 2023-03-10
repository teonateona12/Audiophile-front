export interface Data {
  email: string;
  password: string;
}
export interface CartType {
  image: string;
  name: string;
  number: number;
  price: string;
  userId: string;
  _id: string;
}
export interface CheckoutProps {
  user: User | undefined;
  cart: CartType[];
}
export interface User {
  exp: number;
  iat: number;
  id: string;
  image: string;
  name: string;
}
export interface HomeProps {
  setUser: (n: User | undefined) => void;
}
export interface NavbarProps {
  setisLoggedIn: (n: boolean) => void;
  user: User | undefined;
  cart: CartType[];
  setCart: (n: CartType[]) => void;
}
export interface CartProps {
  user: User | undefined;
  setNav: (n: boolean) => void;
  cart: CartType[];
  setCart: (n: CartType[]) => void;
}
export interface LogIn {
  setisLoggedIn: (n: boolean) => void;
}
export interface ProductProps {
  data: ProductType[];
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
  user: User | undefined;
}
