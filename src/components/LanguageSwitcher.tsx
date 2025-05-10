'use client';

import { useLocale } from 'next-intl';
import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Language as LanguageIcon } from '@mui/icons-material';
import { usePathname, useRouter } from '@/i18n/navigation';

interface MenuItemType {
  locale: string;
  label: string;
  flagSrc: string;
}

const menuItems: MenuItemType[] = [
  {
    locale: 'vi',
    label: 'Tiếng Việt',
    flagSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png'
  },
  {
    locale: 'en',
    label: 'English',
    flagSrc: 'https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg'
  }
];



export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<MenuItemType>(
    menuItems.find((item) => item.locale === locale) || menuItems[0]
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLocale: string) => {
    setSelectedLanguage(
      menuItems.find((item) => item.locale === newLocale) || menuItems[0]
    );
    router.replace(pathname,{locale: newLocale});
    handleClose();
  };


  
  return (
    <div>
      <Button
        onClick={handleClick}
        startIcon={<img src={selectedLanguage.flagSrc} alt='Language Flag' style={{ width: '20px', marginRight: '8px' }} />}
        style={{ color: '#666', textTransform: 'none' }}
      >
        {locale === 'vi' ? 'Tiếng Việt' : 'English'}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.locale}
            onClick={() => handleLanguageChange(item.locale)}
            selected={locale === item.locale}
          >
            <img src={item.flagSrc} alt={`${item.label} Flag`} style={{ width: '20px', marginRight: '8px' }} />
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}