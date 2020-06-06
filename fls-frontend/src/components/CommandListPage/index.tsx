import * as React from "react";
import * as api from "common/api";
import * as urls from "common/utils/urls";

import Button from "common/components/Button";

import "shared/style.css";

import type { Command } from "common/types";

type MainProps = {
  commands: Array<Command>;
  setCommands: any;
};

function Header() {
  return (
    <header>
      <pre>Header</pre>
    </header>
  );
}

function Main(props: MainProps) {
  const { commands, setCommands } = props;

  const createNewCommand = React.useCallback(async () => {
    await api.createNewCommand();
    const response = await api.getAllCommands();
    setCommands(response.data);
  }, [setCommands]);

  return (
    <div>
      <ul>
        {commands.map((c) => (
          <li>
            <a href={urls.generatePath(urls.COMMAND_URL, { commandId: c.id })}>{c.title}</a>
          </li>
        ))}
      </ul>
      <Button onClick={createNewCommand}>New command</Button>
    </div>
  );
}

export default function CommandManager() {
  // return <pre>CommandManager</pre>;
  const [commands, setCommands] = React.useState<any>([]);

  React.useEffect(() => {
    api.getAllCommands().then((response) => setCommands(response.data));
  }, []);
  const mainProps = { commands, setCommands };
  return (
    <div className="pageWrapper">
      <Header></Header>
      <Main {...mainProps}></Main>
    </div>
  );
}
