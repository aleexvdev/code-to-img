import { LanguageSelector } from "@/components/LanguageSelector";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Navbar } from "@/components/common/Navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-[#0D0D0D] dark:bg-primary min-h-screen">
      <Navbar />
      <section className="h-full">
        <MaxWidthWrapper>
          <div className="bg-[#191919] rounded-lg w-full p-5 flex items-center gap-x-5">
            <LanguageSelector />
            {/* <CodeColorsSelector /> */}
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
