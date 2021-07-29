import { useQuery } from "react-query";
import { client } from "./api-client";

export function useLanguages() {
  return useQuery({
    queryKey: "configurations/languages",
    queryFn: async () =>
      client("/configuration/languages", {
        method: "GET",
      }),
  });
}
