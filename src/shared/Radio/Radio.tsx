import React, { useId } from "react";
import RadioItem from "./RadioItem";
import "./style.sass";

type RadioItem = {
  id: number;
  label: string;
};

type RadioProps = {
  radioItems: RadioItem[];
  activeItemId: number,
  onRadioClick: (itemId: number) => void;
};

export default function Radio({ radioItems, onRadioClick, activeItemId }: RadioProps) {
  const radioName = useId();

  return (
    <ul className="radio">
      {radioItems.map((rItem) => (
        <RadioItem
          name={radioName}
          isActive={rItem.id === activeItemId}
          onRadioClick={() => onRadioClick(rItem.id)}
          key={rItem.id}
          label={rItem.label}
        />
      ))}
    </ul>
  );
}
