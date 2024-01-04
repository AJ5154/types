type User = {
    id: "62b585e4-f7dd-49db-b9b6-51293dadad1c";
    prefix: "MR";
    firstName: "string";
    lastName: "string";
    phone: "1234567890";
    email: "user@yopmail.com";
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
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjU4NWU0LWY3ZGQtNDlkYi1iOWI2LTUxMjkzZGFkYWQxYyIsInByZWZpeCI6Ik1SIiwiZmlyc3ROYW1lIjoic3RyaW5nIiwibGFzdE5hbWUiOiJzdHJpbmciLCJwaG9uZSI6IjEyMzQ1Njc4OTAiLCJlbWFpbCI6InVzZXJAeW9wbWFpbC5jb20iLCJ1c2VyUm9sZXMiOlt7ImlkIjoiNTQ3NzM3ODYtOGExZS00NmQ3LTlhM2MtMTVhYjI2OGFiMDM1Iiwicm9sZSI6IlVTRVIiLCJ1c2VySWQiOiI2MmI1ODVlNC1mN2RkLTQ5ZGItYjliNi01MTI5M2RhZGFkMWMiLCJjcmVhdGVkQXQiOiIyMDIzLTExLTI2VDIwOjE2OjQzLjQ3NFoifV0sImlhdCI6MTcwNDM1MzE4MCwiZXhwIjoxNzA0OTU3OTgwfQ.l9AjdLRbyYFokFtgcrUrThswJ1Kte8IMYMz6pYWzKdI";
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
