"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
export type ToggleOption = { id: string; label: string; skill: string };

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: ToggleOption[];
  label: string;
};
export function CheckboxBtn<T extends FieldValues>({
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
      name="skills"
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        console.log(error, value);
        return (
          <div className="flex flex-col items-center space-x-2">
            {options.map((option) => (
              <div className="flex justify-center" key={option.id}>
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Skills
                </label>
                <br />
                <div className="flex justify-center gap-2">
                  <Checkbox
                    id={option.id}
                    checked={value}
                    onCheckedChange={onChange}
                  />
                </div>
              </div>
            ))}
            {/* <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Skills
            </label>
            <br />
            <div className="flex justify-center gap-2">
              <Checkbox id="terms" />
            </div> */}
          </div>
        );
      }}
    />
  );
}
