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
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <form
      className="flex justify-center items-center gap-4 mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <Input
          className="w-48 border-blue-900"
          defaultValue="test"
          {...register("example")}
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <div className="flex flex-col">
        <Input
          className="w-48 border-blue-900"
          {...register("exampleRequired", { required: true })}
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <input
        type="submit"
        className="bg-red-300 p-1 rounded text-[11px] hover:cursor-pointer"
      />
    </form>
  );
}
