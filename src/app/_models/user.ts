import { Role } from './role';

export interface User {
  ElectorId: string;
  firstName: string;
  lastName: string;
  username: string;
  roles: Role;
  token?: string;
}
