import React from "react";
import RadioItem from "./RadioItem";
import "./style.sass";

type RadioItem = {
  id: number;
  label: string;
};

type RadioProps = {
  radioItems: RadioItem[];
  onRadioClick: (itemId: number) => void;
};

export default function Radio({ radioItems, onRadioClick }: RadioProps) {
  return (
    <ul className="radio">
      {radioItems.map((rItem) => (
        <RadioItem
          onRadioClick={() => onRadioClick(rItem.id)}
          key={rItem.id}
          label={rItem.label}
        />
      ))}
    </ul>
  );
}
