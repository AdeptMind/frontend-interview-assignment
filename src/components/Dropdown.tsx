interface DropdownProps {
  options: string[];
  value: string;
  onChange?: (value: string) => void;
}

export const Dropdown = (props: DropdownProps) => {
  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.target.value;
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <select onChange={handleSelect}>
      {props.options.map((option) => (
        <option key={option} value={option} selected={option === props.value}>
          {option}
        </option>
      ))}
    </select>
  );
};
