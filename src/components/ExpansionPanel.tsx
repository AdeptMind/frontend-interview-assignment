import { useState } from "react";

interface ExpansionPanelProps {
  title: string;
  content?: React.ReactNode;
}

export const ExpansionPanel = (props: ExpansionPanelProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)}>
      <h2>{props.title}</h2>
      {open && <div>{props.content}</div>}
    </div>
  );
};
