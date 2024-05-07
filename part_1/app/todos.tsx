import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function Todos() {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post("http://localhost:3000/posts", newTodo);
    },
    onMutate: (variables) => {
      console.log(variables, "opopopop");
    },
  });
  return (
    <div>
      {mutation.isPending ? (
        "Adding todo..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({ id: new Date(), title: "ali raza" });
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  );
}

export default Todos;
