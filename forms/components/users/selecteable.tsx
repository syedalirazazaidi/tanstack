"use client";
import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
export type Option = { id: string; label: string; name: string };

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: Option[];
  label: string;
};
export default function Selectable<T extends FieldValues>({
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
  React.useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  watch();
  return (
    <Controller
      name="state"
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        console.log(error);

        return (
          <div>
            <Select
              {...register(label)}
              onValueChange={onChange}
              defaultValue={value}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>State</SelectLabel>
                  {options?.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <ErrorMessage
              errors={error}
              name="state"
              render={({ message }) => <p>hi doyou sf{message}</p>}
            />
          </div>
        );
      }}
    />
  );
}
