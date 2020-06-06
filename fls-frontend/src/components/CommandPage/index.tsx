import * as React from "react";
import * as types from "common/types";
import { useParams } from "react-router-dom";

import * as api from "common/api";
import CommandEditor from "common/editors/CommandEditor";
import { Command } from "common/types";
import "common/style.css";

export default function CommandEditorPage(props: any) {
  const { commandId } = useParams();
  // return <pre>{JSON.stringify(Object.keys(params))}</pre>;
  const [command, setCommand] = React.useState<types.Command | null>(null);

  React.useEffect(() => {
    api.getCommand(commandId).then((response) => {
      setCommand(response.data || null);
    });
  }, []);

  const changed = (newCommand: Command | null) => {
    if (newCommand == null) return;
    setCommand(newCommand);
    api.saveCommand(commandId, newCommand);
  };

  return (
    <div className="pageWrapper">
      <CommandEditor command={command} onChange={changed}></CommandEditor>
    </div>
  );
}
