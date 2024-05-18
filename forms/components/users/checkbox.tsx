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
          <div className="flex flex-row items-center space-x-2">
            {options.map((option) => (
              <div className="flex justify-center  " key={option.id}>
                <label
                  htmlFor={option.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {name}
                </label>
                <br />

                <Checkbox
                  checked={value?.includes(option.id)}
                  onCheckedChange={(checked) => {
                    return checked
                      ? onChange([...value, option.id])
                      : onChange(
                          value?.filter((value: any) => value !== option.id)
                        );
                  }}
                />
              </div>
            ))}
            <div></div>
          </div>
        );
      }}
    />
  );
}
