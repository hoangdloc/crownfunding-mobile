import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import { Languages } from "@/constants";
import en from "./locales/en";
import vi from "./locales/vi";

export const FallbackLanguage = Languages.EN;
const DefaultDateFormatPattern = "dd/MM/yyyy";

const resources = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  }
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem("language");

  if (!savedLanguage) {
    savedLanguage = Localization.getLocales()[0].languageCode ?? FallbackLanguage;
  }

  await i18n.use(initReactI18next).init({
    lng: savedLanguage,
    fallbackLng: FallbackLanguage,
    interpolation: {
      format: function (value: any, formatPattern: string = DefaultDateFormatPattern) {
        if (value instanceof Date) return format(value, formatPattern);
        return value;
      },
      escapeValue: false
    },
    resources
  });
};

void initI18n();

export default i18n;
