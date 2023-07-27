'use client';

import { Field } from "formik";

export enum InputType {
  text = "text",
  email = "email",
  password = "password",
  number = "number",
  date = "date",
  time = "time",
  datetime = "datetime",
  datetimeLocal = "datetime-local",
  month = "month",
  week = "week",
  url = "url",
  search = "search",
  tel = "tel",
  color = "color",
}
type Props = {
  type?: InputType;
  placeholder: string;
  value?: string | number;
};

const Input = (props: Props) => {
  return (
    <Field
      className="border-2 border-orange-300 rounded-md p-1"
      type={props.type ?? InputType.text}
    //   placeholder={props.placeholder ?? ""}
      value={props.value}
      {...props}
    />
  );
};

export default Input;
