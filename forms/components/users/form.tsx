"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, schema } from "@/types/schema";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Forms() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Schema>({ mode: "all", resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<Schema> = (data) => console.log(data);

  console.log(watch("name"));

  return (
    <form className=" " onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="flex flex-col">
          <Input
            error={errors.name?.message}
            className="w-48 border-blue-900"
            defaultValue=""
            placeholder="name"
            {...register("name", {
              required: { value: true, message: "The name is required" },
            })}
          />
          <br />
          {/* {errors.name && <span>This field is required</span>} */}
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
          {/* {errors.email && <span>This field is required</span>} */}
        </div>

        <Select>
          <SelectTrigger className="w-[210px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
