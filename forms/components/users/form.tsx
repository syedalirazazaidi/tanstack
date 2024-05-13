"use client";
import { Input } from "@/components/ui/input";

import { useForm, SubmitHandler, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, schema } from "@/types/schema";
import Selectable from "./selecteable";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Forms() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<Schema>();
  const onSubmit: SubmitHandler<Schema> = (data) => console.log(data);

  console.log(watch("name"));

  return (
    <form className=" ">
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="flex flex-col">
          <Input
            error={errors.name?.message}
            className="w-48 border-blue-900"
            placeholder="name"
            {...register("name", {
              required: { value: true, message: "The name is required" },
            })}
          />
          <br />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="flex flex-col">
          <Input
            className="w-48 border-blue-900"
            error={errors.email?.message}
            placeholder="email"
            {...register("email", {
              required: { value: true, message: "The email is required" },
            })}
          />
          <br />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="w-52">
          <Selectable<Schema>
            name="state"
            label="states"
            options={[
              { id: "1", label: "aliraza", name: "kpk" },
              { id: "2", label: "zaidi", name: "balochistan" },
              { id: "3", label: "syed", name: "punjab" },
            ]}
          />
        </div>
      </div>
      <br />
      <div className=" flex flex-1 justify-center items-center mx-auto container">
        <input
          type="submit"
          className=" bg-red-300 px-8 p-1 rounded text-[11px] hover:cursor-pointer"
        />
      </div>
    </form>
  );
}
