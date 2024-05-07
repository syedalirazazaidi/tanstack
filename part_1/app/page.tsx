"use client";
import { Button } from "@/components/ui/button";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import Todos from "./todos";

export default function Home() {
  const isFetching = useIsFetching();
  const {
    isPending,
    isError,
    data: todosData,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
  const { data: userData } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    select: (users) =>
      users.map((todo: any) => ({ id: todo.id, name: todo.name })),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }
  console.log(isFetching, "LLLLLLL");

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const renderData = todosData?.slice(0, 5).map((data: any) => {
    return (
      <div key={data.id} className="bg-red-400 py-[1px]">
        {data.title}
      </div>
    );
  });

  const renderUserData = userData?.slice(0, 5).map((data: any) => {
    return (
      <div key={data.id} className="bg-teal-400 py-[1px]">
        {data.id}
        {data.name}
      </div>
    );
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{renderData}</div>
      <Todos />
      <div>{renderUserData}</div>
    </main>
  );
}
