import { useContext } from "react"
import { MyContext } from "./App"
import User from "./User"

function MainComp() {
    let {
        colorBack,
        handleAdding,
        handleInputs,
        deleteUser,
        obj,
        setObj,
        search,
        select,
        departments,
        arr,
        setSelect,
        setSearch
    } = useContext(MyContext)

    return (
        <main>
            <input type="text" placeholder='SEARCH' onChange={(ev) => setSearch(ev.target.value)} />
            <select onChange={(ev) => setSelect(ev.target.value)}>
                {departments.map((item) => <option value={item}>{item}</option>)}
            </select>
            <form onSubmit={handleAdding}>
                <input name='name' type="text" onChange={handleInputs} />
                <input name='username' onChange={handleInputs} type="text" />
                <input name='email' onChange={handleInputs} type="email" />
                <button>ADD</button>
            </form>
            <button onClick={() => setColor('red')}>RED</button>
            <button onClick={() => setColor('blue')}>BLUE</button>
            <button onClick={() => setColor('black')}>BLACK</button>
            <ul>
                {
                    arr.filter((item) => item.name.startsWith(search) && item.department === select).map((item, index) =>
                        <User
                            index={index}
                            deleteUser={deleteUser}
                            key={item.id}
                            {...item} />)
                }
            </ul>
        </main>
    )
}

export default MainComp
