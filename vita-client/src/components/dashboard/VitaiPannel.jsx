import Editor from "@monaco-editor/react";

export default function VitaiPannel() {
  return (
    <div className="flex-grow scroll-m-20 text-xl font-semibold tracking-tight">
      <h3>
        Vitai
        <span className="text-xs font-bold px-2">Powered by Vercel</span>
      </h3>
      <div>
        <textarea
          name="ai-input"
          id="ai-input"
          placeholder="To improve the test result quality, please provide a detailed description of the test case."
          className="resize-none bg-zinc-100 rounded-md border border-zinc-200 p-2 w-full h-20 text-sm"
        ></textarea>
        <button className="w-full bg-zinc-800 text-zinc-100 p-1 rounded-md">
          Test with AI
        </button>
      </div>
      <div>
        <Editor
          height="20vh"
          width={800}
          defaultLanguage="javascript"
          defaultValue="windows.alert('Hello, World!');"
          minimap={{ enabled: false }}
          className="rounded-md border border-zinc-200 p-2"
        />
      </div>
    </div>
  );
}
