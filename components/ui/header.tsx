"use client";

import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import HeroImage from "@/public/images/erdeme-logo.png";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto rounded-lg"
                src={HeroImage}
                width={76}
                height={76}
                alt="Hero"
              />
            </Link>
          </div>

          {/* Pre-order button - only shown on homepage */}
          <div className="flex-1 flex justify-end">
            {isHomePage && (
              <Link
                href="/pre-order"
                className="btn-sm text-white bg-purple-600 hover:bg-purple-700 rounded-lg ml-3"
              >
                Багшаар бүртгүүлэх
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
