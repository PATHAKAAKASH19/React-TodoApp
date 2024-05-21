import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import {useState, useEffect} from "react"

function App() {
 
  const [todos, setTodos] = useState([])
  const [todoValue , setTodoValue] = useState("") 

  function persistData(newList) {
    console.log(JSON.stringify({todos:[newList]}))
    localStorage.setItem("todos" , JSON.stringify({todos:[newList]}) )
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(...newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
        const  newTodoList = todos.filter((todo, todoIndex) => {
        return todoIndex !== index
    })
    persistData(...newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
      const valueTOBeEdited = todos[index]
      setTodoValue(valueTOBeEdited)
      handleDeleteTodo(index)


  }

  useEffect(() => {

    if(!localStorage) {
    
      return 
    }

    let localTodos = localStorage.getItem("todos")

    if(!localTodos) {
      return
    }

    const parsedLocalTodos = JSON.parse(localTodos).todos
    console.log(JSON.parse(localTodos).todos)
   
    setTodos( parsedLocalTodos)
  }, [])
  
  return (
    <>
     <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
     <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
