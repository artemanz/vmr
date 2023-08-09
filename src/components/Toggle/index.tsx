import React, { Dispatch, LabelHTMLAttributes, SetStateAction } from "react";
import c from "./style.module.scss";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

const ToggleSwitch = ({ value, setValue, className }: Props) => {
  return (
    <label className={`${c["toggle-switch"]} ${className}`}>
      <input
        checked={value}
        type="checkbox"
        onChange={(e) => setValue(e.target.checked)}
      />
      <div className={c["toggle-switch-background"]}>
        <div className={c["toggle-switch-handle"]}></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
