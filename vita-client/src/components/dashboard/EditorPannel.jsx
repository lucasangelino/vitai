import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

const codeString =
  'import { describe, test, expect } from \\"vitest\\";\r\n\r\\ndescribe(\\"App\\", () => {\\r\\n  test(\\"should render correctly\\", () => {\\r\\n    expect(true).toBe(true);\\r\\n  });\\r\\n});\\r\\n';

export default function EditorPannel({ selectedFile }) {
  console.log(selectedFile);
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    const getFileContent = async () => {
      const res = await fetch(`http://localhost:3001/content/${selectedFile}`);
      const data = await res.text();
      setFileContent(data);
    };
    getFileContent();
  }, [selectedFile]);

  return (
    <div className="flex-grow scroll-m-20 text-xl font-semibold tracking-tight">
      <h3>Current File Content</h3>
      <Editor
        height="80vh"
        width={800}
        path={selectedFile}
        defaultLanguage="javascript"
        defaultValue={codeString}
        className="rounded-md border border-zinc-200 p-2"
        loading={"Cargando..."}
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          wordWrap: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}
