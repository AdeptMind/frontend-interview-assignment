interface RoundedButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const RoundedButton = (props: RoundedButtonProps) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};
