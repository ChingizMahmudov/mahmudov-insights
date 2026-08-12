import type { Locale } from "./types";

export type ErrorDict = {
  notFoundTitle: string;
  notFoundBody: string;
  errorTitle: string;
  errorBody: string;
  retry: string;
  home: string;
};

export const ERROR_DICTS: Record<Locale, ErrorDict> = {
  en: {
    notFoundTitle: "Page not found",
    notFoundBody: "The page you're looking for doesn't exist or has been moved.",
    errorTitle: "This page didn't load",
    errorBody: "Something went wrong on our end. You can try again or head back to the homepage.",
    retry: "Try again",
    home: "Go to homepage",
  },
  az: {
    notFoundTitle: "Səhifə tapılmadı",
    notFoundBody: "Axtardığınız səhifə mövcud deyil və ya ünvanı dəyişdirilib.",
    errorTitle: "Səhifə yüklənmədi",
    errorBody:
      "Bizim tərəfimizdə xəta baş verdi. Yenidən cəhd edə və ya ana səhifəyə qayıda bilərsiniz.",
    retry: "Yenidən cəhd edin",
    home: "Ana səhifəyə keçin",
  },
  ru: {
    notFoundTitle: "Страница не найдена",
    notFoundBody: "Запрошенная страница не существует или была перемещена.",
    errorTitle: "Страница не загрузилась",
    errorBody: "На нашей стороне произошла ошибка. Попробуйте ещё раз или вернитесь на главную.",
    retry: "Попробовать снова",
    home: "На главную",
  },
};

/** Pick the locale from a pathname such as "/az/services". */
export const localeFromPathname = (pathname: string): Locale => {
  const seg = pathname.split("/")[1];
  return seg === "az" || seg === "ru" ? seg : "en";
};
