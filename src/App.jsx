import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:4001");

function App() {
  const [user, setUser] = useState("");
  const [test, setTest] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      setUser(socket.id);
      console.log(`Local user connected: ${socket.id}`);
    });

    socket.on("onFinished", (data) => {
      setTest(data);
      console.log(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <main>
      <h1>Vitai</h1>
      <h2>{socket.id}</h2>
      <pre>
        <code>{JSON.stringify(test, null, 2)}</code>
      </pre>
    </main>
  );
}

export default App;
