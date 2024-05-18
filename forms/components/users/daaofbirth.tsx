"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};
export default function DateOfBirth<T extends FieldValues>({
  name,
  label,
}: Props<T>) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name="dataOfbirth"
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        console.log(error);
        return (
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        );
      }}
    />
  );
}
