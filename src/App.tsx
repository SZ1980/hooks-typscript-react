import { useState } from "react";

interface User {
  id: number;
  userName: string;
}

function App() {
  const [count, setCount] = useState<number>();
  const [users, setUsers] = useState<User[] | null>(null);
  return (
    <>
      <div>
        <h1>Hello!</h1>
      </div>
    </>
  );
}

export default App;
