import { useTranslation, UseTranslationResponse } from "react-i18next";
import { TOptions } from "i18next";
import en from "@/i18n/locales/en";
import { LiteralUnion, ObjectKeyPaths } from "@/types/utilities";

export type KeyTranslation = LiteralUnion<ObjectKeyPaths<typeof en>>;

type UseAppTranslationResponse = Omit<UseTranslationResponse<"translation", undefined>, "t"> & {
  t: (key: KeyTranslation, options?: TOptions) => string;
};

export const useAppTranslation = (): UseAppTranslationResponse => {
  const { t, ...rest } = useTranslation("translation");

  return {
    ...rest,
    t: t as UseAppTranslationResponse["t"]
  };
};
