import { CodeEditorContent } from "@/components/CodeEditor/CodeEditorContent";
import { Navbar } from "@/components/common/Navbar/Navbar";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#181818] overflow-hidden scroll">
      <Navbar />
      <div className="w-full flex min-h-0 h-full relative">
        <Sidebar />
        <CodeEditorContent />
      </div>
    </div>
  );
}
