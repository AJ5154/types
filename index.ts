type PrefixName = "MR" | "MRS" | "MISS";

type User = {
    id: string;
    prefix: PrefixName;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    userRoles: [
        {
            id: "54773786-8a1e-46d7-9a3c-15ab268ab035";
            role: "USER";
            userId: "62b585e4-f7dd-49db-b9b6-51293dadad1c";
            createdAt: "2023-11-26T20:16:43.474Z";
        }
    ];
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
