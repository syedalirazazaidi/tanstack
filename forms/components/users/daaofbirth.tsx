"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalculatorIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};
export default function DateOfBirth<T extends FieldValues>({
  name,
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
      name="dataBirth"
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        console.log(error);
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] pl-3 text-left font-normal",
                  !value && "text-muted-foreground"
                )}
              >
                {value ? format(value, "PPP") : <span>Pick a date</span>}
                <CalculatorIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                captionLayout="dropdown-buttons"
                mode="single"
                selected={value}
                onSelect={onChange}
                fromYear={1990}
                toYear={2024}
                className="rounded-md border"
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          // <Calendar
          //   captionLayout="dropdown-buttons"
          //   fromYear={1990}
          //   toYear={2024}
          //   mode="single"
          //   selected={value}
          //   onSelect={onChange}
          //   className="rounded-md border"
          // />
        );
      }}
    />
  );
}
