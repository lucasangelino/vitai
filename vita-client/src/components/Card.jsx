import { getFileContent } from "../api/api.js";

export default function Card({ file, status = "passed" }) {
  const fileName = file.split("\\").pop();

  const handleClick = () => {
    getFileContent(file);
  };
  return (
    <button className="w-full" onClick={handleClick}>
      <section className="flex flex-col border border-zinc-200 rounded-md p-2">
        <header className="flex flec-row gap-4 justify-between items-center">
          <h3 className="text-zinc-700 text-sm font-semibold">{fileName}</h3>
          <span className="text-xs px-1 border border-green-500 text-green-900 bg-green-200 rounded-md">
            {status}
          </span>
        </header>
      </section>
    </button>
  );
}

{
  /* <span className="text-xs px-1 border border-green-500 text-green-900 bg-green-200 rounded-md">
  {status}
</span>; */
}

{
  /* <p className="text-xs text-red-400 p-1">
Fatal error: Uncaught Error: Call to undefined function mysql_connect()
</p> */
}
