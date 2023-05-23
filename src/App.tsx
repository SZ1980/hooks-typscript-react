import { useState, useEffect } from "react";

interface User {
  id: number;
  userName: string;
}

function App() {
  const [count, setCount] = useState<number>();
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("mounting");
    console.log("users :", users);

    return () => {
      console.log("unmounting");
    };
  }, [users]);

  return (
    <>
      <div>
        <h1>Hello!</h1>
      </div>
    </>
  );
}

export default App;
