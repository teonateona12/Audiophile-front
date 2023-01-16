export interface Data {
  email: string;
  password: string;
}

export interface LogIn {
  setisLoggedIn: (n: boolean) => void;
}
