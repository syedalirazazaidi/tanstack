"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
export type ToggleOption = { id: string; label: string; gender: string };

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: ToggleOption[];
  label: string;
};
export function CheckboxBtn() {
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name="gender"
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        console.log(error);
        return (
          <div className="flex flex-col items-center space-x-2">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Skills
            </label>
            <br />
            <div className="flex justify-center gap-2">
              <Checkbox id="terms" />
              <Checkbox id="terms" />
              <Checkbox id="terms" />
            </div>
          </div>
        );
      }}
    />
  );
}
