import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
            <Link href="/login">
              <button className="text-gray-700 hover:text-[#DF6951] transition-colors">
                Login
              </button>
            </Link>
            <button className="bg-[#DF6951] text-white px-6 py-2 rounded-lg hover:bg-[#c85941] transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
