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
import { Controller, FieldValues, Path } from "react-hook-form";
type Props<T extends FieldValues> = {
  name: Path<T>;
};
export default function Selectable<T extends FieldValues>({ name }: Props<T>) {
  return (
    <Controller
      name="state"
      //   control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div>
          <Select value={value}>
            <SelectTrigger>
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>State</SelectLabel>
                <SelectItem value="sindh">Sindh</SelectItem>
                <SelectItem value="kpk">KPK</SelectItem>
                <SelectItem value="balochistan">Balochistan</SelectItem>
                <SelectItem value="punjab">Punjab</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    />
  );
}
