import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Forms from "./form";
import { Schema, defaultValues, schema } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
export default function UsersProvider() {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <Forms />
      <DevTool control={methods.control} />
    </FormProvider>
  );
}
