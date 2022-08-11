import { Button } from "./Button";

interface ButtonGroupProps {
  options: string[];
  value: string;
  onChange?: (option: string) => void;
}

export const ButtonGroup = (props: ButtonGroupProps) => {
  const handleSelect = (value: string) => {
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <div>
      {props.options.map((option) => (
        <Button
          key={option}
          label={option}
          onClick={() => handleSelect(option)}
          data-selected={option === props.value}
        />
      ))}
    </div>
  );
};
