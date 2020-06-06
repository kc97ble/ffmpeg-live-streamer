import type { ApiResult, Command } from "common/types";
import * as types from "common/types";

let fakeCommands: Array<Command> = [];

export async function getAllCommands(): Promise<ApiResult<Array<Command>>> {
  return { message: "OK", data: fakeCommands };
}

export async function createNewCommand(): Promise<ApiResult<Command>> {
  const newCommand = types.fakeNewCommand();
  fakeCommands = fakeCommands.concat([newCommand]);
  return { message: "OK", data: newCommand };
}
