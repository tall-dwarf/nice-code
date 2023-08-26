import React, { useId } from "react";

type RadioItemProps = {
    label: string
    onRadioClick: () => void
}

export default function RadioItem({label, onRadioClick}: RadioItemProps) {
  const id = useId();

  return (
    <li className="radio-item">
      <input onClick={onRadioClick} className="radio-item__input" id={id} type="radio" name="radio" value="1" />
      <label className="radio-item__label" htmlFor={id}>{label}</label>
    </li>
  );
}
