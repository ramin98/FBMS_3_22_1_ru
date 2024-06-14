import { useState } from "react";
import "./App.css";
import AddForm from "./AddForm";
import List from "./List";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="app">
        <button onClick={() => setShowModal(true)}>SHOW</button>
      {showModal &&
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, blanditiis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, blanditiis.</p>
        <button onClick={() => setShowModal(false)}>HIDE</button>
      </div>}
      <AddForm users={users} setUsers={setUsers}/>
      <List users={users}/>
    </div>
  );
}

export default App;
