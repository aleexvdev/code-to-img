import { Navbar } from "@/components/Navbar";
import { LanguageSelector } from "@/components/common/LanguageSelector";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { ThemeSelector } from "@/components/common/ThemeSelector";

export default function Home() {
  return (
    <main className="bg-[#0D0D0D] dark:bg-primary min-h-screen">
      <Navbar />
      <section className="h-full">
        <MaxWidthWrapper>
          <div className="bg-[#191919] rounded-lg w-full p-5 flex items-center gap-x-5">
            <LanguageSelector />
            <ThemeSelector />
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
