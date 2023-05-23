import { useState, useEffect, useCallback } from "react";

interface User {
  id: number;
  userName: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("mounting");
    console.log("users :", users);

    return () => {
      console.log("unmounting");
    };
  }, [users]);

  const addTwo = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <>
      <div className="app">
        <h1>{count}</h1>
        <button onClick={addTwo}>Click Button</button>
      </div>
    </>
  );
}

export default App;
