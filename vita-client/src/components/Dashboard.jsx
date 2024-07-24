import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import VitaiPannel from "./dashboard/VitaiPannel";
import EditorPannel from "./dashboard/EditorPannel";
import FilesPannel from "./dashboard/FilesPannel";

function Dashboard() {
  const [testFiles, setTestFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const getTestFiles = async () => {
      const res = await fetch("http://localhost:3001/files");
      const data = await res.json();
      setTestFiles(data);
      setSelectedFile(data[0]);
    };
    getTestFiles();
  }, []);

  return (
    <>
      <header>
        <div class="mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="w-full flex gap-4">
            <FilesPannel
              testFiles={testFiles}
              setSelectedFile={setSelectedFile}
            />
            <EditorPannel selectedFile={selectedFile} />
            <VitaiPannel />
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
