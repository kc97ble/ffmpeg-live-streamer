import * as uuid from "uuid";

export type ApiResult<T> = { message?: string; data?: T };

export type Id = string;
export type Option = { key: string; value: string };
export type Source = { url: string };
export type Clip = { options: Array<Option>; source?: Source };

export type Command = {
  id: Id;
  title: string;
  globalOptions: Array<Option>;
  clips: Array<Clip>;
};

export function fakeNewId(): Id {
  return uuid.v4();
}

export function fakeNewCommand(): Command {
  return {
    id: fakeNewId(),
    title: "Untitled Command",
    globalOptions: [],
    clips: [],
  };
}
