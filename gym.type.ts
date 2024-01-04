export type GymData = {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean | null;
};

const Data: GymData[] = [
  {
    id: "8a8e1f18-6696-4bb1-8934-376c81aad7a8",
    name: "Golds Gym",
    userId: "62b585e4-f7dd-49db-b9b6-51293dadad1c",
    createdAt: "2023-11-26T20:17:11.332Z",
    updatedAt: "2023-11-26T20:17:11.332Z",
    deleted: false,
  },
  {
    id: "383477e9-b250-446c-b071-d9a756725449",
    name: "Gold's Gym",
    userId: "62b585e4-f7dd-49db-b9b6-51293dadad1c",
    createdAt: "2023-11-30T09:31:15.291Z",
    updatedAt: "2023-11-30T09:31:15.291Z",
    deleted: null,
  },
  {
    id: "98a391a5-64eb-471c-8bdf-bf43b53ac47c",
    name: "3rd gym",
    userId: "62b585e4-f7dd-49db-b9b6-51293dadad1c",
    createdAt: "2023-12-03T16:31:48.637Z",
    updatedAt: "2023-12-03T16:31:48.637Z",
    deleted: true,
  },
  {
    id: "a78d97af-375b-49cf-98ac-86d3c39022ca",
    name: "4th gym",
    userId: "62b585e4-f7dd-49db-b9b6-51293dadad1c",
    createdAt: "2023-12-03T16:41:51.764Z",
    updatedAt: "2023-12-03T16:41:51.764Z",
    deleted: null,
  },
  {
    id: "40190351-46de-402d-bc84-87ebb3e99ba4",
    name: "test",
    userId: "62b585e4-f7dd-49db-b9b6-51293dadad1c",
    createdAt: "2023-12-22T06:35:52.559Z",
    updatedAt: "2023-12-22T06:35:52.559Z",
    deleted: false,
  },
  {
    id: "19688d53-ba29-4616-9b7b-a26202d2651b",
    name: "test-1",
    userId: "62b585e4-f7dd-49db-b9b6-51293dadad1c",
    createdAt: "2023-12-22T19:57:47.151Z",
    updatedAt: "2023-12-22T19:57:47.151Z",
    deleted: true,
  },
  {
    id: "34192526-23ab-42e8-bd59-4ed87394d745",
    name: "test-3",
    userId: "62b585e4-f7dd-49db-b9b6-51293dadad1c",
    createdAt: "2023-12-23T07:11:40.199Z",
    updatedAt: "2023-12-23T07:11:40.199Z",
    deleted: null,
  },
];

export type Gym = {
  status: string;
  message: string;
  data: GymData[];
};
