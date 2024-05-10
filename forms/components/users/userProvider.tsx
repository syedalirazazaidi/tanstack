import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Forms from "./form";
import { Schema, schema } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function UsersProvider({}) {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
  });
  return (
    <FormProvider {...methods}>
      <Forms />
    </FormProvider>
  );
}
