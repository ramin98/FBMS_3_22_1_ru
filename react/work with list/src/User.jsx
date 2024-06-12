function User({username,name, email, deleteUser, index}) {
    return (
        <li>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <button onClick={() => deleteUser(index)}>X</button>
        </li>
    )
}

export default User