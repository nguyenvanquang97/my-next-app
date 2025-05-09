import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/assets/svg/logo.svg"
                alt="Jadoo"
                width={115}
                height={34}
              />
            </Link>
            <p className="text-[#5E6282] mb-4">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-[#181E4B] mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[#5E6282] hover:text-[#DF6951] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#5E6282] hover:text-[#DF6951] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/mobile"
                  className="text-[#5E6282] hover:text-[#DF6951] transition-colors"
                >
                  Mobile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-[#181E4B] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-[#5E6282] hover:text-[#DF6951] transition-colors"
                >
                  Help/FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-[#5E6282] hover:text-[#DF6951] transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliates"
                  className="text-[#5E6282] hover:text-[#DF6951] transition-colors"
                >
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-[#181E4B] mb-4">Social</h3>
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.facebook.com"
                className="w-10 h-10 rounded-full bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#080809] transition-colors group"
              >
                <Image
                  src="/assets/icons/facebook-icon.svg"
                  alt="Facebook"
                  width={7}
                  height={13}
                  className="group-hover:brightness-0 group-hover:invert transition-all"
                />
              </Link>
              <Link
                href="https://www.instagram.com"
                className="w-10 h-10 rounded-full bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#080809] transition-colors group"
              >
                <Image
                  src="/assets/icons/instagram-icon.svg"
                  alt="Instagram"
                  width={16}
                  height={16}
                  className="group-hover:brightness-0 group-hover:invert transition-all"
                />
              </Link>
              <Link
                href="https://www.twitter.com"
                className="w-10 h-10 rounded-full bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#080809] transition-colors group"
              >
                <Image
                  src="/assets/icons/twitter-icon.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="group-hover:brightness-0 group-hover:invert transition-all"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-[#5E6282]">
          <p>&copy; {new Date().getFullYear()} Jadoo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
