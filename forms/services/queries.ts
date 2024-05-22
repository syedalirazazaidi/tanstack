import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { Option } from "@/components/users/selecteable";
import { ApiGet } from "@/types/apiTypes";

export function useStates() {
  return useQuery({
    queryKey: ["states"],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8080/states")
        .then((res) => res.data),
  });
}
export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: (): Promise<Option[]> =>
      axios.get<ApiGet[]>("http://localhost:8080/users").then((response) =>
        response.data.map(
          (user) =>
            ({
              id: user.id.toString(),
              label: user.name,
            } as Option)
        )
      ),
  });
}
