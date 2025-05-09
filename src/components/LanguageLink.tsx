
import { useLocale } from 'next-intl';
import Link, { LinkProps } from 'next/link';

import React from 'react';

interface LanguageLinkProps extends LinkProps {
  children: React.ReactNode;
}

const LanguageLink: React.FC<LanguageLinkProps> = ({ children, ...props }) => {
  const locale = useLocale();


  // Tạo đường dẫn mới với tiền tố ngôn ngữ
  const hrefWithLocale = `/${locale}${props.href}`;

  return (
    <Link {...props} href={hrefWithLocale}>
      {children}
    </Link>
  );
};

export default LanguageLink;