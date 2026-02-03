import { parseAsInteger, parseAsString } from "nuqs/server";
import { PAGINATION } from "@/config/constants";

export const workflowsParams = {
  page: parseAsInteger
    .withDefault(PAGINATION.DEFAULT_PAGE)
    .withOptions({ clearOnDefault: true }),
  pageSize: parseAsInteger
    .withDefault(PAGINATION.DEFAULT_PAGE_SIZE)
    .withOptions({ clearOnDefault: true }),
  search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
};

// what clearonDefault does fr instance you have http://localhost:3000/workflows?search=house without clear on default you see search= or if u on page 1 you see page=1 with clearondefault those are removed from the url
