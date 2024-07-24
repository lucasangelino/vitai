const getFileContent = async (file) => {
  const res = await fetch(`http://localhost:3001/content?file=${file}`);
  const data = await res.text();
  return data;
};

export { getFileContent };
