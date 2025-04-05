import React from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext
} from "react-hook-form";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { ThemedTypographyProps } from "../typography/types";
import { ThemedTypography } from "../typography";
import { Slot } from "../slot";
import { useAppTranslation } from "@/hooks";

const FormRoot = FormProvider;

type TFormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<TFormFieldContextValue>({} as TFormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>): JSX.Element => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

type TFormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<TFormItemContextValue>({} as TFormItemContextValue);

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};

const FormItem = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ style, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <View ref={ref} style={[styles.formItemView, style]} {...props} />
      </FormItemContext.Provider>
    );
  }
);
FormItem.displayName = "FormItem";

type FormTypographyProps = Omit<ThemedTypographyProps, "as" | "colorName"> & {
  colorName?: Extract<ThemedTypographyProps["colorName"], string>;
};

const FormLabel = React.forwardRef<React.ElementRef<typeof ThemedTypography>, FormTypographyProps>(
  ({ colorName = "label", style, ...props }, ref) => {
    const { error } = useFormField();

    return (
      <ThemedTypography
        ref={ref}
        {...props}
        colorName={error ? "error" : colorName}
        style={[styles.formLabelTypography, style]}
      />
    );
  }
);
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      nativeID={formItemId}
      accessibilityInvalid={!!error}
      accessibilityHint={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormMessage = React.forwardRef<
  React.ElementRef<typeof ThemedTypography>,
  FormTypographyProps
>(({ style, children, colorName = "error", ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const { t } = useAppTranslation();
  const body = error ? t(String(error?.message)) : children;

  if (!body) {
    return null;
  }

  return (
    <ThemedTypography
      ref={ref}
      style={[styles.forMessageTypography, style]}
      nativeID={formMessageId}
      colorName={error ? "error" : colorName}
      {...props}
    >
      {body}
    </ThemedTypography>
  );
});
FormMessage.displayName = "FormMessage";

const styles = StyleSheet.create({
  formItemView: {
    gap: 12
  },
  formLabelTypography: {
    fontSize: 14,
    fontWeight: "medium"
  },
  forMessageTypography: {
    fontSize: 12,
    fontWeight: "medium"
  }
});

const Form = {
  Root: FormRoot,
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Message: FormMessage,
  Field: FormField
};

export { Form, useFormField };
