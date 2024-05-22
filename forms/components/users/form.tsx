"use client";
import { Input } from "@/components/ui/input";
import * as React from "react";

import {
  useForm,
  useFormContext,
  SubmitHandler,
  useFieldArray,
  useWatch,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, defaultValues, schema } from "@/types/schema";
import Selectable from "./selecteable";
import { useStates } from "@/services/queries";
import ToggleButton from "./togglebutton";
import RadioButton from "./radiobutton";
import { CheckboxBtn } from "./checkbox";
import DateOfBirth from "./daaofbirth";
import Switches from "./switch";
import { useEffect } from "react";
import { Button } from "../ui/button";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    control,
    reset,
    unregister,
    formState: { errors },
  } = useFormContext<Schema>();
  const onSubmit: SubmitHandler<Schema> = (data) => console.log(data);

  console.log(watch("name"));
  const statesQuery = useStates();
  const isTeacher = useWatch({ control, name: "isTeacher" });

  const { append, fields, remove, replace } = useFieldArray({
    control,
    name: "students",
  });

  useEffect(() => {
    if (!isTeacher) {
      replace([]);
      unregister("students");
    }
  }, [isTeacher, replace, unregister]);

  const handleReset = () => {
    reset(defaultValues);
  };

  console.log(errors);

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
        <div className="flex justify-center">
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
        <div className="my-4">
          <DateOfBirth<Schema> name="dataBirth" label="dataBirth" />
        </div>
        <div className="my-4">
          <Switches<Schema> name="isTeacher" label="are you a teacher" />
        </div>
      </div>
      <div className=" flex justify-center items-center flex-col ">
        {isTeacher && (
          <div>
            <Button onClick={() => append({ name: "" })} type="button">
              Add new student
            </Button>
          </div>
        )}
        <div className="my-4">
          {fields.map((field, index) => (
            <React.Fragment key={field.id}>
              <Input
                className="w-12 flex justify-center border-blue-900"
                placeholder="students"
                {...register(`students.${index}.name`, {
                  required: { value: true, message: "student name" },
                })}

                // error={isTeacher && errors.students.0.message}
              />

              <Button
                color="error"
                onClick={() => {
                  remove(index);
                }}
                type="button"
              >
                Remove
              </Button>
            </React.Fragment>
          ))}
        </div>
      </div>
      <br />
      <div className=" flex flex-1 justify-center items-center mx-auto container">
        <input
          type="submit"
          className=" bg-red-300 px-8 p-1 rounded text-[11px] hover:cursor-pointer"
        />
        <input
          className=" bg-red-300 px-8 p-1 rounded text-[11px] hover:cursor-pointer"
          type="reset"
          onClick={handleReset}
        />
        <div>
          {/* <Button
            className=" bg-red-300   rounded text-[11px] hover:cursor-pointer"
            onClick={handleReset}
          >
            Reset Button
          </Button> */}
        </div>
      </div>
    </form>
  );
}
