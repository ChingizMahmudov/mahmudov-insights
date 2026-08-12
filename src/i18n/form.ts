import type { Locale } from "./types";

export type FormDict = {
  eyebrow: string;
  title: string;
  name: string;
  email: string;
  company: string;
  service: string;
  servicePlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  required: string;
  invalidEmail: string;
  success: string;
  note: string;
  services: string[];
};

export const FORM_DICTS: Record<Locale, FormDict> = {
  en: {
    eyebrow: "Project brief",
    title: "Send a short brief",
    name: "Name",
    email: "Work email",
    company: "Company",
    service: "Service needed",
    servicePlaceholder: "Select a service",
    message: "Project details",
    messagePlaceholder: "Scope, sample size, timeline, deliverables…",
    submit: "Send brief",
    required: "This field is required.",
    invalidEmail: "Enter a valid email address.",
    success:
      "Your email client is opening with the brief ready to send. Prefer to write directly? Use the address below.",
    note: "No data is stored on this website — the brief opens in your own email client.",
    services: [
      "Data analysis & statistics",
      "Reporting & presentations",
      "Questionnaire design",
      "Fieldwork supervision & QA",
      "Other",
    ],
  },
  az: {
    eyebrow: "Layihə brifi",
    title: "Qısa brif göndərin",
    name: "Ad",
    email: "İş e-poçtu",
    company: "Şirkət",
    service: "Lazım olan xidmət",
    servicePlaceholder: "Xidmət seçin",
    message: "Layihə təfərrüatları",
    messagePlaceholder: "Əhatə, seçmə həcmi, müddət, nəticələr…",
    submit: "Brifi göndər",
    required: "Bu xana mütləqdir.",
    invalidEmail: "Düzgün e-poçt ünvanı daxil edin.",
    success:
      "E-poçt proqramınız hazır brif ilə açılır. Birbaşa yazmaq istəyirsinizsə, aşağıdakı ünvandan istifadə edin.",
    note: "Bu saytda heç bir məlumat saxlanılmır — brif sizin e-poçt proqramınızda açılır.",
    services: [
      "Data təhlili və statistika",
      "Hesabat və təqdimatlar",
      "Anket dizaynı",
      "Sahə nəzarəti və keyfiyyət",
      "Digər",
    ],
  },
  ru: {
    eyebrow: "Бриф проекта",
    title: "Отправьте короткий бриф",
    name: "Имя",
    email: "Рабочий e-mail",
    company: "Компания",
    service: "Нужная услуга",
    servicePlaceholder: "Выберите услугу",
    message: "Детали проекта",
    messagePlaceholder: "Объём, выборка, сроки, результаты…",
    submit: "Отправить бриф",
    required: "Это поле обязательно.",
    invalidEmail: "Введите корректный e-mail.",
    success:
      "Открывается ваш почтовый клиент с готовым брифом. Хотите написать напрямую? Используйте адрес ниже.",
    note: "Сайт не сохраняет данные — бриф открывается в вашем почтовом клиенте.",
    services: [
      "Анализ данных и статистика",
      "Отчёты и презентации",
      "Разработка анкет",
      "Супервизия поля и контроль качества",
      "Другое",
    ],
  },
};
