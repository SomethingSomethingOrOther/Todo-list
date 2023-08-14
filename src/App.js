import './App.css';
import {useState} from "react"



function App() {
  const [inputValue,setInputValue]=useState("")
  const [todosArray,setTodosArray] = useState([])

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }
   const addToList=(value)=>{
    const newTodosArray=[...todosArray,value]
      if (inputValue !==""&& !todosArray.includes(inputValue)){

        setTodosArray(newTodosArray)
      }
}


const cancelCurrentInput=()=>{
  setInputValue("")
}

const removeFromList=(value)=>{
  const newTodosArray= todosArray.filter((todo)=>{
    return todo.id  !== value.id
  })
  setTodosArray(newTodosArray)
}




  return (
    <div className="App">
       <div>
        <h1>
          Todo List
        </h1>
       </div>
       <div>
        <input value={inputValue} 
        onChange={handleInputChange} 
        type="text" />
        <div>
          <button onClick={()=>addToList(inputValue)}>Add</button> {" "} 
          <span><button onClick={cancelCurrentInput}>Cancel</button></span>
          <button style={{display:"none"}}>Update</button>
        </div>
       </div>
       <div className="list">
            {
              todosArray.map((todo,i)=>(
                <>
                  <p key={todo.id}>{todo}</p>
                  <button>Edit</button> {" "}
                  <span><button onClick={()=>removeFromList(i)}>Delete</button></span>
                </>
              ))
            }
       </div>
    </div>
  );
}

export default App;
