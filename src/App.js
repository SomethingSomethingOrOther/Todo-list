import { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [editInputValue, setEditInputValue] = useState("")
  const [todosArray, setTodosArray] = useState([])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const addToList = (value) => {
    const newTodosArray = [...todosArray, value]
    if (inputValue !== "" && !todosArray.includes(inputValue)) {
      setTodosArray(newTodosArray)
      setInputValue("") 
    }
  }

  const cancelCurrentInput = () => {
    setInputValue("")
  }

  const removeFromList = (index) => {
    const newTodosArray = todosArray.filter((_, i) => i !== index)
    setTodosArray(newTodosArray)
  }

  const handleEdit = (index) => {
    setEditInputValue(todosArray[index])
    removeFromList(index)

  }

  const updateTodo = (index) => {
    const newTodosArray = [...todosArray]
    newTodosArray.splice(index, 0, editInputValue)
    setTodosArray(newTodosArray)
    setEditInputValue("") 
  }

  return (
    <div className="App">
      <div>
        <h1>
          Todo List
        </h1>
      </div>
      <div>

        {editInputValue ? (
        <input 
          placeholder="Edit your todo..."
          name="editinputvalue"
          type="text"
          value={editInputValue}
          onChange={(e) => setEditInputValue(e.target.value)}
        />):(<input placeholder="Write a goal..."
        name="inputvalue"
        value={inputValue}
        onChange={handleInputChange}
        type="text"
      />)
      }
        <div>
          <button onClick={() => addToList(inputValue)}>Add</button>{" "}
          <span><button onClick={cancelCurrentInput}>Cancel</button></span>
          <button onClick={updateTodo} style={{ display: editInputValue ?  "inline-block": "none" }}>Update</button>
        </div>
      </div>
      <div className="list">
        {
          todosArray.map((todo, i) => (
            <div key={i}>
              <p>{todo}</p>
              <button onClick={() => handleEdit(i)}>Edit</button>{" "}
              <span><button onClick={() => removeFromList(i)}>Delete</button></span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;