"use client";
import { Input } from "@/components/ui/input";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: "all" });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <form className=" " onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center items-center gap-4 mt-5">
        <div className="flex flex-col">
          <Input
            className="w-48 border-blue-900"
            defaultValue=""
            {...register("example", {
              required: { value: true, message: "The email is required" },
            })}
          />
          <br />
          {errors.example && <span>This field is required</span>}
        </div>
        <div className="flex flex-col">
          <Input
            className="w-48 border-blue-900"
            defaultValue=""
            {...register("exampleRequired", {
              required: { value: true, message: "The email is required" },
            })}
          />
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
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
