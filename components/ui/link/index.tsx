import { Link, LinkProps } from "expo-router";
import { useRef } from "react";
import { Animated, GestureResponderEvent } from "react-native";

const PressInOpacity = 0.4;
const PressOutOpacity = 1;
const TransitionDuration = 200;

export const AnimatedLink: React.FC<LinkProps> = ({ children, onPressIn, onPressOut, ...rest }) => {
  const opacity = useRef(new Animated.Value(1)).current;

  const handlePressIn = (e: GestureResponderEvent) => {
    Animated.timing(opacity, {
      toValue: PressInOpacity,
      duration: TransitionDuration,
      useNativeDriver: true
    }).start();
    onPressIn?.(e);
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    Animated.timing(opacity, {
      toValue: PressOutOpacity,
      duration: TransitionDuration,
      useNativeDriver: true
    }).start();
    onPressOut?.(e);
  };

  return (
    <Link onPressIn={handlePressIn} onPressOut={handlePressOut} {...rest}>
      <Animated.View style={{ opacity }}>{children}</Animated.View>
    </Link>
  );
};
AnimatedLink.displayName = "AnimatedLink";
