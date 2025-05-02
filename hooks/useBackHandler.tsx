import { DependencyList, useEffect } from "react";
import { BackHandler } from "react-native";

export const useBackHandler = (handler: () => boolean, deps: DependencyList = []) => {
  useEffect(() => {
    const sub = BackHandler.addEventListener("hardwareBackPress", handler);

    return () => sub.remove();
  }, [handler, ...deps]);
};
