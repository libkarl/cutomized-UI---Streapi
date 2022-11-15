export default interface IUser {
  id?: any | null;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  roles?: Array<string>;
}
