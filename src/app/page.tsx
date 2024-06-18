import { Navbar } from "@/components/Navbar";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";

export default function Home() {
  return (
    <main className="bg-primary dark:bg-primary min-h-screen">
      <Navbar />
      <section>
        <MaxWidthWrapper>
          languajes
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
