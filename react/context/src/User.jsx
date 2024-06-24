import { useContext, useState } from "react"
import styled from "styled-components"
import { MyContext } from "./App"

function User({name, department, position, index}) {
    let {colorBack,a,b} = useContext(MyContext)

    return (
        <li>
            <Name color={colorBack}>{name}</Name>
            <p>{department}</p>
            <Position>{position}</Position>
            <button onClick={() => deleteUser(index)}>X</button>
        </li>
    )
}

export default User

const Name = styled.p`
background-color:${(props) => props.color};
`
const Position = styled.p({
    backgroundColor: 'red'
})