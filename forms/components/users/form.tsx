"use client";
import { Input } from "@/components/ui/input";

import { useForm, SubmitHandler, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, schema } from "@/types/schema";
import Selectable from "./selecteable";
import { useStates } from "@/services/queries";
import ToggleButton from "./togglebutton";
import RadioButton from "./radiobutton";
import { CheckboxBtn } from "./checkbox";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useFormContext<Schema>();
  const onSubmit: SubmitHandler<Schema> = (data) => console.log(data);

  console.log(watch("name"));
  const statesQuery = useStates();

  return (
    <form className=" " onSubmit={handleSubmit(onSubmit)}>
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
            // error={errors.name?.message}
            className="w-48 border-blue-900"
            placeholder="middleName"
            {...register("middleName")}
          />
          <br />
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
            label="state"
            options={[
              { id: "1", label: "aliraza", name: "kpk" },
              { id: "2", label: "zaidi", name: "balochistan" },
              { id: "3", label: "syed", name: "punjab" },
            ]}
          />
          {errors.state && <span>This field is required</span>}
        </div>
        <div className="my-4">
          <ToggleButton<Schema>
            language="languagesSpoken"
            languagelabel="languagesSpoken"
            options={[
              { id: "1", label: "english", language: "english" },
              { id: "2", label: "urdu", language: "urdu" },
              { id: "3", label: "german", language: "german" },
            ]}
          />
        </div>
        <div className="my-4">
          <RadioButton<Schema>
            name="gender"
            label="gender"
            options={[
              { id: "1", label: "Male", gender: "male" },
              { id: "2", label: "Femail", gender: "female" },
              { id: "3", label: "None", gender: "none" },
            ]}
          />
        </div>
        <div className="my-4">
          <CheckboxBtn<Schema>
            name="skills"
            label="skills"
            options={[
              { id: "1", label: "reactjs", skill: "Reactjs" },
              { id: "2", label: "angular", skill: "Angular" },
              { id: "3", label: "vue", skill: "Vue" },
            ]}
          />
          {errors.skills && <span>not more then two field </span>}
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
