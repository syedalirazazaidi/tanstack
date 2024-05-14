import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
export type ToggleOption = { id: string; label: string; language: string };

type Props<T extends FieldValues> = {
  language: Path<T>;
  options: ToggleOption[];
  languagelabel: string;
};
export default function ToggleButton<T extends FieldValues>({
  language,
  options,
  languagelabel,
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
      name="languagesSpoken"
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        console.log(error);

        return (
          <React.Fragment>
            <div className="flex flex-col">{languagelabel}</div>
            <ToggleGroup
              {...register(language)}
              onValueChange={onChange}
              defaultValue={value}
              variant="outline"
              type="multiple"
            >
              {options?.map((option) => (
                <ToggleGroupItem key={option.id} value={option.id}>
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
