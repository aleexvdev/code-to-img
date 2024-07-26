import { CodeColorSelector } from "@/components/CodeColorSelector";
import { LanguageSelector } from "@/components/LanguageSelector";
import { PaddingSelector } from "@/components/PaddingSelector";
import { RadiusSelector } from "@/components/RadiusSelector";
import { ThemeSelector } from "@/components/ThemeSelector";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Navbar } from "@/components/common/Navbar/Navbar";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="bg-[#0D0D0D] dark:bg-primary min-h-screen relative">
      <Navbar />
      <Sidebar />
      {/* <section className="h-full mt-5 w-full">
        <MaxWidthWrapper>
          <div className="w-full flex items-center justify-start gap-5">
            <div className="w-1/2">
              <h3 className="text-white text-lg">Frame</h3>
              <div className="flex flex-wrap items-center justify-start gap-5 mt-5">
                <PaddingSelector />
                <RadiusSelector />
                <PaddingSelector />
                <PaddingSelector />
              </div>
            </div>
            <div>
              <h3>Editor</h3>
            </div>
          </div>
        </MaxWidthWrapper>
      </section> */}
    </main>
  );
}
