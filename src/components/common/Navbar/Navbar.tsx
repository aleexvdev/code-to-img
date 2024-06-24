import Link from "next/link";
import { MaxWidthWrapper } from "../MaxWidthWrapper";

export const Navbar = () => {
  return (
    <nav className="px-4 h-20">
      <MaxWidthWrapper className="h-full">
        <ul className="w-full h-full flex items-center justify-between">
          <li className="font-semibold text-xl">
            <Link href="/" className="text-white">
              Code<span className="text-blue-400">To</span>
              <span className="text-blue-500">Image</span>
            </Link>
          </li>
          <li className="font-semibold text-xl">
            <Link href="/blog" className="text-white">Info.</Link>
          </li>
        </ul>
      </MaxWidthWrapper>
    </nav>
  );
};
