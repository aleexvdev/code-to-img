import { Navbar } from "@/components/common/Navbar/Navbar";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";
import { CodeEditor } from "@/components/Editor/CodeEditor";

export default function Home() {
  return (
    <div className="w-screen dark:bg-primary min-h-screen flex flex-col bg-[#121212]">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-72 h-min-screen">
          <Sidebar />
        </div>
        <div className="w-full">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}
// bg-[#121212]
