import { useState } from "react";
import "./App.css";
import { styles } from "./styles";
import styled from 'styled-components';

function AddForm({users, setUsers}) {
  const [user, setUser] = useState({ name: "", email: "" });
  let [active, setActive] = useState(false)

  const addUser = (ev) => {
    ev.preventDefault();
    let newArr = [...users];
    console.log(user)
    newArr.push({ ...user });
    setTimeout(() => {
      setUsers(newArr);
    },2000)
  };

  return (
    <FormElement active={active}>
        <button onClick={() => setActive(!active)}>CHANGE THEME</button>
    
      <Form active={active} onSubmit={addUser}>
        <input
          type="text"
          onChange={(ev) => {
            setUser({ ...user, name: ev.target.value })
            console.log(user)
          }}
        />
        <input
          type="text"
          onChange={(ev) => {
            setUser({ ...user, email: ev.target.value })
            console.log(user)
          }}        />
        <button>add</button>
      </Form>
    </FormElement >
  );
}

export default AddForm;

const FormElement = styled.div`
   background-color: ${(props) => props.active ? 'red' : 'blue'}
`

const Form = styled.form((props) => ({
    backgroundColor: props.active ? 'red' : 'blue'
}))