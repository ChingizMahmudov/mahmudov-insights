import type { CaseSlug, Locale } from "@/i18n/types";
import { CASE_STATS, formatCount } from "./stats";

const S = CASE_STATS;
const en2100 = formatCount(S.shopperSegmentation.sample, "en");
const i2100 = formatCount(S.shopperSegmentation.sample, "az");

export type CaseMetric = { value: string; label: string };

export type CaseStudy = {
  slug: CaseSlug;
  title: string;
  client: string;
  industry: string;
  market: string;
  summary: string;
  metrics: CaseMetric[];
  facts: { label: string; value: string }[];
  objective: string;
  challenge: string;
  approach: string;
  methodology: string[];
  analysis: string;
  findings: string[];
  implications: string[];
  deliverables: string[];
  chart: "segments" | "field" | "modules";
};

export const CASE_STUDIES: Record<Locale, CaseStudy[]> = {
  en: [
    {
      slug: "shopper-segmentation",
      title: "Shopper segmentation for a leading retail chain",
      client: "Leading Retail Chain",
      industry: "Retail / FMCG",
      market: "Azerbaijan",
      summary: `A quantitative segmentation study translating ${en2100} shopper interviews into four actionable customer segments with personas, driver analysis and channel recommendations.`,
      metrics: [
        { value: `n = ${en2100}`, label: "Completed interviews" },
        { value: String(S.shopperSegmentation.segments), label: "Actionable segments" },
        { value: "K-means", label: "Clustering in SPSS" },
      ],
      facts: [
        { label: "Industry", value: "Retail / FMCG" },
        { label: "Market", value: "Azerbaijan" },
        { label: "Sample", value: `n = ${en2100}` },
        { label: "Method", value: "K-means clustering in SPSS" },
      ],
      objective:
        "Identify distinct shopper groups within the chain's customer base and define how each group should be addressed in assortment, pricing communication and in-store experience.",
      challenge:
        "The client held extensive transaction data but no behavioural framework to explain it. Attitudinal, behavioural and demographic variables had to be reduced to a segmentation that was statistically stable and simple enough for commercial teams to use.",
      approach:
        "Variables were screened and standardised before clustering, then tested across multiple cluster solutions for stability and interpretability. The selected solution was profiled against store behaviour, basket patterns and category attitudes.",
      methodology: [
        "Variable screening, standardisation and correlation review",
        "K-means clustering in SPSS across 3-, 4- and 5-cluster solutions",
        "Stability checks on random subsamples",
        "Discriminant validation of the selected solution",
        "Profiling by demographics, shopping behaviour and category attitudes",
        "Key driver analysis on overall store preference",
      ],
      analysis:
        "The four-cluster solution offered the strongest balance between statistical separation and commercial interpretability. Each segment was profiled on trip frequency, basket composition, price sensitivity and drivers of store choice.",
      findings: [
        "Four distinct shopper segments with clearly different store-choice drivers",
        "Price sensitivity was not uniform: for two segments, assortment depth outweighed promotional intensity",
        "Convenience-led shoppers displayed the highest visit frequency but the lowest basket value",
        "Segment size and value contribution differed substantially, allowing prioritisation",
      ],
      implications: [
        "Assortment and promotional strategy differentiated by segment rather than by store format alone",
        "Communication priorities defined per segment based on driver strength",
        "A clear prioritisation of the two segments with the strongest value contribution",
      ],
      deliverables: [
        "Segmentation model and cluster assignment file",
        "Segment personas with profiling tables",
        "Key driver analysis output",
        "Client-ready PowerPoint report with recommendations",
      ],
      chart: "segments",
    },
    {
      slug: "fieldwork-supervision",
      title: "Multi-stage fieldwork supervision & data validation",
      client: "Telecom Client",
      industry: "Telecom",
      market: "Azerbaijan",
      summary: `End-to-end quality control across a fieldwork team of ${S.fieldworkSupervision.interviewers} interviewers, combining on-site supervision, audio review and post-fieldwork data validation.`,
      metrics: [
        { value: String(S.fieldworkSupervision.interviewers), label: "Interviewers supervised" },
        { value: "3 stages", label: "Quality control layers" },
        { value: "100%", label: "Issue log traceability" },
      ],
      facts: [
        { label: "Industry", value: "Telecom" },
        { label: "Scope", value: `${S.fieldworkSupervision.interviewers} interviewers` },
        { label: "Method", value: "On-site supervision, audio review and post-fieldwork data QC" },
      ],
      objective:
        "Protect data quality across a large distributed fieldwork operation and ensure the final dataset could withstand client-side scrutiny.",
      challenge:
        "A large interviewer team, dispersed locations and a compressed fieldwork window created a high risk of inconsistent administration, incomplete routing and undetected response patterns.",
      approach:
        "Quality control was structured in three layers running in parallel with fieldwork, so that issues were detected and corrected while interviewing was still in progress rather than at the analysis stage.",
      methodology: [
        "On-site supervision of interviewer administration and respondent selection",
        "Structured audio back-check review against a standard evaluation sheet",
        "Mid-field consistency and completeness checks on incoming data",
        "Straight-lining and speeding detection",
        "Routing and logic verification against the questionnaire specification",
        "Issue log with correction tracking and interviewer-level feedback",
      ],
      analysis:
        "Interviewer-level quality indicators were tracked throughout fieldwork, allowing targeted retraining and, where required, re-contact and replacement of affected interviews.",
      findings: [
        "Quality issues concentrated in a minority of interviewers, making targeted intervention effective",
        "Mid-field detection removed the need for large-scale post-fieldwork exclusions",
        "Routing errors identified early prevented systematic gaps in key modules",
      ],
      implications: [
        "Quality control positioned as a parallel process rather than a final checkpoint",
        "Interviewer-level indicators used as a routine fieldwork management tool",
        "A defensible audit trail available for client review",
      ],
      deliverables: [
        "Fieldwork quality control protocol",
        "Audio back-check evaluation records",
        "Issue log with corrective actions",
        "Validated and cleaned dataset with documentation",
      ],
      chart: "field",
    },
    {
      slug: "satisfaction-questionnaire",
      title: "Customer satisfaction questionnaire for a leading bank",
      client: "Leading Bank",
      industry: "Banking",
      market: "Azerbaijan",
      summary: `Design of a ${S.satisfactionQuestionnaire.questions}-question satisfaction instrument across five modules for mixed CAPI and online administration, refined through a ${S.satisfactionQuestionnaire.pilotSample}-interview pilot.`,
      metrics: [
        { value: String(S.satisfactionQuestionnaire.questions), label: "Final questions" },
        { value: "5", label: "Measurement modules" },
        { value: `n = ${S.satisfactionQuestionnaire.pilotSample}`, label: "Pilot interviews" },
      ],
      facts: [
        { label: "Industry", value: "Banking" },
        { label: "Mode", value: "CAPI + Online" },
        {
          label: "Final questionnaire",
          value: `${S.satisfactionQuestionnaire.questions} questions across ${S.satisfactionQuestionnaire.modules} modules`,
        },
        { label: "Pilot", value: `n = ${S.satisfactionQuestionnaire.pilotSample}` },
      ],
      objective:
        "Build a satisfaction measurement instrument that produces comparable results across two modes of administration and maps directly onto the bank's service KPIs.",
      challenge:
        "Mixed-mode administration risks mode effects, and an extensive KPI list threatened respondent fatigue. The instrument had to stay short enough for CAPI while covering every reporting requirement.",
      approach:
        "Reporting requirements were translated into a modular measurement framework, with scale formats and question wording selected for equivalence across CAPI and online administration.",
      methodology: [
        "Translation of business objectives and service KPIs into measurable constructs",
        "Modular questionnaire architecture across five service areas",
        "Scale selection tested for CAPI and online equivalence",
        "Routing and logic specification with quality checkpoints",
        `Pilot of n = ${S.satisfactionQuestionnaire.pilotSample} with timing and comprehension review`,
        "Post-pilot optimisation of wording, order and length",
      ],
      analysis:
        "Pilot data was reviewed for item non-response, interview length, scale usage and comprehension issues. Redundant items were removed and several formulations were simplified before full launch.",
      findings: [
        "Pilot interview length exceeded target, driven by a small number of low-value items",
        "Two scale formats produced inconsistent usage between modes and were harmonised",
        "Module ordering influenced overall satisfaction responses and was fixed for both modes",
      ],
      implications: [
        "A stable instrument suitable for tracking across waves and modes",
        "Reporting structure agreed before fieldwork, shortening the analysis stage",
        "Reduced respondent burden without loss of KPI coverage",
      ],
      deliverables: [
        "Final questionnaire with routing specification",
        "KPI-to-question mapping document",
        "Pilot review report",
        "Reporting framework for the analysis stage",
      ],
      chart: "modules",
    },
  ],
  az: [
    {
      slug: "shopper-segmentation",
      title: "Aparıcı pərakəndə şəbəkəsi üçün alıcı seqmentasiyası",
      client: "Aparıcı pərakəndə şəbəkəsi",
      industry: "Pərakəndə / FMCG",
      market: "Azərbaycan",
      summary: `${i2100} alıcı müsahibəsini personalar, amil təhlili və kanal tövsiyələri ilə dörd praktiki müştəri seqmentinə çevirən kəmiyyət seqmentasiya layihəsi.`,
      metrics: [
        { value: `n = ${i2100}`, label: "Tamamlanmış müsahibə" },
        { value: String(S.shopperSegmentation.segments), label: "Praktiki seqment" },
        { value: "K-means", label: "SPSS-də klasterləşdirmə" },
      ],
      facts: [
        { label: "Sahə", value: "Pərakəndə / FMCG" },
        { label: "Bazar", value: "Azərbaycan" },
        { label: "Seçmə", value: `n = ${i2100}` },
        { label: "Metod", value: "SPSS-də K-means klasterləşdirmə" },
      ],
      objective:
        "Şəbəkənin müştəri bazasında fərqli alıcı qruplarını müəyyən etmək və hər qrupa çeşid, qiymət kommunikasiyası və mağazadaxili təcrübə baxımından necə yanaşılacağını dəqiqləşdirmək.",
      challenge:
        "Müştəridə geniş əməliyyat məlumatı vardı, lakin onu izah edən davranış çərçivəsi yox idi. Münasibət, davranış və demoqrafik dəyişənlər statistik cəhətdən sabit və kommersiya komandaları üçün sadə olan seqmentasiyaya endirilməli idi.",
      approach:
        "Dəyişənlər klasterləşdirmədən əvvəl seçilib standartlaşdırıldı, sonra bir neçə klaster həlli sabitlik və izah oluna bilmə baxımından yoxlandı. Seçilmiş həll mağaza davranışı, səbət strukturu və kateqoriya münasibətləri üzrə profilləşdirildi.",
      methodology: [
        "Dəyişənlərin seçilməsi, standartlaşdırılması və korrelyasiya təhlili",
        "SPSS-də 3, 4 və 5 klasterli həllər üzrə K-means",
        "Təsadüfi alt seçmələrdə sabitlik yoxlamaları",
        "Seçilmiş həllin diskriminant validasiyası",
        "Demoqrafiya, alış davranışı və kateqoriya münasibətləri üzrə profilləşdirmə",
        "Mağaza seçiminə təsir edən əsas amillərin təhlili",
      ],
      analysis:
        "Dörd klasterli həll statistik ayrılma ilə kommersiya izahı arasında ən yaxşı balansı verdi. Hər seqment ziyarət tezliyi, səbət tərkibi, qiymət həssaslığı və mağaza seçimi amilləri üzrə profilləşdirildi.",
      findings: [
        "Mağaza seçimi amilləri aydın fərqlənən dörd alıcı seqmenti",
        "Qiymət həssaslığı eyni deyil: iki seqment üçün çeşid dərinliyi aksiya intensivliyindən üstün oldu",
        "Rahatlıq yönümlü alıcılar ən yüksək ziyarət tezliyi, ən aşağı səbət dəyəri göstərdi",
        "Seqmentlərin həcmi və dəyər payı fərqləndi, bu da prioritetləşdirməyə imkan verdi",
      ],
      implications: [
        "Çeşid və aksiya strategiyası yalnız mağaza formatına görə deyil, seqmentlərə görə fərqləndirilir",
        "Kommunikasiya prioritetləri amillərin gücünə əsasən hər seqment üzrə müəyyən edilir",
        "Dəyər payı ən yüksək olan iki seqment üzrə aydın prioritet",
      ],
      deliverables: [
        "Seqmentasiya modeli və klaster təyinatı faylı",
        "Profilləşdirmə cədvəlləri ilə seqment personaları",
        "Əsas amil təhlilinin nəticələri",
        "Tövsiyələrlə müştəriyə hazır PowerPoint hesabat",
      ],
      chart: "segments",
    },
    {
      slug: "fieldwork-supervision",
      title: "Çoxmərhələli sahə nəzarəti və məlumat validasiyası",
      client: "Telekom müştərisi",
      industry: "Telekom",
      market: "Azərbaycan",
      summary: `${S.fieldworkSupervision.interviewers} müsahibəçidən ibarət sahə komandası üzrə yerində nəzarəti, audio yoxlamanı və sahədən sonrakı məlumat validasiyasını birləşdirən tam keyfiyyət nəzarəti.`,
      metrics: [
        { value: String(S.fieldworkSupervision.interviewers), label: "Nəzarət olunan müsahibəçi" },
        { value: "3 mərhələ", label: "Keyfiyyət nəzarəti qatı" },
        { value: "100%", label: "Qeydiyyatın izlənilməsi" },
      ],
      facts: [
        { label: "Sahə", value: "Telekom" },
        { label: "Əhatə", value: `${S.fieldworkSupervision.interviewers} müsahibəçi` },
        {
          label: "Metod",
          value: "Yerində nəzarət, audio yoxlama və sahədən sonrakı məlumat nəzarəti",
        },
      ],
      objective:
        "Geniş və paylanmış sahə əməliyyatında məlumat keyfiyyətini qorumaq və yekun bazanın müştəri tərəfindən yoxlanışa davam gətirməsini təmin etmək.",
      challenge:
        "Böyük müsahibəçi komandası, müxtəlif məkanlar və sıx sahə qrafiki qeyri-ardıcıl anket idarəsi, natamam keçidlər və aşkarlanmamış cavab şablonları riskini artırırdı.",
      approach:
        "Keyfiyyət nəzarəti sahə işi ilə paralel işləyən üç qatda quruldu ki, problemlər təhlil mərhələsində deyil, müsahibələr davam edərkən aşkarlansın və düzəldilsin.",
      methodology: [
        "Anketin idarə olunmasına və respondent seçiminə yerində nəzarət",
        "Standart qiymətləndirmə vərəqi üzrə strukturlu audio yoxlama",
        "Daxil olan məlumatın sahə ərzində uyğunluq və tamlıq yoxlaması",
        "Şablon cavabların və sürətli doldurmanın aşkarlanması",
        "Keçid və məntiqin anket spesifikasiyası ilə yoxlanması",
        "Düzəlişlərin izlənməsi və müsahibəçi səviyyəsində geri bildirim",
      ],
      analysis:
        "Müsahibəçi səviyyəsində keyfiyyət göstəriciləri bütün sahə boyu izlənildi; bu, hədəflənmiş təkrar təlimə və lazım gəldikdə müsahibələrin təkrar aparılmasına imkan verdi.",
      findings: [
        "Keyfiyyət problemləri az sayda müsahibəçidə cəmləşdi, hədəfli müdaxilə səmərəli oldu",
        "Sahə ərzində aşkarlama sahədən sonra kütləvi istisnaların qarşısını aldı",
        "Erkən müəyyən edilmiş keçid səhvləri əsas modullarda sistemli boşluqları önlədi",
      ],
      implications: [
        "Keyfiyyət nəzarəti yekun mərhələ deyil, paralel proses kimi qurulur",
        "Müsahibəçi göstəriciləri gündəlik sahə idarəetmə aləti kimi istifadə olunur",
        "Müştəri baxışı üçün əsaslandırıla bilən sənədləşmə",
      ],
      deliverables: [
        "Sahə keyfiyyət nəzarəti protokolu",
        "Audio yoxlama qiymətləndirmə qeydləri",
        "Düzəldici tədbirlərlə qeydiyyat jurnalı",
        "Sənədləşdirilmiş, təmizlənmiş və validasiya olunmuş məlumat bazası",
      ],
      chart: "field",
    },
    {
      slug: "satisfaction-questionnaire",
      title: "Aparıcı bank üçün müştəri məmnunluğu anketi",
      client: "Aparıcı bank",
      industry: "Bankçılıq",
      market: "Azərbaycan",
      summary: `CAPI və onlayn formatlar üçün beş moduldan ibarət ${S.satisfactionQuestionnaire.questions} suallıq məmnunluq alətinin hazırlanması və ${S.satisfactionQuestionnaire.pilotSample} müsahibəlik pilotla təkmilləşdirilməsi.`,
      metrics: [
        { value: String(S.satisfactionQuestionnaire.questions), label: "Yekun sual" },
        { value: "5", label: "Ölçmə modulu" },
        { value: `n = ${S.satisfactionQuestionnaire.pilotSample}`, label: "Pilot müsahibə" },
      ],
      facts: [
        { label: "Sahə", value: "Bankçılıq" },
        { label: "Format", value: "CAPI + Onlayn" },
        {
          label: "Yekun anket",
          value: `${S.satisfactionQuestionnaire.modules} modul üzrə ${S.satisfactionQuestionnaire.questions} sual`,
        },
        { label: "Pilot", value: `n = ${S.satisfactionQuestionnaire.pilotSample}` },
      ],
      objective:
        "İki fərqli toplama formatında müqayisə oluna bilən nəticələr verən və bankın xidmət KPI-larına birbaşa uyğunlaşan məmnunluq ölçmə aləti qurmaq.",
      challenge:
        "Qarışıq format effektlər riski yaradır, geniş KPI siyahısı isə respondent yorğunluğuna səbəb ola bilərdi. Alət bütün hesabat tələblərini əhatə edərkən CAPI üçün kifayət qədər qısa qalmalı idi.",
      approach:
        "Hesabat tələbləri modul əsaslı ölçmə çərçivəsinə çevrildi; şkala formatları və sual ifadələri CAPI və onlayn ekvivalentliyi nəzərə alınaraq seçildi.",
      methodology: [
        "Biznes məqsədlərinin və xidmət KPI-larının ölçülə bilən göstəricilərə çevrilməsi",
        "Beş xidmət sahəsi üzrə modul anket arxitekturası",
        "CAPI və onlayn ekvivalentliyi üçün şkala seçimi",
        "Keçid və məntiq spesifikasiyası, yoxlama nöqtələri",
        `n = ${S.satisfactionQuestionnaire.pilotSample} pilot, müddət və anlaşılma təhlili`,
        "Pilotdan sonra ifadə, ardıcıllıq və uzunluğun optimallaşdırılması",
      ],
      analysis:
        "Pilot məlumatı cavabsızlıq, müsahibə müddəti, şkaladan istifadə və anlaşılma problemləri baxımından yoxlandı. Təkrarlanan suallar çıxarıldı, bir sıra ifadələr sadələşdirildi.",
      findings: [
        "Pilot müsahibə müddəti hədəfi aşdı; səbəb az dəyərli bir neçə sual oldu",
        "İki şkala formatı formatlar arasında fərqli istifadə göstərdi və uyğunlaşdırıldı",
        "Modulların ardıcıllığı ümumi məmnunluq cavablarına təsir etdi və hər iki format üçün sabitləşdirildi",
      ],
      implications: [
        "Dalğalar və formatlar arasında izləmə üçün yararlı sabit alət",
        "Hesabat strukturu sahədən əvvəl razılaşdırıldı, təhlil mərhələsi qısaldı",
        "KPI əhatəsini itirmədən respondent yükünün azaldılması",
      ],
      deliverables: [
        "Keçid spesifikasiyası ilə yekun anket",
        "KPI–sual uyğunluq sənədi",
        "Pilot təhlil hesabatı",
        "Təhlil mərhələsi üçün hesabat çərçivəsi",
      ],
      chart: "modules",
    },
  ],
  ru: [
    {
      slug: "shopper-segmentation",
      title: "Сегментация покупателей для ведущей розничной сети",
      client: "Ведущая розничная сеть",
      industry: "Ритейл / FMCG",
      market: "Азербайджан",
      summary: `Количественное исследование, превратившее ${i2100} интервью с покупателями в четыре рабочих сегмента с персонами, анализом драйверов и рекомендациями.`,
      metrics: [
        { value: `n = ${i2100}`, label: "Завершённых интервью" },
        { value: String(S.shopperSegmentation.segments), label: "Рабочих сегмента" },
        { value: "K-means", label: "Кластеризация в SPSS" },
      ],
      facts: [
        { label: "Отрасль", value: "Ритейл / FMCG" },
        { label: "Рынок", value: "Азербайджан" },
        { label: "Выборка", value: `n = ${i2100}` },
        { label: "Метод", value: "K-means кластеризация в SPSS" },
      ],
      objective:
        "Выделить различные группы покупателей в клиентской базе сети и определить, как работать с каждой группой в ассортименте, ценовой коммуникации и опыте в магазине.",
      challenge:
        "У клиента был большой массив транзакционных данных, но не было поведенческой модели для его объяснения. Установочные, поведенческие и демографические переменные требовалось свести к сегментации, статистически устойчивой и достаточно простой для коммерческих команд.",
      approach:
        "Переменные были отобраны и стандартизированы, затем несколько кластерных решений проверены на устойчивость и интерпретируемость. Выбранное решение профилировано по поведению в магазине, структуре корзины и отношению к категориям.",
      methodology: [
        "Отбор переменных, стандартизация и анализ корреляций",
        "K-means в SPSS для решений на 3, 4 и 5 кластеров",
        "Проверка устойчивости на случайных подвыборках",
        "Дискриминантная валидация выбранного решения",
        "Профилирование по демографии, поведению и отношению к категориям",
        "Анализ ключевых драйверов выбора магазина",
      ],
      analysis:
        "Решение из четырёх кластеров дало лучший баланс между статистическим разделением и коммерческой интерпретируемостью. Каждый сегмент профилирован по частоте визитов, составу корзины, ценовой чувствительности и драйверам выбора.",
      findings: [
        "Четыре сегмента с явно различающимися драйверами выбора магазина",
        "Ценовая чувствительность неоднородна: для двух сегментов глубина ассортимента важнее промоактивности",
        "Сегмент, ориентированный на удобство, показал наибольшую частоту визитов при наименьшем чеке",
        "Размер сегментов и вклад в оборот существенно различались, что позволило расставить приоритеты",
      ],
      implications: [
        "Ассортиментная и промостратегия дифференцируются по сегментам, а не только по формату магазина",
        "Коммуникационные приоритеты определены по силе драйверов внутри сегмента",
        "Чёткий приоритет двух сегментов с наибольшим вкладом в оборот",
      ],
      deliverables: [
        "Модель сегментации и файл с распределением по кластерам",
        "Персоны сегментов с таблицами профилирования",
        "Результаты анализа ключевых драйверов",
        "Отчёт PowerPoint с рекомендациями, готовый для клиента",
      ],
      chart: "segments",
    },
    {
      slug: "fieldwork-supervision",
      title: "Многоэтапная супервизия поля и валидация данных",
      client: "Телеком-клиент",
      industry: "Телеком",
      market: "Азербайджан",
      summary: `Сквозной контроль качества для команды из ${S.fieldworkSupervision.interviewers} интервьюеров: супервизия на местах, аудиоконтроль и валидация данных после поля.`,
      metrics: [
        { value: String(S.fieldworkSupervision.interviewers), label: "Интервьюера под контролем" },
        { value: "3 этапа", label: "Слоя контроля качества" },
        { value: "100%", label: "Прослеживаемость журнала" },
      ],
      facts: [
        { label: "Отрасль", value: "Телеком" },
        { label: "Объём", value: `${S.fieldworkSupervision.interviewers} интервьюера` },
        {
          label: "Метод",
          value: "Супервизия на местах, аудиоконтроль и постполевой контроль данных",
        },
      ],
      objective:
        "Обеспечить качество данных в крупной распределённой полевой операции и гарантировать, что финальный массив выдержит проверку со стороны клиента.",
      challenge:
        "Большая команда интервьюеров, разные локации и сжатое полевое окно создавали риск непоследовательного проведения интервью, незавершённых переходов и незамеченных шаблонов ответов.",
      approach:
        "Контроль качества выстроен в три слоя, работающих параллельно с полем, чтобы проблемы выявлялись и исправлялись во время интервью, а не на этапе анализа.",
      methodology: [
        "Супервизия проведения интервью и отбора респондентов на местах",
        "Структурированный аудиоконтроль по стандартному оценочному листу",
        "Проверки согласованности и полноты поступающих данных",
        "Выявление шаблонных ответов и ускоренного заполнения",
        "Проверка логики и переходов по спецификации анкеты",
        "Журнал ошибок с контролем исправлений и обратной связью интервьюерам",
      ],
      analysis:
        "Показатели качества отслеживались на уровне каждого интервьюера, что позволило точечно проводить переобучение и при необходимости заменять затронутые интервью.",
      findings: [
        "Проблемы качества концентрировались у меньшинства интервьюеров — точечное вмешательство оказалось эффективным",
        "Выявление в поле избавило от массовых исключений после его завершения",
        "Раннее обнаружение ошибок логики предотвратило системные пропуски в ключевых модулях",
      ],
      implications: [
        "Контроль качества как параллельный процесс, а не финальная проверка",
        "Показатели по интервьюерам как рабочий инструмент управления полем",
        "Прозрачный аудиторский след для проверки клиентом",
      ],
      deliverables: [
        "Протокол контроля качества полевых работ",
        "Записи оценок аудиоконтроля",
        "Журнал ошибок с корректирующими действиями",
        "Проверенный и очищенный массив с документацией",
      ],
      chart: "field",
    },
    {
      slug: "satisfaction-questionnaire",
      title: "Анкета удовлетворённости клиентов для ведущего банка",
      client: "Ведущий банк",
      industry: "Банки",
      market: "Азербайджан",
      summary: `Разработка инструмента удовлетворённости из ${S.satisfactionQuestionnaire.questions} вопросов в пяти модулях для смешанного формата CAPI и онлайн, доработанного по итогам пилота на ${S.satisfactionQuestionnaire.pilotSample} интервью.`,
      metrics: [
        {
          value: String(S.satisfactionQuestionnaire.questions),
          label: "Вопроса в финальной анкете",
        },
        { value: "5", label: "Модулей измерения" },
        { value: `n = ${S.satisfactionQuestionnaire.pilotSample}`, label: "Пилотных интервью" },
      ],
      facts: [
        { label: "Отрасль", value: "Банки" },
        { label: "Формат", value: "CAPI + онлайн" },
        {
          label: "Финальная анкета",
          value: `${S.satisfactionQuestionnaire.questions} вопроса в ${S.satisfactionQuestionnaire.modules} модулях`,
        },
        { label: "Пилот", value: `n = ${S.satisfactionQuestionnaire.pilotSample}` },
      ],
      objective:
        "Создать инструмент измерения удовлетворённости, дающий сопоставимые результаты в двух форматах сбора и напрямую связанный с сервисными KPI банка.",
      challenge:
        "Смешанный формат создаёт риск эффектов метода, а обширный список KPI — риск утомления респондента. Анкета должна была оставаться достаточно короткой для CAPI, покрывая все требования отчётности.",
      approach:
        "Требования отчётности переведены в модульную систему измерений; форматы шкал и формулировки подобраны с учётом эквивалентности CAPI и онлайн.",
      methodology: [
        "Перевод бизнес-целей и сервисных KPI в измеримые конструкты",
        "Модульная архитектура анкеты по пяти сервисным зонам",
        "Подбор шкал с проверкой эквивалентности форматов",
        "Спецификация логики и переходов с контрольными точками",
        `Пилот n = ${S.satisfactionQuestionnaire.pilotSample} с анализом длительности и понимания`,
        "Оптимизация формулировок, порядка и длины после пилота",
      ],
      analysis:
        "Данные пилота проверены на неответы, длительность интервью, использование шкал и проблемы понимания. Избыточные вопросы удалены, часть формулировок упрощена.",
      findings: [
        "Длительность пилотного интервью превысила целевую из-за небольшого числа малоинформативных вопросов",
        "Два формата шкал использовались по-разному в разных режимах и были унифицированы",
        "Порядок модулей влиял на общую оценку удовлетворённости и был зафиксирован для обоих форматов",
      ],
      implications: [
        "Устойчивый инструмент для трекинга по волнам и форматам",
        "Структура отчётности согласована до поля, что сократило этап анализа",
        "Снижение нагрузки на респондента без потери покрытия KPI",
      ],
      deliverables: [
        "Финальная анкета со спецификацией логики",
        "Документ соответствия KPI и вопросов",
        "Отчёт по итогам пилота",
        "Структура отчётности для этапа анализа",
      ],
      chart: "modules",
    },
  ],
};

export const getCase = (locale: Locale, slug: string) =>
  CASE_STUDIES[locale].find((c) => c.slug === slug);
