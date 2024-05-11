"use client";
import React from "react";
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
  const { control } = useFormContext();
  return (
    <Controller
      name="state"
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        return (
          <div>
            <Select onValueChange={onChange} defaultValue={value}>
              <SelectTrigger>
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>State</SelectLabel>
                  {options?.map((option) => (
                    <SelectItem key={option.id} value={option.name}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectGroup>

                {/* <SelectLabel>State</SelectLabel>

                  <SelectItem value="kpk">KPK</SelectItem>
                  <SelectItem value="balochistan">Balochistan</SelectItem>
                  <SelectItem value="punjab">Punjab</SelectItem> */}
              </SelectContent>
            </Select>
          </div>
        );
      }}
    />
  );
}
