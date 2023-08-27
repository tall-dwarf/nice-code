import React, { useId } from "react";

type RadioItemProps = {
  label: string
  isActive: boolean
  onRadioClick: () => void
  name: string
}

export default function RadioItem({label, onRadioClick, isActive, name}: RadioItemProps) {
  const id = useId();

  return (
    <li className="radio-item">
      <input checked={isActive} onClick={onRadioClick} className="radio-item__input" id={id} type="radio" name={name} />
      <label className="radio-item__label" htmlFor={id}>{label}</label>
    </li>
  );
}
