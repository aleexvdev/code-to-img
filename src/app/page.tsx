import { Navbar } from "@/components/common/Navbar/Navbar";
import { CodeEditor } from "@/components/CodeEditor/CodeEditor";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#121212] overflow-hidden scroll">
      <Navbar />
      <div className="w-full flex min-h-0 h-full relative">
        <Sidebar />
        {/* <CodeEditor /> */}
      </div>
    </div>
  );
}
/*
<div className="flex flex-1 relative">
        <div className="w-80 h-min-screen relative">
          <Sidebar />
        </div>
        <div className="w-full mr-4 mb-4">
      <CodeEditor />
          </div>
          </div>
*/