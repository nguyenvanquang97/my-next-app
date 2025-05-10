import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // Danh sách các ngôn ngữ được hỗ trợ
  locales: ['en', 'vi'],
  
  // Ngôn ngữ mặc định
  defaultLocale: 'vi',

  // Lưu trữ ngôn ngữ đã chọn trong cookie
  // localePrefix: 'as-needed'
});