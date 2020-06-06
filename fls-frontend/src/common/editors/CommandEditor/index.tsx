import React from "react";
import { Command } from "common/types";
import Button from "common/controls/Button";
import * as urls from "common/utils/urls";

type Props = {
  command: Command | null;
  onChange: (command: Command) => void;
  autoSave?: boolean;
};

export default function CommandEditor(props: Props) {
  const { command, onChange, autoSave = false } = props;
  const [current, setCurrent] = React.useState<Command | null>(null);
  const [dirty, setDirty] = React.useState<boolean>(false);

  React.useEffect(() => {
    setCurrent(command);
    setDirty(false);
  }, [command]);

  if (current == null) {
    return <pre>Null command</pre>;
  }

  const save = () => {
    onChange(current);
    setDirty(false);
  };

  const fieldChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (current == null) return;
    const { name, value } = e.target;
    setCurrent({ ...current, [name]: value });
    autoSave ? save() : setDirty(true);
  };

  return (
    <div>
      <a href={urls.COMMAND_LIST_URL}>Back</a>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={current.title} onChange={fieldChanged} />
      </fieldset>
      <Button onClick={save} disabled={!dirty}>
        Save
      </Button>
    </div>
  );
}
