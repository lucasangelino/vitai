import Card from "../Card";

export default function FilesPannel({ testFiles }) {
  return (
    <div className="flex-grow-0 mr-10 scroll-m-20 text-xl font-semibold tracking-tight">
      <h3>Test Files</h3>
      <ul className="flex flex-col gap-2">
        {testFiles.map((file) => (
          <li key={file.id}>
            <Card file={file} />
          </li>
        ))}
      </ul>
    </div>
  );
}
