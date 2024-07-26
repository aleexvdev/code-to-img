import Link from "next/link";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { Download, Info } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="absolute w-full z-20 px-4 h-20 bg-[#191919]">
      <MaxWidthWrapper>
        <div className="w-full h-full flex items-center justify-between">
          <div className="font-semibold text-2xl">
            <Link href="/" className="text-white">
              Code<span className="text-blue-400">To</span>
              <span className="text-blue-500">Image</span>
            </Link>
          </div>
          <div className="flex items-center justify-end gap-10">
            <div className="font-semibold text-sm">
              <button className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-[#404040] text-white">
                <Info size={20} /> Info
              </button>
            </div>
            <div className="font-semibold text-sm">
              <button className="flex items-center gap-3 bg-blue-600 rounded-lg py-2 px-3 text-white">
                <Download />
                Export Image
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
