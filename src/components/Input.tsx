import React from "react";
import { ChangeEventHandler } from "react";
import clsx from "clsx";

interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  className?: string;
  onChangeFunction: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

const defaultInputClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-3";

export default function Input({
  type,
  name,
  value,
  placeholder = "",
  required = false,
  className = "",
  onChangeFunction,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChangeFunction}
      required={required}
      placeholder={placeholder}
      className={clsx(defaultInputClassName, className)}
    />
  );
}
