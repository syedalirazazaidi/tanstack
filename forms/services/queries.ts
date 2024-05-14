import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { Option } from "@/components/users/selecteable";

export function useStates() {
  return useQuery({
    queryKey: ["states"],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8080/states")
        .then((res) => res.data),
  });
}
