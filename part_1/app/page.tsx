"use client";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const {
    isPending,
    isError,
    data: todosData,
    error,
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

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const renderData = todosData.slice(0, 5).map((data: any) => {
    return (
      <div key={data.id} className="bg-red-400 py-[1px]">
        {data.title}
      </div>
    );
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{renderData}</div>
      <Button variant="ghost">Button</Button>
    </main>
  );
}
