import { TouchableOpacityProps, View } from "react-native";

export type ButtonRef = React.ElementRef<typeof View>;

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
type ButtonSize = "md" | "lg";

export type ButtonProps = TouchableOpacityProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  debouceOnClick?: boolean | number;
};
