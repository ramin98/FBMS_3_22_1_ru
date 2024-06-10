export function PlusArr({setArr}) {
  
  const func = () => {
    setArr((arrState) => [...arrState, arrState.at(-1) + 1])
  }

  return (
    <div>
      <button onClick={func}>ADD</button>
      {/* <button onClick={() => { 
        array.push(array.at(-1) + 1)
        console.log(array)
        }}>ADD</button> */}
    </div>
  )
}

export default PlusArr