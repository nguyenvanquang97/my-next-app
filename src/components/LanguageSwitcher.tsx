'use client';

import { useLocale } from 'next-intl';
import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Language as LanguageIcon } from '@mui/icons-material';
import { usePathname, useRouter } from '@/i18n/navigation';




export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLocale: string) => {
    console.log('newLocale: ', newLocale);
    console.log("router: ", router);
    console.log("pathname: ", pathname);
    router.replace(pathname,{locale: newLocale});
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        style={{ color: '#666', textTransform: 'none' }}
      >
        {locale === 'vi' ? 'Tiếng Việt' : 'English'}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleLanguageChange('vi')}
          selected={locale === 'vi'}
        >
          Tiếng Việt
        </MenuItem>
        <MenuItem
          onClick={() => handleLanguageChange('en')}
          selected={locale === 'en'}
        >
          English
        </MenuItem>
      </Menu>
    </div>
  );
}