import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/ru';

dayjs.extend(advancedFormat);
dayjs.locale('ru');
dayjs.extend(customParseFormat);
dayjs.extend(localeData);

export { dayjs };
export type { ConfigType, Dayjs } from 'dayjs';
