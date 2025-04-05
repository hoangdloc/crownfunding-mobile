import React, { forwardRef } from "react";

type SlotProps = {
  children?: React.ReactNode;
  [key: string]: any;
};

const Slot = forwardRef<any, SlotProps>(({ children, ...props }, ref) => {
  if (!children) {
    return null;
  }

  // Get the single child
  const child = React.Children.only(children) as React.ReactElement;

  // Clone the child with merged props and ref
  return React.cloneElement(child, {
    ...props,
    ...child.props,
    ref: (node: any) => {
      // Forward the ref to the child
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;

      // Also handle any existing ref on child
      const childRef = (child as any).ref;
      if (typeof childRef === "function") childRef(node);
      else if (childRef) childRef.current = node;
    }
  });
});

export { Slot };
