"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, MenuItem } from "@mui/material";

export default function Header() {
  const [userName, setUserName] = useState(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    console.log("xxxx");
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
    <header className="absolute top-0 left-0 right-0 py-4 shadow-sm p-4">
      <div className="container mx-auto px-4">
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
              Destinations
            </Link>
            <Link
              href="/hotels"
              className="text-gray-700 hover:text-[#DF6951] transition-colors"
            >
              Hotels
            </Link>
            <Link
              href="/flights"
              className="text-gray-700 hover:text-[#DF6951] transition-colors"
            >
              Flights
            </Link>
            <Link
              href="/bookings"
              className="text-gray-700 hover:text-[#DF6951] transition-colors"
            >
              Bookings
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {userName ? (
              <div style={{}}>
                <span
                  className="text-gray-700 cursor-pointer"
                  onClick={handleMenuOpen}
                >
                  {`Welcome, ${userName}`}
                </span>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <div className="flex gap-5 items-center">
                <Link href="/login">
                  <button className="text-gray-700 hover:text-[#DF6951] transition-colors">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="bg-[#DF6951] text-white px-6 py-2 rounded-lg hover:bg-[#c85941] transition-colors">
                    Sign up
                  </button>
                </Link>
              </div>
            )}
          </div>
    
        </div>
      </div>
    </header>
  );
}
