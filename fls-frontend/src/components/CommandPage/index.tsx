import * as React from "react";

import { useParams } from "react-router-dom";

export default function CommandEditorPage(props: any) {
  const params = useParams;
  return <pre>{JSON.stringify(Object.keys(params))}</pre>;
}
