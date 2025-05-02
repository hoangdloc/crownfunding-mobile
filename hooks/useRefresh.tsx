import { useState } from "react";

export const useRefresh = (refresh: () => Promise<unknown>) => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  async function onRefresh() {
    setIsRefreshing(true);

    try {
      await refresh();
    } finally {
      setIsRefreshing(false);
    }
  }

  return { isRefreshing, onRefresh };
};
