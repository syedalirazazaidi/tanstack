import React from "react";
import { Switch } from "../ui/switch";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
export type ToggleOption = { id: string; label: string; gender: string };

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: ToggleOption[];
  label: string;
};
export default function Switches<T extends FieldValues>({
  name,
  options,
  label,
}: Props<T>) {
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name="isTeacher"
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        console.log(error);
        return (
          <div>
            <Switch checked={value} onCheckedChange={onChange} />
          </div>
        );
      }}
    />
  );
}
