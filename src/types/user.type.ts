export default interface IUser {
  id?: any | null;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  roles?: Array<string>;
}
