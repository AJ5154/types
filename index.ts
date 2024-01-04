type PrefixName = "MR" | "MRS" | "MISS";

type Role = "USER" | "SUPERADMIN" | "ADMIN";

type UserRole = {
  id: string;
  role: Role;
  userId: string;
  createdAt: string;
};

type User = {
  id: string;
  prefix: PrefixName;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  userRoles: UserRole[];
};

type Token = {
  accessToken: string;
};

type Entity = {
  user: User;
  token: Token;
};

type Data = {
  entity: Entity;
};

export type APIResponse = {
  status: string;
  message: string;
  data: Data;
};
