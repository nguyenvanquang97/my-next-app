"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import LanguageLink from './LanguageLink';

export default function Header() {
  
  const t = useTranslations('common');
  const [userName, setUserName] = useState(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {

    // Giả sử bạn có một hàm kiểm tra trạng thái đăng nhập
    const checkLoginStatus = async () => {
      const storedUser = await localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);

        console.log("user: ", user);
        setUserName(user.name);
      }
    };

    checkLoginStatus();
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header className="absolute top-0 left-0 right-0 py-4 shadow-sm p-4 ">
      <div className=" w-full px-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/svg/logo.svg"
              alt="Jadoo"
              width={115}
              height={34}
            />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/destinations"
              className="text-gray-700 hover:text-[#DF6951] transition-colors"
            >
              {t('destinations')}
            </Link>
            <Link
              href="/hotels"
              className="text-gray-700 hover:text-[#DF6951] transition-colors"
            >
              {t('hotels')}
            </Link>
            <Link
              href="/flights"
              className="text-gray-700 hover:text-[#DF6951] transition-colors"
            >
              {t('flights')}
            </Link>
            <Link
              href="/bookings"
              className="text-gray-700 hover:text-[#DF6951] transition-colors"
            >
              {t('bookings')}
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div  className="flex items-center space-x-4 ">
            {userName ? (
              <div style={{}}>
                <span
                  className="text-gray-700 cursor-pointer"
                  onClick={handleMenuOpen}
                >
                  {t('welcome', { name: userName })}
                </span>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <MenuItem onClick={handleLogout}>{t('logout')}</MenuItem>
                </Menu>
              </div>
            ) : (
              <div className="flex gap-5 items-center">
                <LanguageLink href="/login">
                  <button className="text-gray-700 hover:text-[#DF6951] transition-colors">
                    {t('login')}
                  </button>
                </LanguageLink>
                <LanguageLink href="/register">
                  <button className="bg-[#DF6951] text-white px-6 py-2 rounded-lg hover:bg-[#c85941] transition-colors">
                    {t('signup')}
                  </button>
                </LanguageLink>
               
              </div>
            )}
             <LanguageSwitcher />
          </div>
    
        </div>
      </div>
    </header>
  );
}
