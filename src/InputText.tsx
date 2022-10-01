import React from "react";
import "./Input.css";

interface InputTextProps {
  label: string;
  type: string;
  withoutIcon: boolean;
  disabled: boolean;
}

export function InputText({
  label,
  type,
  withoutIcon = false,
  disabled = false,
}: InputTextProps) {
  return (
    <>
      {!withoutIcon ? (
        <input
          type={type}
          placeholder={label}
          className="input-text  width90"
        />
      ) : (
        <input
          type={type}
          placeholder={label}
          disabled={disabled}
          className="input-text width100"
        />
      )}
    </>
  );
}
