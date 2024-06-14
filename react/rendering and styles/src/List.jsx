import { useState } from "react";
import "./App.css";

function List({users}) {

  if (users.length === 0) {
    return <h1>ARRAY IS EMPTY</h1>;
  }

  return (
    <div>
      {/* <button onClick={() => setShowModal(!showModal)}>{showModal ? "HIDE" : "SHOW"}</button>
      {showModal ||
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, blanditiis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, blanditiis.</p>
      </div>} */}
    
        <ul>
          {users.map((item, index) => {
            return (
              <li key={index}>
                <p>{item.name}</p>
                <p>{item.email}</p>
              </li>
            );
          })}
        </ul>
    </div>
  );
}

export default List;
