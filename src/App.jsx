import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState();
    const [nextId, setNextId] = useState(0);

    function addTodo() {
        if (!todoInput) {
            return;
        }
        const newTodoObject = {
            title: todoInput,
            done: false,
            id: nextId,
        };
        const newTodos = [...todos, newTodoObject];
        setTodos(newTodos);
        setTodoInput("");
        setNextId(nextId + 1);
    }

    function toggleTodoDone(id) {
        console.log(id);
        const newTodos = [...todos];
        newTodos[newTodos.findIndex((x) => x.id == id)].done =
            !newTodos[newTodos.findIndex((x) => x.id == id)].done;
        setTodos(newTodos);
    }

    function deleteTodo(id) {
        console.log(id);
        const newTodos = [...todos];
        newTodos.splice(
            newTodos.findIndex((x) => x.id == id),
            1
        );
        setTodos(newTodos);
    }

    return (
        <div className="App">
            <label htmlFor="todoInput"> New Todo:</label>
            <input
                value={todoInput}
                type="text"
                name="todoInput"
                id="todoInput"
                onChange={(e) => setTodoInput(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <div className="todos">
                {todos.map((todo) => {
                    {
                        return (
                            <TodoItem
                                title={todo.title}
                                done={todo.done}
                                key={todo.id}
                                id={todo.id}
                                toggleTodoDone={toggleTodoDone}
                                deleteTodo={deleteTodo}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default App;
