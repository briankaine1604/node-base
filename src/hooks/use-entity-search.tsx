import { useState, useEffect } from "react";
import { PAGINATION } from "@/config/constants";
import { set } from "zod";

interface UseEntitySearchProps<T extends { search: string; page: number }> {
  params: T;
  setParams: (params: T) => void;
  debounceMs?: number;
}

export function useEntitySearch<T extends { search: string; page: number }>({
  params,
  setParams,
  debounceMs = 500,
}: UseEntitySearchProps<T>) {
  const [localSearch, setLocalSearch] = useState(params.search);

  useEffect(() => {
    // 1. Initial sync: if local is empty but URL has a value, clear URL
    if (localSearch === "" && params.search !== "") {
      setParams({
        ...params,
        search: "",
        page: PAGINATION.DEFAULT_PAGE,
      });
      return;
    }

    // 2. Debounce logic: delay updating the URL until typing stops
    const timer = setTimeout(() => {
      if (localSearch !== params.search) {
        setParams({
          ...params,
          search: localSearch,
          page: PAGINATION.DEFAULT_PAGE, // Always reset to page 1 on new search
        });
      }
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [localSearch, params, setParams, debounceMs]);

  useEffect(() => {
    setLocalSearch(params.search);
  }, [params.search]);

  return { searchValue: localSearch, onSearchChange: setLocalSearch };
}
