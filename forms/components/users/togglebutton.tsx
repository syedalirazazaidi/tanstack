import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
export type Option = { id: string; label: string; language: string };

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: Option[];
  label: string;
};
export default function ToggleButton<T extends FieldValues>({
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
      name="name"
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        console.log(error);

        return (
          <React.Fragment>
            <div className="flex flex-col">{label}</div>
            <ToggleGroup
              {...register(label)}
              onValueChange={onChange}
              defaultValue={value}
              variant="outline"
              type="single"
            >
              {options?.map((option) => (
                <ToggleGroupItem multi key={option.id} value={option.id}>
                  {option.language}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </React.Fragment>
        );
      }}
    />
  );
}
