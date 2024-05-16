import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

export type ToggleOption = { id: string; label: string; gender: string };

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: ToggleOption[];
  label: string;
};
export default function RadioButton<T extends FieldValues>({
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
      name="gender"
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        console.log(error);
        return (
          <div>
            <p>{label}</p>
            <RadioGroup
              {...register(label)}
              onValueChange={onChange}
              defaultValue={value}
            >
              {options.map((option) => (
                <div className="flex items-center space-x-2" key={option.id}>
                  <Label htmlFor={option.id}>{option.gender}</Label>
                  <RadioGroupItem value={option.id} id={option.id} />
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      }}
    />
  );
}
