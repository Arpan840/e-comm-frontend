import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputController } from "@/Interfaces/interface";

const InputController = (props: InputController) => {
  const {
    label,
    type,
    className,
    id,
    required,
    maxlength,
    minlength,
    placeholder,
    value,
    control,
    name,
  } = props;

  return (
    <>
      <div className="d-flex gap-2 p-0 mb-0 ">
        <label className="h6 m-0">{props.label}</label>
        {props.required && <p className="text-danger p-0 m-0">*</p>}
      </div>

      <Controller
        name={name}
        control={control}
        defaultValue={value}
        render={({ field }) => (
          <input
            type={type}
            className={className}
            id={id}
            maxLength={maxlength}
            minLength={minlength}
            required={required}
            placeholder={placeholder}
            {...field}
          />
        )}
      />
    </>
  );
};

export default InputController;
