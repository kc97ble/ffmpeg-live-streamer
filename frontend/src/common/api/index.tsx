import type { ApiResult, Command, Id } from "shared/src/types";
import * as types from "shared/src/types";

const FAKE_COMMAND_LIST = "FAKE_COMMAND_LIST";
const DEFAULT_ERROR = "Unknown error";

function getFakeCommandList(): Array<Command> {
  const json = localStorage.getItem(FAKE_COMMAND_LIST);
  return json == null ? [] : JSON.parse(json);
}

function setFakeCommandList(commandList: Array<Command>) {
  const json = JSON.stringify(commandList);
  localStorage.setItem(FAKE_COMMAND_LIST, json);
}

function successResult<T>(data: T): ApiResult<T> {
  return { message: "OK", data: data };
}

function failedResult<T>(error: string = DEFAULT_ERROR): ApiResult<T> {
  return { error: error };
}

export async function getCommandList(): Promise<ApiResult<Array<Command>>> {
  return successResult(getFakeCommandList());
}

export async function createNewCommand(): Promise<ApiResult<Command>> {
  const newCommand = types.fakeNewCommand();
  setFakeCommandList(getFakeCommandList().concat([newCommand]));
  return successResult(newCommand);
}

export async function filterCommandList(pred: (command: Command) => boolean) {
  const commandList = getFakeCommandList();
  return commandList.filter(pred);
}

export async function getCommand(commandId: Id): Promise<ApiResult<Command>> {
  const filtered = await filterCommandList((c) => c.id === commandId);
  return filtered.length === 0 ? failedResult() : successResult(filtered[0]);
}

export async function saveCommand(commandId: Id, newCommand: Command): Promise<ApiResult<null>> {
  const commandList = getFakeCommandList();
  const index = commandList.findIndex((c) => c.id === commandId);
  const newCommandList =
    index === -1
      ? commandList.concat([newCommand])
      : [...commandList.slice(0, index), newCommand, ...commandList.slice(index + 1)];
  setFakeCommandList(newCommandList);
  return successResult(null);
}
