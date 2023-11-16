import React, { useEffect, useState } from "react";
import {
  getData,
  createData,
  deleteData,
  updateData,
} from "../common/service_api";

interface Todo {
  id: string;
  name: string;
  status: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodo();
  }, []);

  async function fetchTodo() {
    try {
      const getTodo = await getData("/api/v1/todo");
      if (getTodo) {
        setTodos(getTodo);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function addTodo() {
    try {
      const createdTodo = await createData("/api/v1/todo", {
        name: newTodo,
        status: "uncompleted", 
      });
      setTodos([...todos, createdTodo]);
      setNewTodo(""); 
      fetchTodo();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  async function deleteTodo(id: string) {
    try {
      await deleteData("/api/v1/todo", id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }
  
  
  async function toggleCompletion(id: string) {
    try {
      const statusToUpdate = "completed"; 
      const updatedTodo = await updateData("/api/v1/todo", id, { status: statusToUpdate });
  
      if (updatedTodo && updatedTodo.status) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, status: updatedTodo.status } : todo
          )
        );
        fetchTodo();
      } else {
        console.error("Invalid response from updateData:", updatedTodo);
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }
  
  
  
  
  
  
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        <h3>Uncompleted</h3>
        <ul>
          {todos
            .filter((todo) => todo.status === "uncompleted")
            .map((todo) => (
              <li key={todo.id}>
                {todo.name}{" "}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>{" "}
                <button onClick={() => toggleCompletion(todo.id)}>
                  Complete
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h3>Completed</h3>
        <ul>
          {todos
            .filter((todo) => todo.status === "completed")
            .map((todo) => (
              <li key={todo.id}>
                {todo.name}{" "}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
