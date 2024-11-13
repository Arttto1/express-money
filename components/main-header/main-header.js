import Image from "next/image";
import Link from "next/link";

import NavBar from "./responsive-nav";

export default function MainHeader() {
  return (
    <header className="bg-customDarkBlue mb-8">
      <div className="w-full">
        <div className="flex justify-between items-center mx-auto max-w-[90vw] md:max-w-80vw">
          <Link
            className="flex justify-center items-center font-bold text-2xl"
            href="/"
          >
            <Image
              src="/logo/express-money.png"
              alt="Express Money Logo"
              width={300}
              height={100}
              priority
              className="w-60"
            />
          </Link>
          <NavBar />
        </div>
      </div>
    </header>
  );
}
