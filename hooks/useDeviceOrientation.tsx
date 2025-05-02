import { useWindowDimensions } from "react-native";

type DeviceOrientation = "portrait" | "landscape";

export const useDeviceOrientation = (): DeviceOrientation => {
  const { width, height } = useWindowDimensions();

  if (width >= height) {
    return "landscape";
  }
  return "portrait";
};
